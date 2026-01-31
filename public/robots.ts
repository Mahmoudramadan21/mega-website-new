import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Robots.txt configuration for search engine crawlers
  return {
    rules: [
      {
        // Allow all search engines (Google, Bing, etc.) to crawl the entire site
        userAgent: '*',
        allow: '/',
        // Disallow crawling of internal Next.js paths and other private/unnecessary directories
        disallow: [
          '/_next/',       // Next.js static assets and internal files
        ],
      },
    ],
    // Dynamic sitemap URL – Next.js automatically resolves to absolute URL using metadataBase from root layout
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://megateam.vercel.app'}/sitemap.xml`,
  };
}