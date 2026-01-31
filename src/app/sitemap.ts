import type { MetadataRoute } from 'next';

import { totalEvents } from '@/data/event';
import { circles } from '@/data/circle';
import { upcomingEvent } from '@/data/upcoming-event';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://megateam.vercel.app';

  const now = new Date();

  /**
   * Static & high-priority pages
   */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/events/upcoming`,
      lastModified: upcomingEvent.dateTime
        ? new Date(upcomingEvent.dateTime)
        : now,
      changeFrequency: "weekly",
      priority: 0.9,
      ...(upcomingEvent.images[0]?.src && {
        images: [`${baseUrl}${upcomingEvent.images[0].src}`],
      }),
    },
  ];

  /**
   * Past events pages
   */
  const eventPages: MetadataRoute.Sitemap = totalEvents.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: event.dateTime ? new Date(event.dateTime) : now,
    changeFrequency: "yearly",
    priority: 0.7,
    ...(event.images[0]?.src && {
      images: [`${baseUrl}${event.images[0].src}`],
    }),
  }));

  /**
   * Circles pages
   */
  const circlePages: MetadataRoute.Sitemap = circles.map((circle) => ({
    url: `${baseUrl}/circles/${circle.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
    ...(circle.imageSrc && {
      images: [`${baseUrl}${circle.imageSrc}`],
    }),
  }));

  return [...staticPages, ...eventPages, ...circlePages];
}
