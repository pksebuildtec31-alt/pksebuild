import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { posts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/company-story`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/company-gallery`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/acrow-span-telescopic-span`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/scaffolding`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/adjustable-telescopic-prop`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/pipes`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/steel-shuttering-plates`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/heavy-shuttering`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/projects`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/resources`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/contact-us`, changeFrequency: 'yearly', priority: 0.6 },
  ];

  const resourceRoutes: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${SITE_URL}/resources/${post.slug}`,
    lastModified: post.dateISO,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...resourceRoutes];
}
