import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const MAX_BODY_BYTES = 20 * 1024;

const LIMITS = {
  name: 100,
  email: 254,
  phone: 25,
  subject: 150,
  message: 3000,
  website: 100,
} as const;

type FieldName = keyof typeof LIMITS;

// Best-effort per-instance rate limit (serverless instances don't share memory,
// so pair this with a Vercel WAF rate-limit rule on /api/contact).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(t => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every(t => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return false;
}

const EMAIL_RE = /^[^\s@<>"',;:()[\]\\]+@[^\s@<>"',;:()[\]\\]+\.[^\s@<>"',;:()[\]\\]+$/;
const PHONE_RE = /^\+?[0-9][0-9\s\-().]{5,23}[0-9]$/;

// Strip CR/LF and control characters so user input can never inject mail headers
const singleLine = (value: string) => value.replace(/[\u0000-\u001f\u007f]+/g, ' ').trim();

const json = (body: Record<string, unknown>, status: number) =>
  NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } });

const invalid = () => json({ error: 'Invalid request.' }, 400);

export function GET() {
  return NextResponse.json(
    { error: 'Method not allowed.' },
    { status: 405, headers: { Allow: 'POST' } },
  );
}
export const PUT = GET;
export const PATCH = GET;
export const DELETE = GET;

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    if (rateLimited(ip)) {
      return json({ error: 'Too many requests. Please try again later.' }, 429);
    }

    const contentType = request.headers.get('content-type') ?? '';
    if (contentType.split(';')[0].trim().toLowerCase() !== 'application/json') {
      return json({ error: 'Unsupported content type.' }, 415);
    }

    const declared = Number(request.headers.get('content-length'));
    if (Number.isFinite(declared) && declared > MAX_BODY_BYTES) {
      return json({ error: 'Request too large.' }, 413);
    }

    // Content-Length can be absent or wrong, so enforce the limit on the actual body too
    let raw: string;
    try {
      raw = await request.text();
    } catch {
      return invalid();
    }
    if (Buffer.byteLength(raw, 'utf8') > MAX_BODY_BYTES) {
      return json({ error: 'Request too large.' }, 413);
    }

    let body: unknown;
    try {
      body = JSON.parse(raw);
    } catch {
      return invalid();
    }
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return invalid();
    }

    // Every accepted value must be a string; absent optional values default to ''
    const input = body as Record<string, unknown>;
    const values = {} as Record<FieldName, string>;
    for (const key of Object.keys(LIMITS) as FieldName[]) {
      const value = input[key];
      if (value === undefined || value === null) {
        values[key] = '';
      } else if (typeof value === 'string') {
        values[key] = value.trim();
      } else {
        return invalid();
      }
      if (values[key].length > LIMITS[key]) return invalid();
    }

    // Honeypot: real users never fill this hidden field. Respond as if it worked.
    if (values.website) {
      return json({ success: true }, 200);
    }

    const name = singleLine(values.name);
    const email = singleLine(values.email);
    const phone = singleLine(values.phone);
    const subject = singleLine(values.subject);
    const message = values.message.replace(/\r\n?/g, '\n');

    if (!name || !email || !phone || !message) {
      return json({ error: 'Required fields missing.' }, 400);
    }
    if (!EMAIL_RE.test(email) || !PHONE_RE.test(phone)) {
      return invalid();
    }

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO_EMAIL;
    if (!user || !pass || !to) {
      console.error('Contact form: mail environment is not configured');
      return json({ error: 'Unable to send message right now.' }, 500);
    }

    // Created only after validation succeeds
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
    });

    await transporter.sendMail({
      from: `"PKSE Website" <${user}>`,
      to,
      replyTo: email,
      subject: `Contact Form: ${subject || 'New enquiry'}`,
      // Plain text only: user input is never interpreted as HTML
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Subject: ${subject || '-'}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    return json({ success: true }, 200);
  } catch (err) {
    // Log only the error message, never the stack, request body or credentials
    console.error('Contact form email error:', err instanceof Error ? err.message : 'unknown');
    return json({ error: 'Unable to send message right now.' }, 500);
  }
}
