import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd/JsonLd';
import { SITE_URL, ORG_NAME, buildBreadcrumbSchema, absoluteUrl } from '@/lib/seo';
import styles from './page.module.css';

const TITLE = 'Scaffolding – Cuplock System';
const DESCRIPTION = 'Cuplock scaffolding system for all forms of access and support structure. Safe, easy to use, maintenance free.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/scaffolding' },
  openGraph: {
    title: `${TITLE} | PeeKay Structural Equipments`,
    description: DESCRIPTION,
    url: absoluteUrl('/scaffolding'),
    type: 'website',
    images: [{ url: `${SITE_URL}/images/steel-bridge-construction-with-scaffolding-and-fra-2024-12-06-15-10-27-utc-1024x1536.jpg` }],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/#products' },
  { name: 'Scaffolding', path: '/scaffolding' },
]);

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cuplock Scaffolding System',
  description: DESCRIPTION,
  image: `${SITE_URL}/images/steel-bridge-construction-with-scaffolding-and-fra-2024-12-06-15-10-27-utc-1024x1536.jpg`,
  brand: { '@type': 'Brand', name: ORG_NAME },
  category: 'Scaffolding',
};

const features = [
  'It is safe, easy to use, easy to handle and is maintenance free.',
  'Its unique nodal joint allows four components to be connected in one single action which is not available in any other system.',
  'Versatile system for straight, curved and circular access structures, access towers and loading towers.',
  'It can be used for light or heavy duty support work by varying the position of horizontal ledgers.',
];

export default function ScaffoldingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={productSchema} />
      {/* Banner */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Scaffolding</h1>
          <nav className={styles.heroBreadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/#products">Products</Link>
            <span>›</span>
            <span>Scaffolding</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>

            {/* Left — two stacked images */}
            <div className={styles.imageCol}>
              <div className={styles.imgLarge}>
                <Image
                  src="/images/steel-bridge-construction-with-scaffolding-and-fra-2024-12-06-15-10-27-utc-1024x1536.jpg"
                  alt="Steel bridge scaffolding construction"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className={styles.imgSmall}>
                <Image
                  src="/images/steptodown.com962715-1024x683.jpg"
                  alt="Scaffolding structure"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            </div>

            {/* Right — text */}
            <div className={styles.contentCol}>
              <p className={styles.tagline}>Simplify your building process</p>
              <h2 className={styles.headingBlue}>Scaffolding System</h2>
              <h2 className={styles.headingRed}>Cuplock Scaffolding</h2>

              <p className={styles.body}>
                Cuplock System is a proven multi-purpose system which can be used for all forms of
                access and support structure in all sectors of the construction industry,
                shipbuilding, boiler maintenance and industrial maintenance. This system reduces
                erection and dismantling time above all other systems reducing labour cost.
              </p>

              <p className={styles.featuresHeading}>Key Features:</p>
              <ul className={styles.featureList}>
                {features.map((f, i) => (
                  <li key={i}>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link href="/contact-us" className="btn">Enquire Now</Link>
            </div>

          </div>
        </div>
      </section>
      {/* Cuplock 2 Main Parts */}
      <section className={styles.partsSection}>
        <div className="container">
          <h2 className={styles.partsHeading}>
            CUPLOCK SYSTEM{' '}
            <span className={styles.red}>CONSISTS OF 2 MAIN PARTS</span>
          </h2>
          <div className={styles.partsGrid}>

            {/* Left — Vertical */}
            <div className={styles.partCol}>
              <span className={`${styles.partBadge} ${styles.partBadgeRed}`}>
                Cuplock Standard (Vertical)
              </span>
              <p className={styles.partSubheading}>CUPLOCK STANDARD (VERTICAL)</p>
              <div className={styles.partImage}>
                <Image
                  src="/images/Standard_Vertical_Cuplock-removebg-preview-Edited.png"
                  alt="Cuplock Standard Vertical"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'contain', objectPosition: 'left center' }}
                />
              </div>
              <p className={styles.partBody}>
                Welded bottom cups are pressed from high quality steel and captive mobile top cups
                made out of malleable casting provide firm grip to ledger blades making the
                connection rigid and to endure rough site handling. Access standards are provided
                with integral 150mm long spigots for making easy vertical connections. All standard
                sizes are available and special sizes are available on request.
              </p>
            </div>

            {/* Right — Horizontal Ledger */}
            <div className={styles.partCol}>
              <span className={`${styles.partBadge} ${styles.partBadgeBlue}`}>
                Cuplock (Horizontal Ledger)
              </span>
              <p className={styles.partSubheading}>CUPLOCK (HORIZONTAL LEDGER)</p>
              <div className={styles.partImage}>
                <Image
                  src="/images/images-2.jpeg"
                  alt="Cuplock Horizontal Ledger"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'contain', objectPosition: 'left center' }}
                />
              </div>
              <p className={styles.partBody}>
                Cuplock System is a proven multi-purpose system which can be used for all forms of
                access and support structure in all sectors of the construction industry,
                shipbuilding, boiler maintenance and industrial maintenance. This system reduces
                erection and dismantling time above all other systems reducing labour cost.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Couplers */}
      <section className={styles.couplerSection}>
        <div className="container">
          <p className={styles.couplerH2}>COUPLERS</p>
          <p className={styles.couplerBody}>
            Couplers are used to connect two pipes at a fixed or variable angle. These are of two types:
          </p>
          <p className={styles.couplerBody}>
            <strong>(1) Fixed Coupler &nbsp;&nbsp;(2) Swivel Coupler</strong>
          </p>

          <p className={styles.couplerH3}>FIXED COUPLER</p>
          <p className={styles.couplerBody}>
            Pressed fixed couplers connect two scaffold pipes at right angles. These are critical
            components in the scaffold structure. These are load bearing enough to resist both slip
            and distortion. The design is based on a strong one-piece body with naps and T-bolts
            that can be removed for maintenance or replacement.{' '}
            <strong>Available size:</strong> For fitting of scaffolding pipe size with outer dia. of 48.3mm.
          </p>

          <p className={styles.couplerH3}>SWIVEL COUPLER</p>
          <p className={styles.couplerBody}>
            Pressed swivel couplers connect two scaffold tubes at any angle to provide a ledger
            brace, faced, or similar bracing. Weight: <strong>1 kg (approx.)</strong>
          </p>
          <ul className={styles.couplerList}>
            <li>Maximum safe working loads to Bs5973. Slip along tube: 6.3kN.</li>
            <li>Size: 48.3 mm</li>
            <li>Min. Slip Load: 12.5 KN.</li>
            <li>Min. Distortion Load: 17 KN.</li>
          </ul>
        </div>
      </section>

      {/* Locking device section */}
      <section className={styles.lockSection}>
        <div className="container">
          <div className={styles.lockGrid}>
            <div className={styles.lockImage}>
              <Image
                src="/images/cuplock-removebg-preview.png"
                alt="Cuplock locking device"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div>
              <p className={styles.lockText}>
                The locking device is formed by two cups at 500mm c/c, bottom cup welded to
                vertical tube and a movable upper cup. The forged blade ends of horizontal are
                located into the bottom cup, the upper cup is moved down and rotated to secure
                the horizontal in place and tightened by a hammer blow to give rigid connection.
              </p>
              <Link href="/contact-us" className={`btn ${styles.lockBtn}`}>
                Contact Us &nbsp;›
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
