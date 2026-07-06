'use client';

import React, { memo } from 'react';
import { season1Episodes, season2Episodes } from "@/data/episode";
import { CarouselArrows, PodcastEpisodeCard } from "@/components/ui";
import { useCarousel } from "@/hooks/useCarousel";
import { PodcastEpisode } from "@/types/episode";

/**
 * Podcasts Section Component
 *
 * A horizontal scrolling showcase of MEGA podcast (MEGast) episodes, grouped by season.
 * Season 2 is featured on top, followed by Season 1, each rendered as poster-style cards
 * whose "Watch Now" button links to the full episode video.
 *
 * Optimized for:
 * - Performance: Memoized, lazy-loaded images (handled in PodcastEpisodeCard)
 * - SEO: Semantic structure, proper headings, descriptive content
 * - Accessibility: ARIA regions, labeled sections, focus management, keyboard navigation
 * - Best Practices: Data-driven, responsive carousels with snap scrolling
 */

interface SeasonCarouselProps {
  seasonNumber: number;
  episodes: PodcastEpisode[];
}

function SeasonCarousel({ seasonNumber, episodes }: SeasonCarouselProps) {
  const { carouselRef, scrollLeft, scrollRight, handleKeyDown, arrows } =
    useCarousel(340);

  const headingId = `podcasts-season-${seasonNumber}-title`;
  const carouselId = `podcasts-carousel-season-${seasonNumber}`;

  return (
    <div className="mt-10">
      {/* Season heading */}
      <h3 id={headingId} className="mb-2 text-xl md:text-2xl font-bold text-neutral-50">
        Season {seasonNumber}
      </h3>

      {/* Carousel container */}
      <div className="relative">
        <div
          id={carouselId}
          ref={carouselRef}
          className="carousel-x scrollbar-hidden focus-ring"
          role="region"
          aria-labelledby={headingId}
          aria-label={`Season ${seasonNumber} podcast episodes carousel`}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {episodes.map((episode) => (
            <PodcastEpisodeCard key={episode.id} {...episode} />
          ))}
        </div>

        {/* Navigation arrows */}
        <CarouselArrows
          onLeftClick={scrollLeft}
          onRightClick={scrollRight}
          controlsId={carouselId}
          showLeft={arrows.showLeft}
          showRight={arrows.showRight}
        />
      </div>
    </div>
  );
}

function PodcastsSection() {
  return (
    // Main podcasts section with vertical padding and anchor target
    <section aria-labelledby="podcasts-title" id="podcasts">
      {/* Centered content wrapper */}
      <div className="container">
        {/* Section Heading */}
        <h2 id="podcasts-title" className="section-title">
          MEGA Podcasts
        </h2>
        {/* Descriptive subtitle for engagement and SEO */}
        <p className="section-subtitle">
          Listen to inspiring stories, insights, and advice from tech leaders
          and innovators.
        </p>

        {/* Season 2 on top, then Season 1 */}
        <SeasonCarousel seasonNumber={2} episodes={season2Episodes} />
        <SeasonCarousel seasonNumber={1} episodes={season1Episodes} />
      </div>
    </section>
  );
}

export default memo(PodcastsSection);
