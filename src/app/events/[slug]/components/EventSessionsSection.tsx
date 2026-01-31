'use client';

import { memo } from 'react';
import { EventData } from '@/types/event';

import { useCarousel } from '@/hooks/useCarousel';
import { CarouselArrows, SessionCard } from '@/components/ui';

/**
 * EventSessionsSection Component
 *
 * Key Features & Optimizations:
 * - Responsive snap scrolling (1 item mobile, 2–3 on larger screens)
 * - Smooth arrow navigation with visibility control
 * - Keyboard accessible carousel with focus management
 * - Empty state handling with polite aria-live message
 * - Memoized component to minimize re-renders
 * - Layout → Box Model → Typography → Visual → Transitions
 */
interface EventSessionsSectionProps {
  event: EventData;
  className?: string;
}

function EventSessionsSection({ event, className = '' }: EventSessionsSectionProps) {
  
  const { carouselRef, scrollLeft, scrollRight, handleKeyDown, arrows } = useCarousel(320);

  if (!event.sessions?.length) {
    return (
      <div className="py-12 text-center text-neutral-500" role="status" aria-live="polite">
        No sessions available for this event.
      </div>
    );
  }

  return (
    <section className={className} aria-labelledby="sessions-heading">
      <div className="container">
        {/* Section heading */}
        <div className="container mb-10 md:mb-12 text-center">
            <h2
            id="sessions-heading"
            className="heading-primary text-primary-500"
            >
            {event.title}&apos;s Sessions
            </h2>
            <p className="mt-3 text-body">
            Explore technical and non-technical tracks to enhance your skills
            </p>
        </div>

        {/* Carousel container */}
        <div className="relative">
            {/* Scrollable carousel */}
            <div
              id="sessions-carousel"
              ref={carouselRef}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              role="region"
              aria-roledescription="carousel"
              aria-label={`Event sessions carousel with ${event.sessions.length} sessions`}
              className="px-4 carousel-x scrollbar-hidden focus-ring"
            >
            {event.sessions.map((session, idx) => (
              <SessionCard
                key={idx}
                session={session}
                index={idx}
              />
            ))}
            </div>

          {/* Navigation arrows using CarouselArrows component */}
          <CarouselArrows
            onLeftClick={scrollLeft}
            onRightClick={scrollRight}
            controlsId="sessions-carousel"
            showLeft={arrows.showLeft}
            showRight={arrows.showRight}
          />
        </div>
      </div>
    </section>
  );
}

export default memo(EventSessionsSection);