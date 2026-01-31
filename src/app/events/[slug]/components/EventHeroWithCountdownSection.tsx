'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import { EventData } from '@/types/event';
import Link from 'next/link';
import { useCountdown } from '@/hooks/useCountdown';
import { ArrowRightIcon } from '@/assets/icons';

type EventHeroWithCountdownSectionProps = {
  event: EventData;
  className?: string;
};

/**
 * EventHeroWithCountdownSection
 *
 * Full-width hero section for upcoming events with large title,
 * short description, booking CTA, live countdown timer, and background image.
 *
 * Key Features & Optimizations:
 * - Responsive flex layout (stacked on mobile, side-by-side on desktop)
 * - Dark overlay image for better text contrast
 * - Live countdown using custom hook with polite aria-live
 * - Accessible heading, button, and dynamic timer
 * - Priority image loading for above-the-fold content
 * - Smooth transitions on CTA button
 * - Memoized for performance
 * - Layout → Box Model → Typography → Visual → Transitions
 */
function EventHeroWithCountdownSection({ event, className = '' }: EventHeroWithCountdownSectionProps) {
  const { timeLeft, isExpired } = useCountdown(event.dateTime);
  const COUNTDOWN_UNITS = ['days', 'hours', 'minutes', 'seconds'] as const;

  return (
    // Main hero section – full-width dark background with overflow control
    <section
      aria-labelledby="event-hero-title"
      className={`relative w-full overflow-hidden bg-black ${className}`}
    >
      {/* Container with responsive flex layout */}
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8 px-4 md:px-8">
        {/* Text & Countdown column */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-6 text-center md:text-left">
          {/* Event title */}
          <h2 className="heading-primary text-neutral-50">{event.title}</h2>

          {/* Short description */}
          <p className="text-body-lg max-w-116 text-neutral-200">{event.shortDescription}</p>

          {/* Booking CTA button */}
          <Link
            href="/upcoming"
            aria-label={`Book a seat for ${event.title}`}
            className="
              flex items-center justify-center gap-2
              w-fit px-16
              text-sm md:text-base
              btn
              transition-all duration-300
              focus-ring
            "
          >
            Book Your Seat
            <ArrowRightIcon aria-hidden="true" className="h-5 w-5 pt-0.5 md:pt-1" />
          </Link>

          {/* Countdown timer */}
          <div
            aria-live="polite"
            className="flex justify-center md:justify-start gap-4 font-digital text-lg md:text-2xl text-neutral-200"
          >
            {COUNTDOWN_UNITS.map((unit) => (
              <div key={unit} className="flex flex-col items-center min-w-18">
                <span className="font-bold">{String(timeLeft[unit]).padStart(2, '0')}</span>
                <span className="text-xs sm:text-sm uppercase tracking-wide mt-1 opacity-80">
                  {unit === 'days' ? 'Days' : unit}
                </span>
              </div>
            ))}
          </div>

          {/* Expired message */}
          {isExpired && (
            <p className="mt-2 font-medium text-primary-400 ">The event has started!</p>
          )}
        </div>

        {/* Event image column */}
        <div className="flex-1 relative w-full h-64 md:h-96">
          <Image
            src={event.images[0]?.src || '/default-event.jpg'}
            alt={event.images[0]?.alt || 'Event Image'}
            fill
            className="object-cover object-center brightness-[0.7]"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default memo(EventHeroWithCountdownSection);