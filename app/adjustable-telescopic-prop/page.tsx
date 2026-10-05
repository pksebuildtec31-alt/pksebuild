import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd/JsonLd';
import { SITE_URL, ORG_NAME, buildBreadcrumbSchema, absoluteUrl } from '@/lib/seo';
import styles from './page.module.css';

const TITLE = 'Adjustable Telescopic Prop';
const DESCRIPTION = 'Adjustable telescopic props – ideal for all kinds of building construction and repair. Completely adjustable, robust, and easy to handle.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/adjustable-telescopic-prop' },
  openGraph: {
    title: `${TITLE} | PeeKay Structural Equipments`,
    description: DESCRIPTION,
    url: absoluteUrl('/adjustable-telescopic-prop'),
    type: 'website',
    images: [{ url: `${SITE_URL}/images/prop.jpg` }],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/#products' },
  { name: 'Adjustable Telescopic Prop', path: '/adjustable-telescopic-prop' },
]);

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Adjustable Telescopic Prop',
  description: DESCRIPTION,
  image: `${SITE_URL}/images/prop.jpg`,
  brand: { '@type': 'Brand', name: ORG_NAME },
  category: 'Formwork & Shuttering Support',
};

const features = [
  'Completely adjustable for height.',
  'Extremely robust, easy to handle, compact to store.',
  'Quickly and simply erected.',
  'No loose parts, no tools necessary.',
  'Head plates suit modern framework systems for slab construction.',
  'Sizes OM to 4M confirms fully to BS 4047: 1966.',
];

export default function AdjustableTelescopicPropPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={productSchema} />
      {/* Banner */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Adjustable Telescopic Prop</h1>
          <nav className={styles.heroBreadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/#products">Products</Link>
            <span>›</span>
            <span>Adjustable Telescopic Prop</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>

            {/* Left — red-framed large image + small overlay */}
            <div className={styles.imageCol}>
              <div className={styles.imgFrame}>
                <div className={styles.imgFrameInner}>
                  <Image
                    src="/images/prop.jpg"
                    alt="Adjustable telescopic prop"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
              </div>
              <div className={styles.imgSmall}>
                <Image
                  src="/images/H259db339676a4229a3526f0f56f5986ex-1024x1024.jpg"
                  alt="Telescopic prop detail"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right — text */}
            <div className={styles.contentCol}>
              <h2 className={styles.headingBlue}>ADJUSTABLE</h2>
              <h2 className={styles.headingRed}>TELESCOPIC PROP</h2>

              <p className={styles.boldPara}>
                popular method of support in the building industry today. Ideally suited to all
                kinds of building construction and repair.
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
      {/* Technical details */}
      <section className={styles.techSection}>
        <div className="container">
          <div className={styles.techGrid}>

            {/* Left — text */}
            <div>
              <p className={styles.techBody}>
                A threaded external tube in combination with an internal tube with intermediate holes
                gives the desirable extended size within the maximum and minimum extended range of the
                prop. It&apos;s a self-leaning stub on the collar nut, when rotated automatically cleans
                the threads of dirt, cement and other foreign substances that hamper quick and easy
                adjustment. Simple insertion of a rod in the holed base on the collar nut facilitates
                turning of the collar nut in confined spaces.
              </p>
              <p className={styles.techBody}>
                Compatible holes on base plates and head plates of 150 x 150 mm help double staging
                when required. Beam head version comprising of 300 x 100 mm head plate is also
                available for wider support. Stir-up heads snugly fit into either plate without any
                additional fastening. <strong>PRODUCT SPECIFICATION</strong>
              </p>
              <ul className={styles.techList}>
                <li>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  Outer: 60.3 mm O.D., 3.8 mm Wall Thickness
                </li>
                <li>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  Inner: 48.3 mm O.D., 3.15 mm Wall Thickness
                </li>
              </ul>
            </div>

            {/* Right — image */}
            <div className={styles.techImage}>
              <Image
                src="/images/adjustable-steel-telescopic-prop-802958216-nzwc6h79.jpg"
                alt="Adjustable steel telescopic prop"
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
