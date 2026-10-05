import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd/JsonLd';
import { buildBreadcrumbSchema, absoluteUrl } from '@/lib/seo';
import ContactForm from './ContactForm';

const TITLE = 'Contact Us';
const DESCRIPTION =
  'Get in touch with PeeKay Structural Equipments for scaffolding, shuttering & formwork enquiries. Offices in Zirakpur, Punjab and Hyderabad, Telangana.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/contact-us' },
  openGraph: {
    title: `${TITLE} | PeeKay Structural Equipments`,
    description: DESCRIPTION,
    url: absoluteUrl('/contact-us'),
    type: 'website',
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Contact Us', path: '/contact-us' },
]);

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ContactForm />
    </>
  );
}
