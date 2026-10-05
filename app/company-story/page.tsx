import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd/JsonLd';
import { SITE_URL, buildBreadcrumbSchema, absoluteUrl } from '@/lib/seo';
import styles from './page.module.css';

const TITLE = 'Company Story';
const DESCRIPTION = 'Learn about PeeKay Structural Equipments – 38 years of excellence in scaffolding and shuttering solutions across India.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/company-story' },
  openGraph: {
    title: `${TITLE} | PeeKay Structural Equipments`,
    description: DESCRIPTION,
    url: absoluteUrl('/company-story'),
    type: 'website',
    images: [{ url: `${SITE_URL}/images/construction-in-a-renovated-room-2023-11-27-05-27-01-utc.jpg` }],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Company Story', path: '/company-story' },
]);

export default function CompanyStoryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1>Company Story</h1>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span>Company Story</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Who We Are + What We Offer */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introGrid}>

            {/* Left: heading + text + image */}
            <div className={styles.leftCol}>
              <h2 className={styles.sectionHeading}>
                Who <span className={styles.red}>We Are</span>
              </h2>
              <p className={styles.introPara}>
                <strong>PeeKay Structural Equipments Pvt Ltd</strong> is one of India&apos;s most
                trusted and experienced suppliers of scaffolding and shuttering equipment. Since
                1987, we have been serving the construction industry with reliable, durable, and
                high-performance materials designed to meet international standards. Our mission is
                to support quality construction with equipment that ensures strength, safety, and
                stability on every project.
              </p>
              <div className={styles.colImage}>
                <Image
                  src="/images/construction-in-a-renovated-room-2023-11-27-05-27-01-utc.jpg"
                  alt="Shuttering construction site"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right: image + What We Offer + list + button */}
            <div className={styles.rightCol}>
              <div className={styles.rightTopImage}>
                <Image
                  src="/images/industrial-welding-worker-steel-work-construction-area-building_25169-287.jpg"
                  alt="Industrial construction"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h2 className={styles.sectionHeading}>
                What <span className={styles.red}>We Offer</span>
              </h2>
              <p className={styles.offerIntro}>
                We specialize in a comprehensive range of construction materials available on{' '}
                <strong>rent and hire</strong>, including:
              </p>
              <ul className={styles.offerList}>
                {[
                  'Shuttering Plates',
                  'Cuplocks (Horizontal & Vertical)',
                  'Props, Acrow Spans, Joint Pins',
                  'Channels, Base Plates, Adjustable Jacks',
                  'MS Pipes, Planks, Couplers',
                ].map(item => (
                  <li key={item}>
                    <svg className={styles.checkIcon} viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact-us" className="btn" style={{ minWidth: 180, textAlign: 'center', whiteSpace: 'nowrap' }}>
                Contact Us &nbsp;›
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Vision — full-width banner (solid background colour) */}
      <section className={styles.videoBanner}>
        <div className={styles.videoContent}>
          <h2 className={styles.videoHeading}>
            Trusted by Builders, Backed<br />by Performance
          </h2>
          <p className={styles.videoDesc}>
            With over three decades of excellence, PeeKay Structural Equipments Pvt Ltd is the
            name behind countless successful projects. Builders across India rely on us for durable
            equipment, timely delivery, and consistent performance.
          </p>
          <Link href="/contact-us" className="btn">View More &nbsp;›</Link>
        </div>
      </section>

      {/* Build the Dream */}
      <section className={styles.dreamSection}>
        <div className={styles.dreamSectionBg} />
        <div className={styles.dreamSectionOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.dreamHeader}>
            <span className={styles.dreamTag}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={styles.dreamTagIcon}>
                <path d="M2 20h20M4 20V10l8-7 8 7v10M9 20v-5h6v5"/>
              </svg>
              What we do
            </span>
            <h2 className={styles.dreamHeading}>
              Build <span className={styles.red}>the dream</span>
            </h2>
            <p className={styles.dreamSubtitle}>Turning Blueprints into Reality with Trusted Support</p>
          </div>
          <div className={styles.dreamCards}>
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
                    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
                  </svg>
                ),
                title: 'Any Project, Any Scale',
                desc: 'Reliable solutions for residential, commercial, and industrial sites of any size.',
                image: '/images/high-scaffolding-structure-under-construction-beam-2025-06-17-22-45-40-utc-scaled.jpg',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
                    <path d="M2 20h20M6 20V10M18 20V10M2 10l10-8 10 8M10 20v-6h4v6"/>
                    <path d="M14 6h4v4"/>
                    <line x1="16" y1="6" x2="16" y2="2"/>
                    <line x1="14" y1="2" x2="18" y2="2"/>
                  </svg>
                ),
                title: 'Faster, Smarter Builds',
                desc: 'Quick delivery and ready-to-use materials keep your project moving.',
                image: '/images/crane-and-building-construction-site-on-background-2025-03-16-05-22-01-utc.jpg',
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
                    <rect x="2" y="14" width="20" height="6" rx="1"/>
                    <path d="M6 14V8h12v6"/>
                    <path d="M4 8h16"/>
                    <path d="M8 8V5l4-3 4 3v3"/>
                  </svg>
                ),
                title: 'Safety You Can Trust',
                desc: 'Strong, stable systems tested for tough site conditions.',
                image: '/images/construction-of-building-using-scaffolding-facade-2025-03-09-05-37-45-utc-scaled.jpg',
              },
            ].map((card, i) => (
              <div key={i} className={styles.dreamCard}>
                <div className={styles.dreamCardBg} style={{ backgroundImage: `url('${card.image}')` }} />
                <div className={styles.dreamCardDark} />
                <div className={styles.dreamCardContent}>
                  <div className={styles.dreamCardIcon}>{card.icon}</div>
                  <h4 className={styles.dreamCardTitle}>{card.title}</h4>
                  <p className={styles.dreamCardDesc}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
