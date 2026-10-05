'use client';

import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';

const leftSlides = [
  {
    stars: 5,
    text: "Their equipment is always well-maintained and site-ready. The team is responsive, helpful, and understands the urgency of project timelines.",
    name: "Aman Gaurav",
    role: "Project Manager",
  },
  {
    stars: 5,
    text: "Pee Kay's scaffolding quality and timely delivery have made them our go-to partner for all major projects. Reliable and professional every time.",
    name: "Rishav Sharma",
    role: "Sr. Engineer",
  },
];

const rightSlides = [
  {
    stars: 5,
    text: "Excellent service, durable materials, and prompt support — Pee Kay made our formwork process smooth and stress-free.",
    name: "Shivam",
    role: "Senior Engineer",
  },
  {
    stars: 5,
    text: "From consultation to execution, Pee Kay delivered exceptional service. Their shuttering systems were a perfect fit for our high-rise build.",
    name: "Anuj",
    role: "Sr. Engineer",
  },
  {
    stars: 5,
    text: "We've worked with many suppliers, but Pee Kay stands out for their consistency and quality. Their team truly understands construction needs.",
    name: "Kanchan",
    role: "Procurement Head",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className={styles.stars}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const QuoteIcon = () => (
  <div className={styles.quoteIcon}>
    <svg viewBox="0 0 50 40">
      <path d="M0 40V26.667C0 18.815 2.63 12.407 7.89 7.444 13.15 2.481 20.37 0 29.55 0L32 4.444C27.33 5.926 23.7 8.222 21.1 11.333 18.5 14.444 17.2 17.926 17.2 21.778H28V40H0zm22 0V26.667C22 18.815 24.63 12.407 29.89 7.444 35.15 2.481 42.37 0 51.55 0L54 4.444C49.33 5.926 45.7 8.222 43.1 11.333 40.5 14.444 39.2 17.926 39.2 21.778H50V40H22z"/>
    </svg>
  </div>
);

function Slider({ tick, slides, dark }: { tick: number; slides: typeof leftSlides; dark: boolean }) {
  const current = tick % slides.length;
  const slide = slides[current];

  return (
    <div className={`${styles.card} ${dark ? styles.dark : styles.light}`}>
      {/* key=tick triggers remount → CSS slide animation fires on every advance */}
      <div key={tick} className={styles.cardInner}>
        <Stars count={slide.stars} />
        <p className={styles.quote}>{slide.text}</p>
        <div className={styles.reviewer}>
          <div className={styles.avatar}>{slide.name.charAt(0)}</div>
          <div>
            <strong className={styles.name}>{slide.name}</strong>
            <span className={styles.role}>{slide.role}</span>
          </div>
        </div>
      </div>
      <QuoteIcon />
    </div>
  );
}

export default function Testimonials() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.bgImage} />
      <div className={styles.bgOverlay} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={styles.header}>
          <h2>Our <span className="text-red">Testimonials</span></h2>
        </div>
        <div className={styles.frameWrap}>
          <div className={styles.grid}>
            <Slider tick={tick} slides={leftSlides} dark={true} />
            <Slider tick={tick} slides={rightSlides} dark={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
