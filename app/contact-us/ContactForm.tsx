'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import styles from './page.module.css';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', website: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const submittingRef = useRef(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Ref guard: state updates are async, so rapid double clicks could slip past `status`
    if (submittingRef.current) return;
    submittingRef.current = true;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      // Body is parsed defensively and never shown: the UI always uses its own generic message
      await res.json().catch(() => null);
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    } finally {
      submittingRef.current = false;
    }
  };

  return (
    <>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <nav className={styles.heroBreadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Contact Us</span>
          </nav>
        </div>
      </div>

      {/* Info cards row */}
      <div className={styles.infoRow}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
          </div>
          <p className={styles.infoLabel}>Visit Us</p>
          <p className={styles.infoValue}>
            SCO 21-22, 2nd Floor,<br />Zirakpur – 140603, Punjab
          </p>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          </div>
          <p className={styles.infoLabel}>Call Us</p>
          <p className={styles.infoValue}>
            <a href="tel:+919814506190">+91 98145 06190</a><br />
            <a href="tel:+919550612390">+91 95506 12390</a>
          </p>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </div>
          <p className={styles.infoLabel}>Email Us</p>
          <p className={styles.infoValue}>
            <a href="mailto:info.pksel@gmail.com">info.pksel@gmail.com</a><br />
            <a href="mailto:hyd@pkbuildtech.com">hyd@pkbuildtech.com</a>
          </p>
        </div>
      </div>

      {/* Main: form + offices */}
      <section className={styles.mainSection}>
        <div className="container">
          <div className={styles.mainGrid}>

            {/* Form */}
            <div className={styles.formCard}>
              <h2 className={styles.formHeading}>
                Send Us a <span className={styles.red}>Message</span>
              </h2>
              <p className={styles.formSubtitle}>
                Fill in the form below and our team will get back to you within 24 hours.
              </p>

              {status === 'sent' ? (
                <div className={styles.successBox}>
                  <strong>✓ Message sent successfully!</strong>
                  <p>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Honeypot — inert + aria-hidden keeps it out of the tab order and the
                      accessibility tree; bots that fill every input still trip it */}
                  <div
                    aria-hidden="true"
                    inert
                    style={{
                      position: 'absolute', width: 1, height: 1, margin: -1, padding: 0,
                      overflow: 'hidden', clip: 'rect(0 0 0 0)', clipPath: 'inset(50%)',
                      whiteSpace: 'nowrap', border: 0, pointerEvents: 'none',
                    }}
                  >
                    <input
                      name="website" type="text" tabIndex={-1} autoComplete="off"
                      value={form.website} onChange={handleChange}
                    />
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <input id="name" name="name" type="text" required placeholder=" "
                        value={form.name} onChange={handleChange} />
                      <label htmlFor="name">Your Name *</label>
                      <span className={styles.fieldLine} />
                    </div>
                    <div className={styles.field}>
                      <input id="email" name="email" type="email" required placeholder=" "
                        value={form.email} onChange={handleChange} />
                      <label htmlFor="email">Email Address *</label>
                      <span className={styles.fieldLine} />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.field}>
                      <input id="phone" name="phone" type="tel" required placeholder=" "
                        value={form.phone} onChange={handleChange} />
                      <label htmlFor="phone">Phone Number *</label>
                      <span className={styles.fieldLine} />
                    </div>
                    <div className={styles.field}>
                      <input id="subject" name="subject" type="text" placeholder=" "
                        value={form.subject} onChange={handleChange} />
                      <label htmlFor="subject">Subject</label>
                      <span className={styles.fieldLine} />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <textarea id="message" name="message" required placeholder=" "
                      value={form.message} onChange={handleChange} />
                    <label htmlFor="message">Your Message *</label>
                    <span className={styles.fieldLine} />
                  </div>
                  {status === 'error' && (
                    <p style={{ color: 'var(--color-red)', fontSize: 13, marginBottom: 16 }}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                  <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
                    {status === 'sending' ? (
                      <>Sending&hellip;</>
                    ) : (
                      <>
                        Send Message
                        <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="#fff" strokeWidth={2.2}>
                          <line x1="5" y1="12" x2="19" y2="12"/>
                          <polyline points="12 5 19 12 12 19"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Offices */}
            <div className={styles.officesSide}>
              <div className={styles.officeCard}>
                <p className={styles.officeTitle}>Head Office – Punjab</p>
                <div className={styles.officeItem}>
                  <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
                  <span>SCO 21-22, 2nd Floor, Shri Balaji Complex, Old Ambala Road, Dhakoli, Zirakpur – 140603 Punjab</span>
                </div>
                <div className={styles.officeItem}>
                  <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  <a href="tel:+919814506190">+91 98145 06190</a>
                </div>
                <div className={styles.officeItem}>
                  <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  <a href="mailto:info.pksel@gmail.com">info.pksel@gmail.com</a>
                </div>
              </div>

              <div className={styles.officeCard}>
                <p className={styles.officeTitle}>Telangana Office – Hyderabad</p>
                <div className={styles.officeItem}>
                  <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
                  <span>Survey No. 296/3/EE, IDA Bolaram, Patancheru, Sangareddy, Hyderabad – 502325</span>
                </div>
                <div className={styles.officeItem}>
                  <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  <a href="tel:+919550612390">+91 95506 12390</a>
                </div>
                <div className={styles.officeItem}>
                  <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  <a href="mailto:hyd@pkbuildtech.com">hyd@pkbuildtech.com</a>
                </div>
              </div>

              <div className={styles.mapWrap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.4!2d76.8!3d30.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM5JzAwLjAiTiA3NsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  height="220"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PeeKay Head Office Location"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
