'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './HowWeWork.module.css';

const steps = [
  {
    num: '01',
    icon: <Image src="/images/icon1.jpg" alt="Understand Your Needs" width={64} height={64} style={{ objectFit: 'contain' }} />,
    title: 'Understand Your Needs',
    desc: 'We assess your project and recommend the right scaffolding or shuttering solutions',
  },
  {
    num: '02',
    icon: <Image src="/images/icon2.jpg" alt="Customize & Prepare" width={64} height={64} style={{ objectFit: 'contain' }} />,
    title: 'Customize & Prepare',
    desc: 'Products are tailored (if needed) and packed for quick deployment.',
  },
  {
    num: '03',
    icon: <Image src="/images/icon3.jpg" alt="Fast Delivery" width={64} height={64} style={{ objectFit: 'contain' }} />,
    title: 'Fast Delivery',
    desc: 'Ready stock and smart logistics ensure timely delivery to your site.',
  },
  {
    num: '04',
    icon: <Image src="/images/icon4.jpg" alt="On-Site Support" width={64} height={64} style={{ objectFit: 'contain' }} />,
    title: 'On-Site Support',
    desc: 'We offer technical assistance and maintenance throughout your project.',
  },
];

export default function HowWeWork() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.querySelectorAll<HTMLElement>(`.${styles.howCard}`).forEach((card, i) => {
            card.style.transitionDelay = `${i * 0.15}s`;
            card.classList.add(styles.visible);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.howGrid} ref={gridRef}>
      {steps.map((step, i) => (
        <div key={i} className={`${styles.howCard} ${i === 1 ? styles.howCardActive : ''} how-card`}>
          <span className={styles.howNum}>{step.num}</span>
          <div className={styles.howIcon}>{step.icon}</div>
          <h4 className={styles.howTitle}>{step.title}</h4>
          <p className={styles.howDesc}>{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
