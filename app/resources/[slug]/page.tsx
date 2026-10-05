import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd/JsonLd';
import { SITE_URL, ORG_NAME, ORG_LOGO, buildBreadcrumbSchema, absoluteUrl } from '@/lib/seo';
import { posts } from '@/lib/posts';

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/resources/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: absoluteUrl(`/resources/${post.slug}`),
      images: [{ url: `${SITE_URL}${post.image}` }],
      publishedTime: post.dateISO,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`${SITE_URL}${post.image}`],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);
  if (!post) notFound();

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Resources', path: '/resources' },
    { name: post.title, path: `/resources/${post.slug}` },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    url: absoluteUrl(`/resources/${post.slug}`),
    author: { '@type': 'Organization', name: ORG_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      logo: { '@type': 'ImageObject', url: ORG_LOGO },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(`/resources/${post.slug}`) },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />

      <div className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}>{post.title}</h1>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <Link href="/resources">Resources</Link>
              <span className="breadcrumb-sep">›</span>
              <span>Blog</span>
            </nav>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ marginBottom: 24 }}>
            <span className="blog-date" style={{ color: 'var(--color-gold)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>
              {post.date}
            </span>
          </div>
          <div
            style={{
              lineHeight: 1.9,
              fontSize: 15,
              color: 'var(--color-text)',
              whiteSpace: 'pre-line',
            }}
          >
            {post.content}
          </div>
          <div style={{ marginTop: 50, paddingTop: 30, borderTop: '1px solid #eee' }}>
            <Link href="/resources" style={{ color: 'var(--color-red)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              ← Back to Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
