'use client';

import { useState } from 'react';

import { useCountdown } from '@/hooks/useCountdown';
import { ApplicationClosedMessage, RegistrationCountdown, RegistrationDetails, RegistrationHero, SuccessModal } from '@/components/ui';
import ApplicationForm from './components/ApplicationForm';

import Script from 'next/script';

// ────────────────────────────────────────────────
// Application static data (can be moved to data file later)
// ────────────────────────────────────────────────
const applicationInfo = {
  title: "MEGA Team Application 2026",
  deadline: "2026-03-31T23:59:59Z",
  description: `MEGA Team
  Empowering Tech Minds Shaping Futures

  Join MEGA Team and gain real experience working on impactful projects and events inside the university.

  What You Will Do
  • Learn and grow with hands-on projects
  • Participate in MEGast Podcast Season 3 and main events
  • Work in technical and non-technical circles

  Technical Circles
  • CS
  • Frontend
  • Backend
  • Flutter
  • Data Science
  • Business Analysis
  • UI/UX Design

  Non-Technical Circles
  • Event Operations
  • HR
  • R&D
  • Media
  • PR and Fundraising
  • Project Management

  Apply Now and Start Your Journey with MEGA Team`,
  images: [
    {
      src: "/images/mega-team-application-hero.jpg",
      alt: "MEGA Team – Join our community",
      width: 1280,
      height: 720,
    },
  ],
  state: "open" as "open" | "closed",
};

export default function RegisterClient() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const { timeLeft, isExpired } = useCountdown(applicationInfo.deadline);

  const isApplicationClosed = isExpired || applicationInfo.state === 'closed';

  return (
    <>
      {/* Structured data for SEO (JSON-LD) */}
      <Script
        id="application-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: applicationInfo.title,
            description: applicationInfo.description.split("\n\n")[0],
            startDate: "2026-02-01",
            endDate: applicationInfo.deadline,
            eventStatus: isApplicationClosed
              ? "https://schema.org/EventCancelled"
              : "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
            organizer: {
              "@type": "Organization",
              name: "MEGA Team Mansoura University",
              url: "https://megateam.vercel.app",
            },
            image: `https://megateam.vercel.app${applicationInfo.images[0].src}`,
          }),
        }}
      />

      {isApplicationClosed ? (
        // Closed state – full page message
        <ApplicationClosedMessage />
      ) : (
        // Open state – main registration content
        <>
          {/* Countdown banner – sticky or prominent */}
          <RegistrationCountdown
            timeLeft={timeLeft}
            ariaLabel="Application deadline in"
          />

          {/* Main content wrapper */}
          <div className="container py-10 lg:py-16">
            {/* Hero section – large visual + title */}
            <RegistrationHero
              title={`Register for ${applicationInfo.title}`}
              image={applicationInfo.images[0]}
              badge={applicationInfo.state === "open" ? "Open" : undefined}
              badgeColor="#10B981"
            />

            {/* Event/program details */}
            <RegistrationDetails
              title={applicationInfo.title}
              description={applicationInfo.description}
            />

            {/* Application form – main interactive part */}
            <ApplicationForm onSuccess={() => setIsSuccessModalOpen(true)} />
          </div>
        </>
      )}

      {/* Success confirmation modal */}
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </>
  );
}