import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd/JsonLd';
import { SITE_URL, ORG_NAME, buildBreadcrumbSchema, absoluteUrl } from '@/lib/seo';
import styles from './page.module.css';

const TITLE = 'Heavy Shuttering – Crib System';
const DESCRIPTION = 'Advanced crib system and heavy steel shuttering plates for bridges, basements, and large-span construction.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/heavy-shuttering' },
  openGraph: {
    title: `${TITLE} | PeeKay Structural Equipments`,
    description: DESCRIPTION,
    url: absoluteUrl('/heavy-shuttering'),
    type: 'website',
    images: [{ url: `${SITE_URL}/images/construction.jpg` }],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/#products' },
  { name: 'Heavy Shuttering', path: '/heavy-shuttering' },
]);

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Heavy Shuttering – Crib System',
  description: DESCRIPTION,
  image: `${SITE_URL}/images/construction.jpg`,
  brand: { '@type': 'Brand', name: ORG_NAME },
  category: 'Formwork & Shuttering Support',
};

export default function HeavyShutteringPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={productSchema} />
      {/* Banner */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Heavy Shuttering</h1>
          <nav className={styles.heroBreadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/#products">Products</Link>
            <span>›</span>
            <span>Heavy Shuttering</span>
          </nav>
        </div>
      </div>

      {/* Crib section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>

            {/* Left — image */}
            <div className={styles.imageCol}>
              <Image
                src="/images/construction.jpg"
                alt="Crib system construction"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

            {/* Right — text */}
            <div>
              <h2 className={styles.heading}>CRIB</h2>
              <p className={styles.body}>
                These are the most advanced telescopic centering systems that are basically used to
                support floor forms while laying slabs. This versatile system can easily be used and
                erected by unskilled labour. It virtually eliminates vertical propping and permits free
                space beneath the spans. It comprises of an inner and an outer lattice member (as
                illustrated). A combination of inner and outer lattice members of sizes indicated
                below can bridge spans as small as 1892 mm to as Large as 5510 mm. On having
                decided the combination of lattice members best suited to give the required span and
                the size of the floor form, the lattice members are telescoped to achieve the required
                span and locked into position by means of the &ldquo;I&rdquo; bolts provided at ends of the outer
                lattice member.
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* Heavy Steel Shuttering Plates */}
      <section className={styles.steelSection}>
        <div className="container">
          <div className={styles.steelGrid}>

            {/* Left — text */}
            <div>
              <h2 className={styles.steelHeadingBlue}>HEAVY STEELS</h2>
              <h2 className={styles.steelHeadingRed}>SHUTTERING</h2>
              <h2 className={styles.steelHeadingRedLast}>PLATES</h2>
              <p className={styles.steelBody}>
                Steel shuttering plates are built using high tensile and powerful steel to support
                big construction sites, avoiding any kind of danger, thereby ensuring safety. We use
                superior quality raw material to construct every inch of steel shuttering plates. Hot
                rolled sheets of 4mm thickness are used due to wrinkle free nature of the sheet.
                This provides smoothness to the ceiling. We also offer MIG welded steel shuttering
                plates which are known for their high strength, excellent finish, less maintenance
                and longer life. Steel shuttering provided by us is a frame or slide of steel that
                helps in providing a strong framework to any construction for long lasting
                foundation. Side angles of 50x50x6 and flats of 50×6 are used to provide
                additional strength. Available sizes: 1m x 0.5m, 1m x 1m, 1mx 1.25m and 1mx 1.5m.
              </p>
            </div>

            {/* Right — image */}
            <div className={styles.steelImage}>
              <Image
                src="/images/steptodown.com833866-1024x683.jpg"
                alt="Heavy steel shuttering plates"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

          </div>
        </div>
      </section>
      {/* Girders */}
      <section className={styles.girderSection}>
        <div className={styles.girderBg} />
        <div className={styles.girderOverlay} />
        <div className={styles.girderContent}>
          <h2 className={styles.girderTitle}>GIRDERS</h2>
          <p className={styles.girderBody}>
            Heavy duty Girders/Beams are used to support heavy structures. These are specially
            used for bridges and basement construction. They are of I beam cross section for strength.
          </p>
          <Link href="/contact-us" className="btn">contact Us &nbsp;›</Link>
        </div>
      </section>
    </>
  );
}
