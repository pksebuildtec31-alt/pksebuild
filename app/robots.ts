import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

// Deny by default: only these major search engines may crawl the site.
// Every other crawler (including AI scrapers such as GPTBot, CCBot, ClaudeBot,
// Bytespider, PerplexityBot, Google-Extended) falls through to the '*' Disallow rule.
const ALLOWED_SEARCH_ENGINES = ['Googlebot', 'Googlebot-Image', 'Bingbot'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...ALLOWED_SEARCH_ENGINES.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: '/api/',
      })),
      {
        userAgent: '*',
        disallow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
