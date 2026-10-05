'use client';

import { useState, useEffect, startTransition } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const aboutLinks = [
  { label: 'Company Story', href: '/company-story' },
  { label: 'Gallery', href: '/company-gallery' },
];

const productLinks = [
  { label: 'Acrow Span (Telescopic Span)', href: '/acrow-span-telescopic-span' },
  { label: 'Scaffolding', href: '/scaffolding' },
  { label: 'Adjustable Telescopic Prop', href: '/adjustable-telescopic-prop' },
  { label: 'Pipes', href: '/pipes' },
  { label: 'Steel Shuttering Plates', href: '/steel-shuttering-plates' },
  { label: 'Heavy Shuttering', href: '/heavy-shuttering' },
];

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMobileOpen(false);
      setAboutOpen(false);
      setProductsOpen(false);
    });
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={styles.header}>
        {/* ── Top bar ── */}
        <div className={styles.topBar}>
          <div className={styles.topBarInner}>
            <div className={styles.topBarLeft}>
              <a href="mailto:info.pksel@gmail.com" className={styles.topBarItem}>
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <span>info.pksel@gmail.com</span>
              </a>
              <div className={styles.topBarDivider} />
              <a href="tel:+919814506190" className={styles.topBarItem}>
                <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                <span>+91 98145 06190</span>
              </a>
            </div>

            <div className={styles.topBarRight}>
              <a href="/images/PEE-KAY-STRUCTURAL-EQUIPMENTS-BROCHURE_new.pdf" target="_blank" rel="noopener noreferrer" className={styles.brochureBtn}>
                <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-2 6H7v-2h4v2zm4 0h-2v-2h2v2zm0-4H7v-2h8v2z"/></svg>
                <span>Company Brochure</span>
              </a>
              <a
                href="https://www.linkedin.com/company/peekay-structural-equipments-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── Main nav ── */}
        <nav className={styles.navbar}>
          <div className={styles.navInner}>
            {/* Logo */}
            <Link href="/" className={styles.logo}>
              <Image
                src="/images/peekaylogo.png"
                alt="PeeKay Structural Equipments Pvt Ltd"
                width={685}
                height={579}
                priority
                style={{ objectFit: 'contain', height: 62, width: 'auto' }}
              />
            </Link>

            {/* Desktop nav links */}
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
                  Home
                </Link>
              </li>

              <li className={styles.navItem}>
                <span className={styles.navLink}>
                  About Us <ChevronDown />
                </span>
                <ul className={styles.dropdown}>
                  {aboutLinks.map(l => (
                    <li key={l.href}>
                      <Link href={l.href} className={styles.dropdownLink}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className={styles.navItem}>
                <span className={styles.navLink}>
                  Products <ChevronDown />
                </span>
                <ul className={styles.dropdown}>
                  {productLinks.map(l => (
                    <li key={l.href}>
                      <Link href={l.href} className={styles.dropdownLink}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className={styles.navItem}>
                <Link href="/resources" className={`${styles.navLink} ${pathname === '/resources' ? styles.active : ''}`}>
                  Resources
                </Link>
              </li>

              <li className={styles.navItem}>
                <Link href="/contact-us" className={`${styles.navLink} ${pathname === '/contact-us' ? styles.active : ''}`}>
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Mobile hamburger */}
            <button
              className={`${styles.mobileToggle} ${mobileOpen ? styles.open : ''}`}
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile nav drawer */}
      <nav className={`${styles.mobileNav} ${mobileOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.mobileNavLink}>Home</Link>

        <button
          className={`${styles.mobileDropdownToggle} ${aboutOpen ? styles.open : ''}`}
          onClick={() => setAboutOpen(v => !v)}
        >
          About Us <ChevronDown />
        </button>
        <div className={`${styles.mobileDropdownMenu} ${aboutOpen ? styles.open : ''}`}>
          {aboutLinks.map(l => (
            <Link key={l.href} href={l.href} className={styles.mobileDropdownLink}>{l.label}</Link>
          ))}
        </div>

        <button
          className={`${styles.mobileDropdownToggle} ${productsOpen ? styles.open : ''}`}
          onClick={() => setProductsOpen(v => !v)}
        >
          Products <ChevronDown />
        </button>
        <div className={`${styles.mobileDropdownMenu} ${productsOpen ? styles.open : ''}`}>
          {productLinks.map(l => (
            <Link key={l.href} href={l.href} className={styles.mobileDropdownLink}>{l.label}</Link>
          ))}
        </div>

        <Link href="/resources" className={styles.mobileNavLink}>Resources</Link>
        <Link href="/contact-us" className={styles.mobileNavLink}>Contact Us</Link>
      </nav>
    </>
  );
}
