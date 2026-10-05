import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd/JsonLd';
import { SITE_URL, ORG_NAME, buildBreadcrumbSchema, absoluteUrl } from '@/lib/seo';
import styles from './page.module.css';

const TITLE = 'Acrow Span (Telescopic Span)';
const DESCRIPTION = 'Acrow Span – adjustable telescopic spans for supporting concrete slabs. High load capacity, versatile for various site conditions.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/acrow-span-telescopic-span' },
  openGraph: {
    title: `${TITLE} | PeeKay Structural Equipments`,
    description: DESCRIPTION,
    url: absoluteUrl('/acrow-span-telescopic-span'),
    type: 'website',
    images: [{ url: `${SITE_URL}/images/acrow-span-scaffolding-fittings-1152x1536.jpg` }],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/#products' },
  { name: 'Acrow Span', path: '/acrow-span-telescopic-span' },
]);

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Acrow Span (Telescopic Span)',
  description: DESCRIPTION,
  image: `${SITE_URL}/images/acrow-span-scaffolding-fittings-1152x1536.jpg`,
  brand: { '@type': 'Brand', name: ORG_NAME },
  category: 'Formwork & Shuttering Support',
};

export default function AcrowSpanPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={productSchema} />
      {/* Banner */}
      <div className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Acrow Span</h1>
          <nav className={styles.heroBreadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/#products">Products</Link>
            <span>›</span>
            <span>Acrow Span</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>

            {/* Left — image */}
            <div className={styles.imageCol}>
              <Image
                src="/images/acrow-span-scaffolding-fittings-1152x1536.jpg"
                alt="Acrow Span scaffolding fittings"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

            {/* Right — text */}
            <div className={styles.contentCol}>
              <h2 className={styles.heading}>
                ACROW <span className={styles.red}>SPAN</span>
              </h2>
              <p className={styles.subtitle}>(TELESCOPIC SPAN)</p>

              <p className={styles.body}>
                It is a key element which is more helpful for construction. Normally these kinds of
                materials are being used for turnkey projects. This is being used to build side walls
                and ceiling points.
              </p>
              <p className={styles.body}>
                This provides an excellent means of supporting concrete slabs. Their rugged
                construction allows high load capacity, allowing the use of fewer shores, which saves
                time and labour costs.
              </p>
              <p className={styles.body}>
                In addition, Acrow spans are adjustable, making them versatile for various site
                conditions. Their telescopic design ensures flexibility in length, which allows
                contractors to adapt them to different spans without the need for multiple sizes of
                equipment. This adaptability makes them cost-effective, reduces storage
                requirements, and enhances safety on construction sites.
              </p>

              <p className={styles.subheading}>COUPLING PINS OR SPIGOT</p>
              <p className={styles.body} style={{ marginBottom: 0 }}>
                These are used for joining two pipes. The outer dia. is 38mm.<br />
                Made to best fit with cuplock system.
              </p>

              <div style={{ marginTop: 36 }}>
                <Link href="/contact-us" className="btn">Enquire Now</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
