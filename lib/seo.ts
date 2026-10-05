// Central SEO/GEO/AEO constants and JSON-LD builders.
// Single source of truth for site identity so metadata, sitemap.xml,
// robots.txt, and every page's structured data stay in sync.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://pksebuildtech.com').replace(/\/$/, '');

export const ORG_NAME = 'PeeKay Structural Equipments Pvt Ltd';
export const ORG_SHORT_NAME = 'PeeKay';
export const ORG_DESCRIPTION =
  "PeeKay Structural Equipments – India's trusted supplier of scaffolding, shuttering & formwork equipment since 1987. Pan-India delivery.";
export const ORG_FOUNDING_YEAR = '1987';
export const ORG_LOGO = `${SITE_URL}/images/peekaylogo.png`;
export const ORG_SAME_AS = ['https://www.linkedin.com/company/peekay-structural-equipments-pvt-ltd/'];

export type Office = {
  name: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  telephone: string;
  email: string;
};

export const OFFICES: Office[] = [
  {
    name: 'Head Office – Punjab',
    streetAddress: 'SCO 21-22, 2nd Floor, Shri Balaji Complex, Old Ambala Road, Dhakoli',
    addressLocality: 'Zirakpur',
    addressRegion: 'Punjab',
    postalCode: '140603',
    telephone: '+91-98145-06190',
    email: 'info.pksel@gmail.com',
  },
  {
    name: 'Telangana Office – Hyderabad',
    streetAddress: 'Survey No. 296/3/EE, IDA Bolaram, Patancheru, Sangareddy',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '502325',
    telephone: '+91-95506-12390',
    email: 'hyd@pkbuildtech.com',
  },
];

/** Absolute URL for a site-relative path, e.g. absoluteUrl('/contact-us'). */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Sitewide Organization node with both offices as ContactPoint + Place locations. */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ORG_NAME,
    legalName: ORG_NAME,
    url: SITE_URL,
    logo: ORG_LOGO,
    image: ORG_LOGO,
    foundingDate: ORG_FOUNDING_YEAR,
    sameAs: ORG_SAME_AS,
    contactPoint: OFFICES.map(office => ({
      '@type': 'ContactPoint',
      telephone: office.telephone,
      email: office.email,
      contactType: 'sales',
      areaServed: 'IN',
    })),
    location: OFFICES.map(office => ({
      '@type': 'Place',
      name: office.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: office.streetAddress,
        addressLocality: office.addressLocality,
        addressRegion: office.addressRegion,
        postalCode: office.postalCode,
        addressCountry: 'IN',
      },
    })),
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: ORG_NAME,
    url: SITE_URL,
  };
}

export type BreadcrumbItem = { name: string; path: string };

/** BreadcrumbList JSON-LD from an ordered list of {name, path} — path is site-relative. */
export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
