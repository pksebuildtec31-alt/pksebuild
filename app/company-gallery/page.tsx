import Link from 'next/link';
import type { Metadata } from 'next';
import GalleryLightbox from '@/components/GalleryLightbox/GalleryLightbox';
import JsonLd from '@/components/JsonLd/JsonLd';
import { SITE_URL, buildBreadcrumbSchema, absoluteUrl } from '@/lib/seo';

const TITLE = 'Gallery';
const DESCRIPTION = 'View our project gallery showcasing scaffolding and shuttering work across India.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/company-gallery' },
  openGraph: {
    title: `${TITLE} | PeeKay Structural Equipments`,
    description: DESCRIPTION,
    url: absoluteUrl('/company-gallery'),
    type: 'website',
    images: [{ url: `${SITE_URL}/images/ty.jpg` }],
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/company-gallery' },
]);

const mainGallery = [
  { src: '/images/ty.jpg', alt: 'Construction project 1' },
  { src: '/images/oy.jpg', alt: 'Construction project 2' },
  { src: '/images/ew.jpg', alt: 'Construction project 3' },
  { src: '/images/adf.jpg', alt: 'Construction project 4' },
  { src: '/images/y.jpg', alt: 'Construction project 5' },
  { src: '/images/t.jpg', alt: 'Construction project 6' },
  { src: '/images/r.jpg', alt: 'Construction project 7' },
  { src: '/images/e.jpg', alt: 'Construction project 8' },
  { src: '/images/w.jpg', alt: 'Construction project 9' },
  { src: '/images/q.jpg', alt: 'Construction project 10' },
  { src: '/images/1.jpg', alt: 'Construction project 11' },
  { src: '/images/2.jpg', alt: 'Construction project 12' },
  { src: '/images/3.jpg', alt: 'Construction project 13' },
  { src: '/images/4.jpg', alt: 'Construction project 14' },
];

const officeGallery = [
  { src: '/images/gallery/a19c4bab-ad09-48d7-8f61-63373cee464b-576x1024-1.webp', alt: 'Hyderabad office 1' },
  { src: '/images/gallery/1aa2e8d7-de23-48ee-a55e-05ac50fce105-1-576x1024-1.webp', alt: 'Hyderabad office 2' },
  { src: '/images/gallery/8f2deb76-9aab-4bab-acbd-5b68a14a66d5-1-576x1024-1.webp', alt: 'Hyderabad office 3' },
  { src: '/images/gallery/5c43ccfc-a44f-46df-8a35-a9afeff3ae2e-1-300x146-1.webp', alt: 'Hyderabad office 4' },
  { src: '/images/gallery/f861ba47-3b16-40d4-8aec-545b66421518-300x146-1.webp', alt: 'Hyderabad office 5' },
  { src: '/images/gallery/9c513553-4eeb-4d70-8e4f-775aa12ac8ae-1-300x146-1.webp', alt: 'Hyderabad office 6' },
  { src: '/images/gallery/d503340c-d9a4-4d93-a7c7-78ea988b1fc4-300x146-1.webp', alt: 'Hyderabad office 7' },
  { src: '/images/gallery/7ee80764-003a-4dd4-b2eb-7c16f3564e1f-1-300x146-1.webp', alt: 'Hyderabad office 8' },
];


export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1>Gallery</h1>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span>Gallery</span>
            </nav>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <span className="section-tag">Our Work</span>
            <h2>
              Project <span className="text-red">Gallery</span>
            </h2>
            <p style={{ maxWidth: 550, margin: '14px auto 0', color: 'var(--color-text)' }}>
              A visual showcase of our scaffolding, shuttering, and formwork projects across India.
            </p>
          </div>
          <GalleryLightbox images={mainGallery} />
        </div>
      </section>

      <section className="section" style={{ background: '#E6E6E6', paddingTop: 60 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <h2>
              Hyderabad <span className="text-red">Office</span>
            </h2>
          </div>
          <GalleryLightbox images={officeGallery} />
        </div>
      </section>
    </>
  );
}
