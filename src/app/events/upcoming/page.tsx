import type { Metadata } from 'next';
import { upcomingEvent } from '@/data/upcoming-event';
import UpcomingEventClient from './UpcomingEventClient';

/**
 * Helper function to format the event date safely
 * Extracts the date part from ISO string (e.g., "2026-01-18T09:00:00" → "January 18, 2026")
 * Falls back to "Upcoming Date" if dateTime is missing/invalid
 */
function formatEventDate(dateTime: string | undefined): string {
  if (!dateTime) return 'Upcoming Date';

  const datePart = dateTime.split('T')[0]; // Safe extract YYYY-MM-DD
  try {
    return new Date(datePart).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return 'Upcoming Date';
  }
}

/**
 * Dynamic metadata for the upcoming event registration page
 * Inherits from root layout (title template "%s | MEGA", metadataBase, etc.)
 * Best practices:
 * - Title: 50-60 chars, action-oriented ("Register", "Join")
 * - Description: 150-160 chars, benefit-focused, urgency (date)
 * - OG/Twitter: Event-specific poster, type 'website' for rich previews
 */
export const metadata: Metadata = {
  title: `Register for ${upcomingEvent.title}`,
  description:
    `Join ${upcomingEvent.title} at Mansoura University on ${formatEventDate(upcomingEvent.dateTime)}. Hands-on programming for young learners, interactive sessions, and inspiring tech journey. Limited seats – register now!`,

  keywords: [
    `${upcomingEvent.title} registration`,
    `${upcomingEvent.title} Mansoura University`,
    'MagiCoders 2.0', // Adjust if name changes
    'kids programming workshop Mansoura',
    'children coding event Mansoura',
    'MEGA upcoming event',
    'MEGA Mansoura University',
    'tech workshop for kids',
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://megateam.vercel.app/events/upcoming',
  },

  openGraph: {
    title: `Register Now: ${upcomingEvent.title} | MEGA Mansoura University`,
    description: `Don't miss ${upcomingEvent.title} – an exciting coding adventure for young minds at Mansoura University on ${formatEventDate(upcomingEvent.dateTime)}. Interactive sessions, history of computing, and intro to game dev, AI & more. Register today!`,
    url: '/events/upcoming',
    siteName: 'MEGA',
    images: [
      {
        url: upcomingEvent.images[0].src,
        width: upcomingEvent.images[0].width,
        height: upcomingEvent.images[0].height,
        alt: upcomingEvent.images[0].alt,
      },
    ],
    type: 'website',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: `Register for ${upcomingEvent.title}.`,
    description: `Hands-on coding fun for kids at Mansoura University on ${formatEventDate(upcomingEvent.dateTime)}! Limited seats – secure your spot now. #MEGAMansoura #KidsCoding`,
    images: [upcomingEvent.images[0].src],
  },
};

/**
 * Upcoming Event Registration Page
 *
 * Server component that renders the client-side registration experience.
 * Keeps metadata generation on the server for optimal SEO while delegating
 * interactive elements (countdown, form, modal) to UpcomingEventClient.
 */
export default function Page() {
  return <UpcomingEventClient />;
}

// Revalidate daily to keep countdown/date fresh (ISR)
export const revalidate = 86400; // 24 hours