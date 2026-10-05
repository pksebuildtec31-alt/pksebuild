import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd/JsonLd';
import { SITE_URL, ORG_NAME, buildBreadcrumbSchema, absoluteUrl } from '@/lib/seo';
import styles from './page.module.css';

const TITLE = 'Pipes';
const DESCRIPTION = 'High-quality scaffolding pipes for construction support. 48.3mm OD, available up to 6 metres.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/pipes' },
  openGraph: {
    title: `${TITLE} | PeeKay Structural Equipments`,
    description: DESCRIPTION,
    url: absoluteUrl('/pipes'),
    type: 'website',
    images: [{ url: `${SITE_URL}/images/steptodown.com922260-1024x683.jpg` }],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/#products' },
  { name: 'Pipes', path: '/pipes' },
]);

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Scaffolding Pipes',
  description: DESCRIPTION,
  image: `${SITE_URL}/images/steptodown.com922260-1024x683.jpg`,
  brand: { '@type': 'Brand', name: ORG_NAME },
  category: 'Scaffolding',
};

export default function PipesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={productSchema} />
      {/* Banner */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Pipes</h1>
          <nav className={styles.heroBreadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/#products">Products</Link>
            <span>›</span>
            <span>Pipes</span>
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
                src="/images/steptodown.com922260-1024x683.jpg"
                alt="Scaffolding pipes"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

            {/* Right — text */}
            <div className={styles.contentCol}>
              <h2 className={styles.heading}>Pipes</h2>
              <p className={styles.body}>
                Tubes and fittings are widely used for supporting man and materials, tools and
                tackles during construction, alteration, demolition and maintenance works because
                of their several advantages over conventional type of timber/bamboo scaffolding.
              </p>
              <p className={styles.body}>
                The standard tube size of our scaffolding pipes is 48.3 mm outside diameter and
                3.2 mm wall thickness. Further, these scaffolding tubes can be supplied in
                predetermined lengths upto 6.00 meters as per the application.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* Adjustable Jacks */}
      <section className={styles.jacksSection}>
        <div className="container">
          <div className={styles.jacksGrid}>

            {/* Left — text */}
            <div>
              <h2 className={styles.jacksHeadingBlue}>ADJUSTABLE</h2>
              <h2 className={styles.jacksHeadingRed}>JACKS</h2>

              <p className={styles.jacksSubheading}>Adjustable Stir-up Heads</p>
              <p className={styles.jacksBody}>
                Adjustable Stir-up Heads (U – Jack) are fitments for carrying beams supporting
                floor forms. This has a jack nut which provides accurate adjustment.<br />
                It has a solid stem of 35mm nominal diameter which has a nut restraint to ensure
                the stem always has a minimum engagement into the standard of 150mm.<br />
                The U-Head is capable of accepting twin 100mm wide bearers.
              </p>

              <p className={styles.jacksSubheading}>Base Plate and Adjustable Base Plate</p>
              <p className={styles.jacksBody}>
                The base plate and adjustable base plate are used to secure H Frames to the
                ground. Adjustable base plates are similar to strip heads but used for precise
                rise especially on uneven surfaces.
              </p>
            </div>

            {/* Right — image */}
            <div className={styles.jacksImage}>
              <Image
                src="/images/steptodown.com151971-e1754484723406.jpg"
                alt="Adjustable jacks construction"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
