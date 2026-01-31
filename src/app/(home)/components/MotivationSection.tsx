'use client';

import { memo } from 'react';

import { motivationQuotes } from "@/data/motivation";
import { CarouselArrows, QuoteCard } from "@/components/ui";
import { useCarousel } from "@/hooks/useCarousel";

/**
 * Motivation Section Component
 *
 * A horizontal scrolling carousel of beautifully styled motivational quotes.
 * Designed to inspire visitors and encourage daily engagement with MEGA.
 *
 * Optimized for:
 * - Performance: Memoized section and cards; minimal re-renders.
 * - SEO: Semantic markup with <blockquote> and <cite>; keyword-rich subtitle.
 * - Accessibility: ARIA region with roledescription; proper labeling and focus management.
 * - Best Practices: Data-driven; consistent carousel pattern with other sections; subtle animations.
 */
function MotivationSection() {
  const { carouselRef, scrollLeft, scrollRight, handleKeyDown, arrows } =
    useCarousel(320);

  return (
    // Main motivation section with vertical padding and light background
    <section
      aria-labelledby="motivation-title"
      id="motivation"
      className="bg-background"
    >
      {/* Centered content wrapper */}
      <div className="container">
        {/* Section Heading */}
        {/* Primary heading with accessible ID reference */}
        <h2 id="motivation-title" className="section-title">
          Daily Motivation
        </h2>
        {/* Descriptive subtitle for inspiration and SEO */}
        <p className="section-subtitle">
          Fuel your ambition with powerful words from visionary leaders. Start
          each day with purpose, resilience, and passion for innovation.
        </p>

        {/* Carousel container */}
        <div className="relative">
          {/* Motivation Carousel */}
          {/* Horizontal scrolling carousel with keyboard navigation support */}
          <div
            id="motivation-carousel"
            ref={carouselRef}
            className="carousel-x scrollbar-hidden focus-ring"
            role="region"
            aria-roledescription="carousel"
            aria-label="Daily motivational quotes carousel"
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            {motivationQuotes.map((quote) => (
              // Individual motivational quote card
              <QuoteCard key={quote.id} {...quote} />
            ))}
          </div>

          {/* Navigation arrows using CarouselArrows component */}
          <CarouselArrows
            onLeftClick={scrollLeft}
            onRightClick={scrollRight}
            controlsId="motivation-carousel"
            showLeft={arrows.showLeft}
            showRight={arrows.showRight}
          />
        </div>
      </div>
    </section>
  );
}

export default memo(MotivationSection);