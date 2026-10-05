import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd/JsonLd';
import { SITE_URL, ORG_NAME, buildBreadcrumbSchema, absoluteUrl } from '@/lib/seo';
import styles from './page.module.css';

const TITLE = 'Steel Shuttering Plates';
const DESCRIPTION = 'High tensile steel shuttering plates with MIG welded construction for smooth, strong formwork. All standard sizes available.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/steel-shuttering-plates' },
  openGraph: {
    title: `${TITLE} | PeeKay Structural Equipments`,
    description: DESCRIPTION,
    url: absoluteUrl('/steel-shuttering-plates'),
    type: 'website',
    images: [{ url: `${SITE_URL}/images/modular-formwork-panel-system-2025-03-14-07-43-23-utc-1024x683.jpg` }],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/#products' },
  { name: 'Steel Shuttering Plates', path: '/steel-shuttering-plates' },
]);

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Steel Shuttering Plates',
  description: DESCRIPTION,
  image: `${SITE_URL}/images/modular-formwork-panel-system-2025-03-14-07-43-23-utc-1024x683.jpg`,
  brand: { '@type': 'Brand', name: ORG_NAME },
  category: 'Formwork & Shuttering Support',
};

export default function SteelShutteringPlatesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={productSchema} />
      {/* Banner */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Steel Shuttering Plates</h1>
          <nav className={styles.heroBreadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/#products">Products</Link>
            <span>›</span>
            <span>Steel Shuttering Plates</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>

            {/* Left — text */}
            <div>
              <h2 className={styles.headingBlue}>STEEL</h2>
              <h2 className={styles.headingBlue}>SHUTTERING</h2>
              <h2 className={styles.headingRed}>PLATES</h2>

              <p className={styles.body}>
                Steel shuttering plates are built using high tensile and powerful steel to support
                big construction sites, avoiding any kind of danger, thereby ensuring safety. We use
                superior quality raw material to construct every inch of steel shuttering plates. Hot
                rolled sheets of 3.15mm thickness are used due to wrinkle free nature of the sheet.
                This provides smoothness to the ceiling. We also offer MIG welded steel shuttering
                plates which are known for their high strength, excellent finish, less maintenance
                and longer life. Steel shuttering provided by us is a frame or slide of steel that
                helps in providing a strong framework to any construction for long lasting
                foundation. Side bar (flat) of 40mm x 6mm is used to provide additional strength.
              </p>
              <p className={styles.body}>
                All standard sizes of steel plates are available. Non-standard sizes can be provided
                on demand. Proper care is taken for the accuracy of sizes. Proper buffing is done on
                the plates, before re-issue, to make them completely smooth for the best results.
              </p>
            </div>

            {/* Right — image */}
            <div className={styles.imageCol}>
              <Image
                src="/images/modular-formwork-panel-system-2025-03-14-07-43-23-utc-1024x683.jpg"
                alt="Steel shuttering plates formwork"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

          </div>
        </div>
      </section>
      {/* Comprehensive Supply */}
      <section className={styles.supplySection}>
        <div className="container">
          <h2 className={styles.supplyHeading}>
            Comprehensive Supply of Steel{' '}
            <span className={styles.red}>Columns, Channels, Beams &amp; Planks</span>
          </h2>

          <div className={styles.cardsGrid}>
            {[
              {
                image: '/images/steptodown.com565763-768x509.jpg',
                alt: 'Steel columns',
                title: 'Steel square / Round columns',
                text: 'Round columns are available in the varying sizes of 9", 12", 15" inner diameter and 6\' height. Square columns are available in all standard sizes upto 24".',
              },
              {
                image: '/images/stack-of-many-gray-rust-proof-lip-channel-steel-ma-2025-03-11-05-36-39-utc-768x447.jpg',
                alt: 'Steel channels',
                title: 'CHANNELS',
                text: 'These are used to support the plates which are properly drilled. Bits are properly welded onto channels to provide support to the plates. Sizes - 75mmx40mm and of varying lengths.',
              },
              {
                image: '/images/challi.webp',
                alt: 'Planks challi',
                title: 'PLANKS / CHALLI',
                text: 'These are very useful for masons/labourers while construction and painting of vertical structures. Square pipe of 1"x1" and angles are used on both ends for providing additional strength and safety.',
              },
            ].map((card, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardTitle}>{card.title}</p>
                  <p className={styles.cardText}>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
