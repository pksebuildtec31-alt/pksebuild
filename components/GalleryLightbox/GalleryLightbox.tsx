'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './GalleryLightbox.module.css';

interface GalleryImage {
  src: string;
  alt: string;
}

interface Props {
  images: GalleryImage[];
}

export default function GalleryLightbox({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = (i: number) => setActiveIndex(i);
  const close = () => setActiveIndex(null);

  const prev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length]);

  const next = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  }, [activeIndex, images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  return (
    <>
      <div className={styles.grid}>
        {images.map((img, i) => (
          <div key={i} className={styles.thumb} onClick={() => open(i)}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.thumbOverlay}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.5} width={28} height={28}>
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className={styles.backdrop} onClick={close}>
          <div className={styles.counter}>
            {activeIndex + 1} / {images.length}
          </div>

          <button
            className={`${styles.navBtn} ${styles.navLeft}`}
            onClick={e => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className={styles.imgWrap} onClick={e => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              className={styles.lightboxImg}
            />
          </div>

          <button
            className={`${styles.navBtn} ${styles.navRight}`}
            onClick={e => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            ›
          </button>

          <button className={styles.closeBtn} onClick={close} aria-label="Close">✕</button>
        </div>
      )}
    </>
  );
}
