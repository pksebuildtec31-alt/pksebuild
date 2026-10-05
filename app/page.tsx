import Image from 'next/image';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider/HeroSlider';
import ClientLogos from '@/components/ClientLogos/ClientLogos';
import Testimonials from '@/components/Testimonials/Testimonials';
import ProductsSection from '@/components/ProductsSection/ProductsSection';
import HowWeWork from '@/components/HowWeWork/HowWeWork';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Build with Strength — 40% text | 60% five-strip image accordion */}
      <section className={styles.buildSection}>
        <div className={styles.buildGrid}>
          {/* Left 40% */}
          <div className={styles.buildContent}>
            <h2>
              Build with<br />
              <span className="text-red">Strength</span>
            </h2>
            <p>
              At <strong>PeeKay Structural Equipments Pvt Ltd</strong> we deliver{' '}
              <span className="text-red">high-quality, reliable,</span> and safe formwork solutions
              to power the infrastructure of tomorrow. Whether you&apos;re building residential towers,
              commercial complexes, or large-scale industrial units, our scaffolding and shuttering
              systems are engineered for performance, efficiency, and reusability.
            </p>
            <Link href="/company-story" className="btn">Learn More &nbsp;›</Link>
          </div>

          {/* Right 60% — base image + full-width hover reveals */}
          {/*
            DOM order (child positions matter for :has() CSS):
              1  → basePanelImg
              2–6 → fullImg × 5
              7–11 → panelZone × 5 (transparent hover triggers)
          */}
          <div className={styles.imagePanel}>
            {/* Always-visible base image */}
            <div className={styles.basePanelImg}>
              <Image
                src="/images/construction-major-housing-project-sunset_53876-50959.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Full-width reveal images — hidden by default */}
            {[
              '/images/construction-silhouette-2.jpg',
              '/images/construction-site-silhouettes.jpg',
              '/images/high-scaffolding-structure-under-construction-beam-2025-06-17-22-45-40-utc-scaled.jpg',
              '/images/view-modern-construction-site.jpg',
              '/images/a-construction-site-a-high-rise-building-rebar-c-2025-04-03-07-05-09-utc.jpg',
            ].map((img, i) => (
              <div key={`img-${i}`} className={styles.fullImg}>
                <Image
                  src={img}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}

            {/* Invisible hover trigger zones with white dividers */}
            {[0, 1, 2, 3, 4].map(i => (
              <div
                key={`zone-${i}`}
                className={styles.panelZone}
                style={{
                  left: `${i * 20}%`,
                  borderLeft: i === 0 ? 'none' : '2px solid rgba(255,255,255,0.65)',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <ClientLogos />

      {/* About Us + Stats combined */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutGrid}>
            {/* Left: About Us card */}
            <div>
              <h2 className={styles.aboutTitle}>
                About <span className="text-red">Us</span>
              </h2>
              <div className={styles.aboutCard}>
                <Image
                  src="/images/view-modern-construction-site.jpg"
                  alt="Construction site"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.aboutCardOverlay} />
                <div className={styles.aboutCardContent}>
                  <h3 className={styles.yearsText}>38 Years<br />Experienced</h3>
                  <p className={styles.aboutCardDesc}>
                    Founded with a vision to redefine construction support systems, PeeKay Structural
                    Equipments Pvt Ltd has grown into a leading manufacturer and supplier of
                    scaffolding, shuttering, and formwork solutions. Our expertise spans across
                    rentals, fabrication, and customized setups for a wide range of project scales.
                  </p>
                  <Link href="/company-story" className={styles.learnMoreLink}>
                    Learn More ›
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Strong Foundations + Stats */}
            <div className={styles.statsRight}>
              <h2>
                Strong Foundations.<br />
                <span className="text-red">Stronger Partnerships</span>
              </h2>
              <div className={styles.dividerLine} />
              <p className={styles.statsDesc}>
                PeeKay Structural Equipments Pvt Ltd is a leading name in the construction support systems
                industry. With decades of experience and a strong foundation in engineering, we specialize in
                the manufacturing, rental, and sale of top-grade scaffolding and shuttering equipment.
              </p>
              <div className={styles.statBoxes}>
                <div className={`${styles.statBox} ${styles.statDark} stat-item`}>
                  <span className={`${styles.statNum} stat-number`}>500+</span>
                  <span className={styles.statLbl}>Projects</span>
                </div>
                <div className={`${styles.statBox} ${styles.statLight} stat-item`}>
                  <span className={`${styles.statNum} ${styles.statNumDark} stat-number`}>120+</span>
                  <span className={`${styles.statLbl} ${styles.statLblDark}`}>Happy Clients</span>
                </div>
                <div className={`${styles.statBox} ${styles.statDark} stat-item`}>
                  <span className={`${styles.statNum} stat-number`}>20+</span>
                  <span className={styles.statLbl}>Awards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us — video left, stacked cards right */}
      <section className={styles.whySection}>
        <div className={styles.whyImageCol}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.whyVideo}
            poster="/images/construction-silhouette-2.jpg"
          >
            <source src="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/pk-videos/reverse-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.whyContentCol}>
          <h2>
            Why <span className="text-red">Choose Us</span>
          </h2>
          <div className={styles.whyCards}>
            {[
              {
                icon: <Image src="/images/Screenshot_2026-06-13_151140-removebg-preview.png" alt="Robust Inventory" width={70} height={70} style={{ objectFit: 'contain' }} />,
                title: 'Robust Inventory',
                desc: 'Ready-to-dispatch stock of scaffolding, shuttering, and formwork.',
                red: false,
              },
              {
                icon: <Image src="/images/Safety_First-removebg-preview.png" alt="Safety First" width={70} height={70} style={{ objectFit: 'contain' }} />,
                title: 'Safety First',
                desc: 'All equipment tested and certified as per industry standards.',
                red: false,
              },
              {
                icon: <Image src="/images/end_to_end_support-removebg-preview.png" alt="End-to-End Support" width={70} height={70} style={{ objectFit: 'contain' }} />,
                title: 'End-to-End Support',
                desc: 'From product delivery to onsite guidance.',
                red: false,
              },
              {
                icon: <Image src="/images/pan_india_-removebg-preview.png" alt="Pan-India Delivery" width={70} height={70} style={{ objectFit: 'contain' }} />,
                title: 'Pan-India Delivery',
                desc: 'Rapid dispatch from our strategically located branches.',
                red: false,
              },
            ].map((card, i) => (
              <div key={i} className={`${styles.whyCard} ${card.red ? styles.whyCardRed : styles.whyCardDark} why-card`}>
                <div className={styles.whyCardIcon}>
                  {card.icon}
                </div>
                <div className={styles.whyCardText}>
                  <h4 className={styles.whyCardTitle}>{card.title}</h4>
                  <p className={styles.whyCardDesc}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductsSection />

      {/* How We Work */}
      <section className={styles.howSection}>
        <div className="container">
          <div className={styles.howHeader}>
            <h2>How <span className="text-red">We Work</span></h2>
            <p>We follow a structured and client-focused process to ensure fast, efficient, and reliable delivery of scaffolding and shuttering solutions.</p>
          </div>
          <HowWeWork />
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}
