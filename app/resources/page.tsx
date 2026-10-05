import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd/JsonLd';
import { SITE_URL, ORG_NAME, buildBreadcrumbSchema, absoluteUrl } from '@/lib/seo';
import { posts } from '@/lib/posts';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Resources & Blog',
  description: 'Read insights on scaffolding, shuttering, and formwork systems from PeeKay\'s expert team.',
  alternates: { canonical: '/resources' },
  openGraph: {
    title: 'Resources & Blog | PeeKay Structural Equipments',
    description: 'Read insights on scaffolding, shuttering, and formwork systems from PeeKay\'s expert team.',
    url: absoluteUrl('/resources'),
    type: 'website',
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Resources', path: '/resources' },
]);

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'PeeKay Structural Equipments Resources & Blog',
  url: absoluteUrl('/resources'),
  blogPost: posts.map(post => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: absoluteUrl(`/resources/${post.slug}`),
    image: `${SITE_URL}${post.image}`,
    datePublished: post.dateISO,
    author: { '@type': 'Organization', name: ORG_NAME },
  })),
};

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={blogSchema} />

      {/* Banner */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Resources &amp; Blogs</h1>
          <nav className={styles.heroBreadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Resources</span>
          </nav>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <span className="section-tag">Insights</span>
            <h2>
              Our Latest <span className="text-red">Blogs</span>
            </h2>
            <p style={{ maxWidth: 580, margin: '14px auto 0', color: 'var(--color-text)' }}>
              Industry knowledge, tips, and insights from PeeKay&apos;s team of formwork experts.
            </p>
          </div>

          <div className="blog-grid">
            {posts.map(post => (
              <div key={post.slug} className="blog-card">
                <div className={styles.cardImg}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
                <div className="blog-card-body">
                  <p className="blog-date">{post.date}</p>
                  <h3>{post.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7 }}>{post.excerpt}</p>
                  <Link href={`/resources/${post.slug}`} className="blog-read-more">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
