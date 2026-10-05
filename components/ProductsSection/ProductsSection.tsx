'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductsSection.module.css';

const cards = [
  {
    title: 'Tested for Safety',
    subtitle: 'Every product meets strict industry standards for load and stability.',
    description: 'Our scaffolding and shuttering systems go through rigorous testing to ensure they meet all structural and safety standards. Each unit is inspected to withstand heavy loads and site conditions, keeping your workforce and project secure.',
    image: '/images/construction-silhouette-2.jpg',
  },
  {
    title: 'Precision Built',
    subtitle: 'Engineered with accuracy for consistent performance on-site.',
    description: 'We manufacture with tight tolerances and modern fabrication methods, ensuring every component fits perfectly and performs reliably. This precision reduces assembly time and increases on-site efficiency.',
    image: '/images/steptodown.com348346.jpg',
  },
  {
    title: 'Long-Lasting Durability',
    subtitle: 'Anti-rust finish and robust materials ensure repeated reuse.',
    description: "Crafted with high-grade materials and protective coatings, our products are built to resist wear, rust, and harsh weather. They're designed for multiple reuse cycles, helping you cut long-term costs.",
    image: '/images/high-scaffolding-structure-under-construction-beam-2025-06-17-22-45-40-utc-scaled.jpg',
  },
];

export default function ProductsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <section className={styles.section}>
        {/* Top: white bg — heading + button */}
        <div className={styles.topArea}>
          <div className="container">
            <div className={styles.topGrid}>
              <div className={styles.topLeft}>
                <h2>
                  Built Strong. <span className={styles.red}>Built Right.</span>
                </h2>
                <p className={styles.topDesc}>We deliver reliable scaffolding and shuttering solutions, tested for safety, strength, and long-term performance — with zero compromise on quality.</p>
              </div>
              <div className={styles.topRight}>
                <Link href="/scaffolding" className="btn">Learn More &nbsp;›</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: gray bg — three framed cards */}
        <div className={styles.cardsArea}>
          <div className="container">
            <div className={styles.cardsGrid}>
              {cards.map((card, i) => (
                <div
                  key={i}
                  className={styles.cardFrame}
                  onClick={() => setActive(i)}
                >
                  <div className={styles.cardInner}>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    {/* Hover overlay — slides up from bottom */}
                    <div className={styles.cardOverlay}>
                      <h4 className={styles.cardOverlayTitle}>{card.title}</h4>
                      <p className={styles.cardOverlayDesc}>{card.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {active !== null && (
        <div className={styles.modalBackdrop} onClick={() => setActive(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setActive(null)}>×</button>
            <div className={styles.modalGrid}>
              <div className={styles.modalImg}>
                <Image
                  src={cards[active].image}
                  alt={cards[active].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.modalContent}>
                <h3 className={styles.modalTitle}>{cards[active].title}</h3>
                <p className={styles.modalSubtitle}>{cards[active].subtitle}</p>
                <p className={styles.modalDesc}>{cards[active].description}</p>
                <div className={styles.modalDivider} />
                <div className={styles.modalContact}>
                  <span className={styles.modalLabel}>Phone:</span>
                  <a href="tel:+919814506190">+91 98145 06190</a>
                </div>
                <div className={styles.modalDivider} />
                <div className={styles.modalContact}>
                  <span className={styles.modalLabel}>Email:</span>
                  <a href="mailto:info.pksel@gmail.com">info.pksel@gmail.com</a>
                </div>
                <div className={styles.modalDivider} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
