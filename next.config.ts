import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Cache optimized images for 1 year so repeat views don't re-transform
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: '/llms.txt',
        headers: [{ key: 'Content-Type', value: 'text/plain; charset=utf-8' }],
      },
      {
        // Long-lived caching for static files in /public/images
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=86400' },
        ],
      },
    ];
  },
};

export default nextConfig;
