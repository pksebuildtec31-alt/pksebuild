// Single source of truth for blog/resource posts, consumed by the
// /resources listing page, /resources/[slug] detail page, and sitemap.ts.
//
// `content` is the plain-text version (rendered with `white-space: pre-line`,
// no markdown parser in this codebase) — do not reintroduce markdown syntax
// (**bold**, "- " bullets) here or it will render as literal characters.

export type Post = {
  slug: string;
  image: string;
  title: string;
  date: string; // display string, e.g. 'July 22, 2025'
  dateISO: string; // ISO date for structured data / sitemap lastModified
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: 'why-quality-shuttering-services-matter',
    image: '/images/20.jpg',
    title: 'Why Quality Shuttering Services Matter in Construction',
    date: 'July 22, 2025',
    dateISO: '2025-07-22',
    excerpt:
      'High-quality shuttering ensures accurate dimensions, smooth finishing, and structural integrity. Learn why professional-grade shuttering is essential for any construction project.',
    content: `At PeeKay Structural Equipments, we know that the foundation of any great structure lies in its framework—especially shuttering. High-quality shuttering isn't just about pouring concrete; it's about precision, safety, and strength.

Here's why quality shuttering matters:

Accurate Dimensions: Good shuttering ensures your columns, beams, and slabs are perfectly shaped and aligned.

Smooth Finishing: A properly installed shutter gives your concrete a clean surface—saving time and cost on plastering.

Structural Integrity: Strong, well-supported shuttering prevents collapse or deformation during curing.

Many contractors cut corners with poor-quality materials or unskilled labor, which leads to cracks, leaks, and expensive rework. With PeeKay Structural Equipments, you get professional-grade shuttering that's safe, clean, and built to last.

We use durable steel, wood, or modular systems based on your project needs, and our trained team ensures quick setup and removal—without compromising quality.`,
  },
  {
    slug: 'steel-vs-wooden-shuttering',
    image: '/images/view-modern-construction-site.jpg',
    title: 'Steel vs. Wooden Shuttering – Which One Should You Choose?',
    date: 'July 22, 2025',
    dateISO: '2025-07-22',
    excerpt:
      'Confused between steel and wooden shuttering? Our experts break down the pros and cons of each to help you make the right choice for your project.',
    content: `Confused between steel and wooden shuttering? Don't worry—PeeKay Structural Equipments is here to break it down.

Wooden Shuttering:
• Cost-effective for small or custom projects
• Easy to cut and shape
• Not suitable for multiple uses
• Absorbs moisture if not maintained

Steel Shuttering:
• High durability and reusable
• Perfect for large or repeated projects
• Offers smooth finish
• Higher upfront cost
• Needs skilled handling

Our experts evaluate your site and suggest the best formwork solution. If you're doing a one-time residential build, wooden might work. But for commercial, steel saves time and money in the long run. We supply, install, and dismantle both with complete professionalism.`,
  },
  {
    slug: 'types-of-shuttering-we-provide',
    image: '/images/urban-construction-site-with-concrete-pillars-and-2025-02-10-06-51-50-utc.jpg',
    title: 'Types of Shuttering We Provide and Their Benefits',
    date: 'July 22, 2025',
    dateISO: '2025-07-22',
    excerpt:
      'Every project is different—and so are its shuttering needs. Explore the variety of shuttering systems PeeKay provides and find the one that fits your budget and build type.',
    content: `Every project is different—and so are its shuttering needs. At PeeKay Structural Equipments, we offer a variety of shuttering systems to match your budget and build type:

Steel Shuttering: Strong, reusable, and perfect for repetitive projects. Ideal for commercial buildings.

Wooden Shuttering: Traditional and flexible—great for smaller or custom-shaped work.

Aluminum Formwork: Lightweight and durable, perfect for fast-paced jobs.

Plastic & Modular Systems: Easy to assemble and dismantle. Used for small to medium projects.

Whether you're building a home, factory, or high-rise, we help you choose the right formwork for cost-efficiency and structural strength. Plus, all materials are regularly maintained for safety and performance.`,
  },
];
