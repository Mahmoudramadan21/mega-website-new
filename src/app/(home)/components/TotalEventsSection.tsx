'use client';

import { memo } from 'react';

import { totalEvents } from "@/data/event";
import { CarouselArrows, EventCard } from "@/components/ui";
import { useCarousel } from "@/hooks/useCarousel";

/**
 * TotalEvents Section Component
 *
 * A horizontal scrolling carousel showcasing MEGA events with visual status indicators.
 * Currently displays all events (easily extensible to filters: upcoming/past).
 *
 * Optimized for:
 * - Performance: Memoized section; child cards are memoized with lazy-loaded images.
 * - SEO: Clear heading structure; keyword-rich subtitle; strong internal linking.
 * - Accessibility: Proper ARIA region; semantic HTML; status announced via aria-label.
 * - Best Practices: Pure CSS snap scrolling; data-driven; consistent with other sections (Podcasts, Circles).
 */
function TotalEventsSection() {
  const { carouselRef, scrollLeft, scrollRight, handleKeyDown, arrows } =
    useCarousel(320);

  return (
    // Main events section with vertical padding and anchor target
    <section
      aria-labelledby="total-events-title"
      id="events"
      className="pt-8 lg:pt-16"
    >
      {/* Centered content wrapper */}
      <div className="container">
        {/* Section Heading */}
        {/* Primary heading with accessible ID reference */}
        <h2 id="total-events-title" className="section-title">
          Our Events
        </h2>
        {/* Descriptive subtitle for engagement and SEO */}
        <p className="section-subtitle">
          Join our exciting events, workshops, hackathons, tech fairs, and
          educational programs to level up your skills and network.
        </p>

        {/* Carousel container */}
        <div className="relative">
          {/* Events Carousel */}
          {/* Horizontal scrolling carousel with snap behavior and keyboard navigation support */}
          <div
            id="events-carousel"
            ref={carouselRef}
            className="carousel-x scrollbar-hidden focus-ring"
            role="region"
            aria-roledescription="carousel"
            aria-label="MEGA events showcase carousel"
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            {totalEvents.map((event) => (
              // Individual event card from data
              <EventCard key={event.slug} event={event} />
            ))}
          </div>

          {/* Navigation arrows using CarouselArrows component */}
          <CarouselArrows
            onLeftClick={scrollLeft}
            onRightClick={scrollRight}
            controlsId="events-carousel"
            showLeft={arrows.showLeft}
            showRight={arrows.showRight}
          />
        </div>
      </div>
    </section>
  );
}

export default memo(TotalEventsSection);