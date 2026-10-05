'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projectImages = [
  'construction-site-with-foundation-work-underway-2025-03-11-05-20-59-utc.jpg',
  'view-modern-construction-site.jpg',
  'high-scaffolding-structure-under-construction-beam-2025-06-17-22-45-40-utc-scaled.jpg',
  'crane-and-building-construction-site-on-background-2025-03-16-05-22-01-utc.jpg',
  'large-building-site.jpg',
  'construction-silhouette-2.jpg',
  'construction-silhouette.jpg',
  'steptodown.com647391.jpg',
  'steptodown.com205334.jpg',
];

const zones = [
  { id: 'north', label: 'North Zone' },
  { id: 'west', label: 'West Zone' },
  { id: 'south', label: 'South Zone' },
];

const zoneProjects = {
  north: [
    { name: 'Residential Tower – Chandigarh', img: projectImages[0] },
    { name: 'Industrial Unit – Ludhiana', img: projectImages[1] },
    { name: 'Commercial Complex – Delhi', img: projectImages[2] },
    { name: 'Infrastructure Project – Ambala', img: projectImages[3] },
    { name: 'Flyover Construction – Panchkula', img: projectImages[4] },
    { name: 'High-Rise Building – Zirakpur', img: projectImages[5] },
    { name: 'Bridge Formwork – Ropar', img: projectImages[6] },
    { name: 'Factory Construction – Mohali', img: projectImages[7] },
    { name: 'Slab Work – Jalandhar', img: projectImages[8] },
  ],
  west: [
    { name: 'High-Rise Tower – Mumbai', img: projectImages[2] },
    { name: 'Commercial Complex – Pune', img: projectImages[0] },
    { name: 'Industrial Plant – Nagpur', img: projectImages[4] },
    { name: 'Bridge Project – Nashik', img: projectImages[1] },
    { name: 'Slab Construction – Surat', img: projectImages[5] },
    { name: 'Infrastructure – Ahmedabad', img: projectImages[3] },
    { name: 'Residential Tower – Vadodara', img: projectImages[6] },
    { name: 'Factory – Rajkot', img: projectImages[7] },
    { name: 'Flyover – Indore', img: projectImages[8] },
  ],
  south: [
    { name: 'Infrastructure – Hyderabad', img: projectImages[1] },
    { name: 'Commercial Tower – Bangalore', img: projectImages[3] },
    { name: 'Industrial Unit – Chennai', img: projectImages[0] },
    { name: 'Residential Complex – Kochi', img: projectImages[5] },
    { name: 'Bridge Formwork – Vijayawada', img: projectImages[2] },
    { name: 'High-Rise – Coimbatore', img: projectImages[6] },
    { name: 'Factory – Visakhapatnam', img: projectImages[4] },
    { name: 'Slab Work – Tiruchirappalli', img: projectImages[7] },
    { name: 'Infrastructure – Mysuru', img: projectImages[8] },
  ],
};

export default function ProjectsClient() {
  const [activeZone, setActiveZone] = useState<'north' | 'west' | 'south'>('north');

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1>Our Esteemed Projects</h1>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <span>Projects</span>
            </nav>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="section-tag">Our Portfolio</span>
            <h2>
              Projects Across <span className="text-red">India</span>
            </h2>
            <p style={{ maxWidth: 580, margin: '14px auto 0', color: 'var(--color-text)' }}>
              From residential towers to bridges, industrial plants to flyovers — PeeKay has
              delivered formwork solutions across North, West, and South India.
            </p>
          </div>

          {/* Zone Tabs */}
          <div className="tabs-nav">
            {zones.map(z => (
              <button
                key={z.id}
                className={`tab-btn ${activeZone === z.id ? 'active' : ''}`}
                onClick={() => setActiveZone(z.id as 'north' | 'west' | 'south')}
              >
                {z.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {zoneProjects[activeZone].map((project, i) => (
              <div key={i} className="project-item">
                <Image
                  src={`/images/${project.img}`}
                  alt={project.name}
                  width={500}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  height={260}
                  style={{ objectFit: 'cover', width: '100%', height: '260px' }}
                />
                <div className="project-overlay">
                  <span>{project.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">35+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Zones Covered Across India</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
