'use client';

import React, { memo } from 'react';
import { backgroundDualEpisodes, imageRightEpisodes } from "@/data/episode";
import { CarouselArrows, EpisodeCard } from "@/components/ui";
import { useCarousel } from "@/hooks/useCarousel";

/**
 * Podcasts Section Component
 *
 * A multi-section horizontal scrolling showcase of MEGA podcast episodes, grouped by visual variant.
 * Optimized for:
 * - Performance: Memoized, lazy-loaded images (handled in EpisodeCard), minimal re-renders
 * - SEO: Semantic structure, proper headings, descriptive content
 * - Accessibility: ARIA regions, labeled sections, focus management
 * - Best Practices: Data-driven, responsive carousels with snap scrolling, consistent spacing
 */
function PodcastsSection() {
  const {
    carouselRef: refRight,
    scrollLeft: scrollLeftRight,
    scrollRight: scrollRightRight,
    handleKeyDown: handleKeyDownRight,
    arrows: arrowsRight,
  } = useCarousel(320);

  const {
    carouselRef: refDual,
    scrollLeft: scrollLeftDual,
    scrollRight: scrollRightDual,
    handleKeyDown: handleKeyDownDual,
    arrows: arrowsDual,
  } = useCarousel(320);

  return (
    // Main podcasts section with vertical padding and anchor target
    <section aria-labelledby="podcasts-title" id="podcasts">
      {/* Centered content wrapper */}
      <div className="container">
        {/* Section Heading */}
        {/* Primary heading with accessible ID reference */}
        <h2 id="podcasts-title" className="section-title">
          MEGA Podcasts
        </h2>
        {/* Descriptive subtitle for engagement and SEO */}
        <p className="section-subtitle">
          Listen to inspiring stories, insights, and advice from tech leaders
          and innovators.
        </p>

        {/* Carousel container */}
        <div className="relative">
          {/* Image-Right Episodes Carousel */}
          {/* Horizontal carousel for episodes with podcast image on the right */}
          <div
            id="podcasts-carousel-right"
            ref={refRight}
            className="carousel-x scrollbar-hidden focus-ring"
            role="region"
            aria-labelledby="podcasts-title"
            aria-label="Image-right podcast episodes carousel"
            tabIndex={0}
            onKeyDown={handleKeyDownRight}
          >
            {imageRightEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} {...episode} />
            ))}
          </div>

          {/* Navigation arrows using CarouselArrows component */}
          <CarouselArrows
            onLeftClick={scrollLeftRight}
            onRightClick={scrollRightRight}
            controlsId="podcasts-carousel-right"
            showLeft={arrowsRight.showLeft}
            showRight={arrowsRight.showRight}
          />
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Background-Dual Episodes Carousel */}
          {/* Horizontal carousel for episodes with dual decorative background images */}
          <div
            id="podcasts-carousel-dual"
            ref={refDual}
            className="carousel-x scrollbar-hidden focus-ring"
            role="region"
            aria-labelledby="podcasts-title"
            aria-label="Background-dual podcast episodes carousel"
            tabIndex={0}
            onKeyDown={handleKeyDownDual}
          >
            {backgroundDualEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} {...episode} />
            ))}
          </div>

          {/* Navigation arrows using CarouselArrows component */}
          <CarouselArrows
            onLeftClick={scrollLeftDual}
            onRightClick={scrollRightDual}
            controlsId="podcasts-carousel-dual"
            showLeft={arrowsDual.showLeft}
            showRight={arrowsDual.showRight}
          />
        </div>
      </div>
    </section>
  );
}

export default memo(PodcastsSection);