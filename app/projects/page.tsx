import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd/JsonLd';
import { buildBreadcrumbSchema, absoluteUrl } from '@/lib/seo';
import ProjectsClient from './ProjectsClient';

const TITLE = 'Our Esteemed Projects';
const DESCRIPTION =
  'Explore scaffolding and shuttering projects delivered by PeeKay Structural Equipments across North, West, and South India — residential towers, bridges, industrial plants, and flyovers.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/projects' },
  openGraph: {
    title: `${TITLE} | PeeKay Structural Equipments`,
    description: DESCRIPTION,
    url: absoluteUrl('/projects'),
    type: 'website',
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
]);

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <ProjectsClient />
    </>
  );
}
