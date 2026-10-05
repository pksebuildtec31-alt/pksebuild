import Image from 'next/image';
import styles from './ClientLogos.module.css';

const logos = [
  { src: '/images/jmcprojects-removebg-preview.png', alt: 'JMC Projects' },
  { src: '/images/ncclimited-removebg-preview.png', alt: 'NCC Limited' },
  { src: '/images/ntpc-removebg-preview.png', alt: 'NTPC' },
  { src: '/images/rayengineeringlimited-removebg-preview.png', alt: 'Ray Engineering Limited' },
  { src: '/images/VNC_logo-1-removebg-preview.png', alt: 'VNC' },
  { src: '/images/1-1-removebg-preview.png', alt: 'Client 1' },
  { src: '/images/2-1-removebg-preview.png', alt: 'Client 2' },
  { src: '/images/3-1-removebg-preview.png', alt: 'Client 3' },
  { src: '/images/4-1-removebg-preview.png', alt: 'Client 4' },
  { src: '/images/6-1-removebg-preview.png', alt: 'Client 5' },
  { src: '/images/7-1-removebg-preview.png', alt: 'Client 6' },
  { src: '/images/8-1-removebg-preview.png', alt: 'Client 7' },
  { src: '/images/ISO-removebg-preview.png', alt: 'ISO Certified' },
];

export default function ClientLogos() {
  const doubled = [...logos, ...logos];

  return (
    <section className={styles.section}>
      <div style={{ overflow: 'hidden' }}>
        <div className={styles.track}>
          {doubled.map((logo, i) => (
            <div key={i} className={styles.logoItem}>
              <Image src={logo.src} alt={logo.alt} width={130} height={55} style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
