'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSlider.module.css';

const slides = [
  {
    tag: 'We are in this Business',
    heading: 'Since',
    headingAccent: '1987',
    subtext: 'We endeavor high quality products that are engineered to accomodate British Standard unless otherwise stated.',
    image: '/images/construction-silhouette-2.jpg',
  },
  {
    tag: 'Excellence in Formwork',
    heading: 'Scaffolding & Shuttering,',
    headingAccent: 'Simplified',
    subtext: 'From residential towers to large-scale industrial units, our engineered formwork solutions deliver precision and safety on every project.',
    image: '/images/construction-site-silhouettes.jpg',
  },
  {
    tag: 'Pan-India Delivery',
    heading: 'Powering Progress on ',
    headingAccent: 'Every Site',
    subtext: 'High-quality, reliable, and reusable shuttering systems for construction teams across India. Fast dispatch, end-to-end support.',
    image: '/images/crane-and-building-construction-site-on-background-2025-03-16-05-22-01-utc.jpg',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  // Only mount slide images once they're current or about to be, so the 3 large
  // hero images aren't all fetched on first load.
  const [visited, setVisited] = useState<number[]>([0]);

  useEffect(() => {
    const upcoming = (current + 1) % slides.length;
    setVisited(v => (v.includes(current) && v.includes(upcoming) ? v : Array.from(new Set([...v, current, upcoming]))));
  }, [current]);

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 9000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className={styles.sliderWrap} aria-label="Hero slider">
      {slides.map((slide, i) => (
        <div key={i} className={`${styles.slide} ${i === current ? styles.active : ''}`}>
          {visited.includes(i) && (
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              priority={i === 0}
              className={styles.slideImg}
              sizes="100vw"
            />
          )}
          <div className={styles.overlay} />
          <div className={styles.content}>
            <div className={styles.contentBox}>
              {/* Animated border lines */}
              <span className={`${styles.bLine} ${styles.bTop}`} />
              <span className={`${styles.bLine} ${styles.bRight}`} />
              <span className={`${styles.bLine} ${styles.bBottom}`} />
              <span className={`${styles.bLine} ${styles.bLeft}`} />

              <span className={styles.tag}>{slide.tag}</span>
              <h1 className={styles.heading}>
                {slide.heading}<span className={styles.headingAccent}>{slide.headingAccent}</span>
              </h1>
              <p className={styles.subtext}>{slide.subtext}</p>
              <div className={styles.cta}>
                <Link href="/contact-us" className="btn">Contact Us &nbsp;›</Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.active : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button className={styles.arrowLeft} onClick={prev} aria-label="Previous slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button className={styles.arrowRight} onClick={next} aria-label="Next slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </section>
  );
}
