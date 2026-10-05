'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/* ── Animation rules ──────────────────────────────────────────────
   Each rule maps a CSS selector to an animation class.
   Entries are processed in order; first match wins per element.
   ──────────────────────────────────────────────────────────────── */
const RULES: { selector: string; anim: string }[] = [
  // Section tags
  { selector: '.section-tag',             anim: 'anim-tagPop'   },
  // Section/page headings
  { selector: 'h2.section-heading, .section > .container > h2', anim: 'anim-heading' },
  // Gallery / project items → blur-in
  { selector: '.gallery-item, .gallery-grid > div, .project-item', anim: 'anim-blurIn' },
  // Blog cards
  { selector: '.blog-card',               anim: 'anim-blurIn'   },
  // Stat items (also get counter animation separately)
  { selector: '.stat-item',               anim: 'anim-zoomIn'   },
  // Why / how cards → fade up
  { selector: '.why-card, .how-card',     anim: 'anim-fadeUp'   },
  // Contact page blobs
  { selector: '.contact-form-wrap, .offices-wrap', anim: 'anim-fadeUp' },
  // Generic fallback (must be last)
  { selector: '.anim-target',             anim: 'anim-fadeUp'   },
];

/* Grid parents whose direct children get stagger delays */
const STAGGER_PARENTS = [
  '.blog-grid',
  '.stats-grid',
  '.gallery-grid',
  '.why-grid',
  '.how-grid',
  '.projects-grid',
  '.card-grid',
  '.cards-grid',
];

const DELAY_CLASSES = [
  'anim-delay-1',
  'anim-delay-2',
  'anim-delay-3',
  'anim-delay-4',
  'anim-delay-5',
  'anim-delay-6',
];

/* ── Number counter helper ─────────────────────────────────────── */
function animateCounter(el: HTMLElement) {
  const raw = el.dataset.target ?? el.textContent ?? '';
  const suffix = raw.replace(/[\d,]/g, '');
  const target = parseInt(raw.replace(/\D/g, ''), 10);
  if (!target || isNaN(target)) return;
  const duration = 1800;
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3); // ease-out cubic
    el.textContent = Math.round(ease * target) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ── Main component ─────────────────────────────────────────────── */
export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    // Collect & tag every matching element
    const tagged: { el: HTMLElement; animClass: string }[] = [];

    for (const { selector, anim } of RULES) {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
      for (const el of nodes) {
        if (el.dataset.animDone === '1') continue;
        el.dataset.animDone = '1';
        el.classList.add(anim);
        tagged.push({ el, animClass: anim });
      }
    }

    // Apply stagger delays to grid children
    for (const parentSel of STAGGER_PARENTS) {
      const grids = document.querySelectorAll<HTMLElement>(parentSel);
      grids.forEach(grid => {
        const kids = Array.from(grid.children) as HTMLElement[];
        kids.forEach((child, i) => {
          const cls = DELAY_CLASSES[Math.min(i, DELAY_CLASSES.length - 1)];
          if (cls) child.classList.add(cls);
        });
      });
    }

    // Pre-store target values for counters
    const counterEls = document.querySelectorAll<HTMLElement>('.stat-number');
    counterEls.forEach(el => {
      if (!el.dataset.target) el.dataset.target = el.textContent ?? '';
    });

    // Observe
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add('in-view');

          // Trigger counter on child .stat-number when .stat-item enters view
          if (el.classList.contains('stat-item')) {
            const numEl = el.querySelector<HTMLElement>('.stat-number');
            if (numEl) animateCounter(numEl);
          }

          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    tagged.forEach(({ el }) => observer.observe(el));

    return () => {
      observer.disconnect();
      tagged.forEach(({ el, animClass }) => {
        delete el.dataset.animDone;
        el.classList.remove(animClass, 'in-view');
        DELAY_CLASSES.forEach(c => el.classList.remove(c));
      });
      // Restore counter text so re-run can animate again
      counterEls.forEach(el => {
        if (el.dataset.target) el.textContent = el.dataset.target;
      });
    };
  }, [pathname]);

  return null;
}
