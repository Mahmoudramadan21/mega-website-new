'use client';

import { memo } from 'react';
import { EventData } from '@/types/event';

import { useCarousel } from '@/hooks/useCarousel';
import { CarouselArrows, ReviewCard } from '@/components/ui';


/**
 * EventReviewsSection
 *
 * Horizontal carousel showcasing attendee reviews for the event.
 * Each card includes reviewer photo, name, star rating, and quote-style text.
 *
 * Key Features & Optimizations:
 * - Responsive snap scrolling (1 item mobile, 2–3 on larger screens)
 * - Smooth arrow navigation with visibility control
 * - Keyboard accessible carousel with focus management
 * - Empty state handling with polite aria-live message
 * - Lazy-loaded images in ReviewCard
 * - Memoized component to minimize re-renders
 * - Layout → Box Model → Typography → Visual → Transitions
 */
interface EventReviewsSectionProps {
  event: EventData;
  className?: string;
}

function EventReviewsSection({ event, className = '' }: EventReviewsSectionProps) {

  const { carouselRef, scrollLeft, scrollRight, handleKeyDown, arrows } = useCarousel(320);
  
  if (!event.reviews?.length) {
    return (
      // Empty state message – centered and accessible
      <div
        className="py-12 text-center text-neutral-500"
        role="status"
        aria-live="polite"
      >
        No reviews yet for this event.
      </div>
    );
  }

  return (
    // Main reviews section – full-width with optional custom classes
    <section className={className} aria-labelledby="reviews-heading">
      {/* Container */}
      <div className="container">
        {/* Section heading group */}
        <div className="mb-10 md:mb-12 text-center">
          <h2 id="reviews-heading" className="heading-primary text-primary-500">
            {event.title} Reviews
          </h2>

          <p className="mt-3 text-body">
            See what others say about our environment and experience at the event
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Scrollable carousel container */}
          <div
            id="reviews-carousel"
            ref={carouselRef}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label={`Event reviews carousel with ${event.reviews.length} reviews`}
            onKeyDown={handleKeyDown}
            className="
              carousel-x scrollbar-hidden
              px-4
              focus-ring
            "
          >
            {event.reviews.map((review, idx) => (
              <ReviewCard
                key={idx}
                review={review}
                index={idx}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <CarouselArrows
            onLeftClick={scrollLeft}
            onRightClick={scrollRight}
            controlsId="reviews-carousel"
            showLeft={arrows.showLeft}
            showRight={arrows.showRight}
          />
        </div>
      </div>
    </section>
  );
}

export default memo(EventReviewsSection);