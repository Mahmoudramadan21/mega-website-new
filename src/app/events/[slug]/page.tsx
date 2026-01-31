// app/events/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { totalEvents } from "@/data/event";

import {
  EventHeroWithCountdownSection,
  EventIntroBannerSection,
  EventStatsRibbon,
  EventSessionsSection,
  EventReviewsSection,
  EventCTASection,
} from "./components";

import { SponsorsMarquee } from "@/app/(home)/components";

import Script from "next/script";

interface EventPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// =======================
// Dynamic Metadata per Event
// =======================
export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = totalEvents.find((e) => e.slug === slug);

  if (!event) return { title: "Event Not Found" };

  const firstParagraph =
    event.description.split("\n\n")[0].slice(0, 200) + "...";

  return {
    title: `${event.title ?? "Event Not Found"} | MEGA Event`,
    description: `${firstParagraph} Discover this past event by MEGA Team at Mansoura University focusing on tech skills and innovation.`,
    keywords: [
      `${event.title} MEGA`,
      `${event.title} Mansoura University`,
      "MEGA tech event",
      "MEGA Mansoura",
      "student tech workshop Mansoura",
      ...event.meta.map((m) => m.value),
    ],
    robots: { index: true, follow: true },
    alternates: { canonical: `https://megateam.vercel.app/events/${slug}` },
    openGraph: {
      title: `${event.title} | MEGA Event`,
      description: firstParagraph,
      url: `/events/${slug}`,
      images: event.images.map((img) => ({
        url: `https://megateam.vercel.app${img.src}`,
        width: img.width,
        height: img.height,
        alt: img.alt,
      })),
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title} | MEGA Event`,
      description: firstParagraph,
      images: event.images.map(
        (img) => `https://megateam.vercel.app${img.src}`,
      ),
    },
  };
}

// =======================
// Event Detail Page
// =======================
export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = totalEvents.find((e) => e.slug === slug);
  if (!event) notFound();

  const now = new Date();
  const isUpcoming = event.dateTime && new Date(event.dateTime) > now;

  return (
    <>
      {/* Structured data for SEO */}
      <Script
        id={`event-schema-${event.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: event.title,
            description:
              event.description.split("\n\n")[0].slice(0, 300) + "...",
            startDate: event.dateTime
              ? new Date(event.dateTime).toISOString()
              : undefined,
            eventStatus: isUpcoming
              ? "https://schema.org/EventScheduled"
              : "https://schema.org/EventCompleted",
            eventAttendanceMode:
              "https://schema.org/OfflineEventAttendanceMode",
            image: event.images[0]?.src
              ? `https://megateam.vercel.app${event.images[0].src}`
              : undefined,
            organizer: {
              "@type": "Organization",
              name: "MEGA Team Mansoura University",
              url: "https://megateam.vercel.app",
            },
            location: {
              "@type": "Place",
              name: event.location,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mansoura",
                addressCountry: "EG",
              },
            },
            offers: {
              "@type": "Offer",
              name: "Free Registration",
              price: "0",
              priceCurrency: "EGP",
              url: `https://megateam.vercel.app/events/${event.slug}`,
            },
          }),
        }}
      />

      {isUpcoming ? (
        <>
          {/* =======================
              UPCOMING EVENT
              ======================= */}
          <EventHeroWithCountdownSection event={event} />

          <EventStatsRibbon event={event} />

          <EventSessionsSection event={event} />

          <EventIntroBannerSection event={event} autoRotateIntervalMs={4500} />

          <EventCTASection
            title="Ready To Book Your Seat?"
            description="Fill the form now to book your seat to get more knowledge."
            buttonText="Join Us Now"
            buttonHref="/register"
            image={{
              src: event.images[0]?.src || "/default-event-cta.jpg",
              alt: "Student pointing to registration form",
            }}
          />

          <SponsorsMarquee
            sponsors={event.sponsors}
            showCTA={isUpcoming}
            showHeading={true}
            title={`${event.title} Sponsors`}
          />
        </>
      ) : (
        <>
          {/* =======================
              PAST EVENT
              ======================= */}
          <EventIntroBannerSection event={event} autoRotateIntervalMs={4500} />

          <EventStatsRibbon event={event} />

          <EventSessionsSection event={event} />

          <EventReviewsSection event={event} />

          <SponsorsMarquee
            sponsors={event.sponsors}
            showCTA={true}
            showHeading={true}
            title={`${event.title} Sponsors`}
          />
        </>
      )}
    </>
  );
}

// =======================
// Pre-render all event pages (SSG)
// =======================
export async function generateStaticParams() {
  return totalEvents.map((event) => ({ slug: event.slug }));
}
