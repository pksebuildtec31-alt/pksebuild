import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Company Story', href: '/company-story' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact Us', href: '/contact-us' },
];

const productLinks = [
  { label: 'Scaffolding', href: '/scaffolding' },
  { label: 'Adjustable Telescopic Prop', href: '/adjustable-telescopic-prop' },
  { label: 'Acrow Span', href: '/acrow-span-telescopic-span' },
  { label: 'Pipes', href: '/pipes' },
  { label: 'Steel Shuttering Plates', href: '/steel-shuttering-plates' },
  { label: 'Heavy Shuttering', href: '/heavy-shuttering' },
];

const MapPin = () => (
  <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
);
const Phone = () => (
  <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
);
const Email = () => (
  <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
);

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div>
              <div className={styles.logoWrap}>
                <Image
                  src="/images/peekaylogo.png"
                  alt="PeeKay Structural Equipments"
                  width={685}
                  height={579}
                  style={{ objectFit: 'contain', height: 75, width: 'auto' }}
                />
              </div>
              <p className={styles.desc}>
                We deliver high-quality, reliable, and safe formwork solutions to power the
                infrastructure of tomorrow. Our scaffolding and shuttering systems are engineered
                for performance, efficiency, and reusability.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className={styles.colTitle}>Quick Links</h5>
              <ul className={styles.linkList}>
                {quickLinks.map(l => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h5 className={styles.colTitle}>Products</h5>
              <ul className={styles.linkList}>
                {productLinks.map(l => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className={styles.colTitle}>Contact Us</h5>

              <div className={styles.contactItem}>
                <MapPin />
                <p>
                  <strong>Head Office</strong>
                  SCO 21-22, 2nd Floor, Shri Balaji Complex, Old Ambala Road, Dhakoli,
                  Zirakpur – 140603 Punjab
                </p>
              </div>

              <div className={styles.contactItem}>
                <Phone />
                <p>
                  <Link href="tel:+919814506190">+91 98145 06190</Link>
                </p>
              </div>

              <div className={styles.contactItem}>
                <Email />
                <p>
                  <Link href="mailto:info.pksel@gmail.com">info.pksel@gmail.com</Link>
                </p>
              </div>
{/* jfjgjdg  */}
              <div className={styles.contactItem}>
                <MapPin />
                <p>
                  <strong>Telangana Office</strong>
                  Survey No. 296/3/EE, IDA Bolaram, Patancheru, Sangareddy,
                  Hyderabad – 502325
                </p>
              </div>

              <div className={styles.contactItem}>
                <Phone />
                <p>
                  <Link href="tel:+919550612390">+91 95506 12390</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerBottomInner}>
            <p className={styles.copyright}>
              © 2025 PeeKay Structural Equipments Pvt Ltd • All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
