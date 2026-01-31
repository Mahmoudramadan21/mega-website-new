'use client';

import { memo, useMemo, useState } from 'react';

import { circles } from "@/data/circle";
import { CircleType } from "@/types/circle";
import { CarouselArrows, CircleCard } from "@/components/ui";
import { useCarousel } from "@/hooks/useCarousel";

/**
 * Circles Section Component
 *
 * A filterable horizontal scrolling showcase of MEGA circles, categorized by type.
 * Supports 'all', 'technical', and 'non-technical' filters for user-friendly exploration.
 *
 * Optimized for:
 * - Performance: Memoized component; useMemo for filtered data to avoid recomputation; lazy-loaded images in child cards.
 * - SEO: Semantic structure with headings, descriptive subtitles, and keyword-rich content.
 * - Accessibility: ARIA regions and labels; keyboard-navigable filters with aria-pressed; focus management in carousel.
 * - Best Practices: Data-driven rendering; responsive snap scrolling; consistent UI patterns with transitions.
 */
type CircleFilter = "all" | CircleType;

function CirclesSection() {
  const [filter, setFilter] = useState<CircleFilter>("all");

  const { carouselRef, scrollLeft, scrollRight, handleKeyDown, arrows } =
    useCarousel(320);

  // Memoized filtered circles to prevent unnecessary re-filtering on every render
  const filteredCircles = useMemo(
    () =>
      filter === "all"
        ? circles
        : circles.filter((circle) => circle.type === filter),
    [filter],
  );

  // Filter options for the tablist
  const filters: { label: string; value: CircleFilter }[] = [
    { label: "All", value: "all" },
    { label: "Technical", value: "technical" },
    { label: "Non Technical", value: "non-technical" },
  ];

  return (
    // Main section container with vertical padding and anchor link target
    <section aria-labelledby="circles-title" id="circles">
      {/* Centered content wrapper */}
      <div className="container">
        {/* Section Heading */}
        {/* Primary heading with accessible ID reference */}
        <h2 id="circles-title" className="section-title">
          Our Circles
        </h2>

        {/* Descriptive subtitle explaining the section purpose */}
        <p className="section-subtitle">
          Explore technical and non-technical tracks to enhance your skills and
          knowledge in innovation, project management, and more.
        </p>

        {/* Filter Buttons */}
        {/* Accessible tablist for filtering circle types */}
        <div
          className="flex flex-wrap justify-center gap-4 mt-6"
          role="tablist"
        >
          {filters.map(({ label, value }) => (
            // Individual filter button with ARIA tab semantics and visual active state
            <button
              key={value}
              onClick={() => setFilter(value)}
              role="tab"
              aria-selected={filter === value}
              aria-controls="circles-carousel"
              className="w-50 py-2 rounded-full font-cairo font-bold cursor-pointer bg-neutral-200 text-neutral-700 hover:bg-neutral-300 aria-selected:bg-primary-500 aria-selected:text-neutral-50 transition-colors duration-300"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Circles Carousel */}
          {/* Horizontal scrollable carousel with snap behavior and keyboard navigation support */}
          <div
            id="circles-carousel"
            ref={carouselRef}
            className="carousel-x scrollbar-hidden focus-ring"
            role="region"
            aria-labelledby="circles-title"
            aria-roledescription="carousel"
            aria-label="Circles showcase carousel"
            onKeyDown={handleKeyDown}
          >
            {filteredCircles.map((circle) => (
              // Individual circle card rendered from filtered data
              <CircleCard key={circle.slug} {...circle} />
            ))}

            {/* Navigation arrows using CarouselArrows component */}
            <CarouselArrows
              onLeftClick={scrollLeft}
              onRightClick={scrollRight}
              controlsId="circles-carousel"
              showLeft={arrows.showLeft}
              showRight={arrows.showRight}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(CirclesSection);