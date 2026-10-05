import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import FloatingButtons from '@/components/FloatingButtons/FloatingButtons';
import PageTransition from '@/components/PageTransition/PageTransition';
import ScrollAnimator from '@/components/ScrollAnimator/ScrollAnimator';
import JsonLd from '@/components/JsonLd/JsonLd';
import { SITE_URL, ORG_NAME, ORG_DESCRIPTION, ORG_LOGO, buildOrganizationSchema, buildWebsiteSchema } from '@/lib/seo';

const TITLE = 'PeeKay Structural Equipments Pvt Ltd | Scaffolding & Shuttering Solutions';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | PeeKay Structural Equipments',
    default: TITLE,
  },
  description: ORG_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: ORG_NAME,
    title: TITLE,
    description: ORG_DESCRIPTION,
    images: [{ url: ORG_LOGO, width: 685, height: 579, alt: ORG_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: ORG_DESCRIPTION,
    images: [ORG_LOGO],
  },
};

export const viewport: Viewport = {
  themeColor: '#002A4D',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={buildOrganizationSchema()} />
        <JsonLd data={buildWebsiteSchema()} />
        <Header />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <FloatingButtons />
        <ScrollAnimator />
      </body>
    </html>
  );
}
