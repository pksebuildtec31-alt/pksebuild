import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

// Only OpenAI (ChatGPT) and Google AI crawlers are allowed, and slowed with a crawl delay.
// Googlebot, Bingbot and facebookexternalhit fall under the '*' rule and are untouched.
const ALLOWED_AI_CRAWLERS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'Google-Extended'];

// Every other AI crawler is blocked entirely.
const BLOCKED_AI_CRAWLERS = [
  'meta-externalagent',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot-Extended',
  'Bytespider',
  'CCBot',
  'Amazonbot',
  'cohere-ai',
  'Diffbot',
  'DuckAssistBot',
  'MistralAI-User',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ALLOWED_AI_CRAWLERS,
        allow: '/',
        disallow: '/api/',
        crawlDelay: 10,
      },
      {
        userAgent: BLOCKED_AI_CRAWLERS,
        disallow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
