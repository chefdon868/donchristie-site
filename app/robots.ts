import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Disallow Next.js internals — they shouldn't surface in search.
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://donchristie.com/sitemap.xml',
    host: 'https://donchristie.com',
  };
}
