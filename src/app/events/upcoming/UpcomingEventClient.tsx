"use client";

import { useState } from "react";
import Script from "next/script";

import RegistrationForm from "./components/RegistrationForm";

import { upcomingEvent } from "@/data/upcoming-event";
import { useCountdown } from "@/hooks/useCountdown";

import {
  ApplicationClosedMessage,
  RegistrationCountdown,
  RegistrationDetails,
  RegistrationHero,
  SuccessModal,
} from "@/components/ui";

import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  RecordIcon,
} from "@/assets/icons";

const eventMeta = [
  {
    icon: "calendar",
    label: "Date",
    value:
      upcomingEvent.meta.find((m) => m.icon === "calendar")?.value || "TBA",
  },
  {
    icon: "clock",
    label: "Time",
    value: upcomingEvent.meta.find((m) => m.icon === "clock")?.value || "TBA",
  },
  {
    icon: "map-pin",
    label: "Location",
    value:
      upcomingEvent.meta.find((m) => m.icon === "map-pin")?.value ||
      "Mansoura University",
  },
  ...upcomingEvent.meta
    .filter((m) => !["calendar", "clock", "map-pin"].includes(m.icon))
    .map((m) => ({ icon: m.icon, label: m.label, value: m.value })),
];

/**
 * UpcomingEventClient
 *
 * Main client-side page component for displaying the featured upcoming event.
 * Handles countdown, hero section, event details, registration form, and success feedback.
 *
 * Main Purpose:
 *   • Promote and drive registrations for the most important upcoming event
 *   • Show real-time countdown and clear call-to-action
 *   • Provide all necessary event information in one place
 *   • Give immediate success feedback after form submission
 *
 * Key Characteristics:
 *   • Conditional rendering: shows form/countdown when open, closed message when expired
 *   • SEO-optimized with JSON-LD structured data (Event schema)
 *   • Uses static upcomingEvent data (centralized & easy to update)
 *   • Responsive layout with container padding adjustments
 *   • Success modal triggered after successful form submission
 */
export default function UpcomingEventClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { timeLeft, isExpired } = useCountdown(
    upcomingEvent.dateTime ?? "2027-01-18T09:00:00",
  );

  const isEventClosed = isExpired;

  return (
    <>
      {/* Structured data for SEO (JSON-LD Event schema) */}
      <Script
        id="upcoming-event-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: upcomingEvent.title,
            description:
              upcomingEvent.description.split("\n\n")[0].slice(0, 300) + "...",
            startDate: upcomingEvent.dateTime
              ? new Date(upcomingEvent.dateTime).toISOString()
              : undefined,
            eventStatus: isEventClosed
              ? "https://schema.org/EventCancelled"
              : "https://schema.org/EventScheduled",
            eventAttendanceMode:
              "https://schema.org/OfflineEventAttendanceMode",
            image: upcomingEvent.images[0]?.src
              ? `https://megateam.vercel.app/${upcomingEvent.images[0].src}`
              : undefined,
            organizer: {
              "@type": "Organization",
              name: "MEGA Team Mansoura University",
              url: "https://megateam.vercel.app",
            },
            location: {
              "@type": "Place",
              name: "Mansoura University",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mansoura",
                addressCountry: "EG",
              },
            },
          }),
        }}
      />

      {isEventClosed ? (
        // Event expired or manually closed → show full-page closed message
        <ApplicationClosedMessage />
      ) : (
        // Event still open → show full registration flow
        <>
          {/* Countdown banner – prominent reminder */}
          <RegistrationCountdown
            timeLeft={timeLeft}
            ariaLabel="Event starts in"
          />

          {/* Main content wrapper */}
          <div className="container py-10 lg:py-16">
            {/* Hero section – visual + title + badge */}
            <RegistrationHero
              title={`Register for ${upcomingEvent.title}`}
              image={upcomingEvent.images[0]}
              badge={upcomingEvent.state === "open" ? "Open" : undefined}
              badgeColor="#34C759"
            />

            {/* Event details + meta information */}
            <RegistrationDetails
              title={upcomingEvent.title}
              description={upcomingEvent.description}
              meta={eventMeta}
              customIcons={{
                calendar: CalendarIcon,
                clock: ClockIcon,
                "map-pin": MapPinIcon,
                record: RecordIcon,
              }}
            />

            {/* Main registration form */}
            <RegistrationForm onSuccess={() => setIsModalOpen(true)} />
          </div>
        </>
      )}

      {/* Success confirmation modal after form submission */}
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
