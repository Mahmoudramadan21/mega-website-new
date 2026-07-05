'use client';

import { memo } from 'react';

import {
  highBoard,
  nonTechnicalBoard,
  technicalBoard,
} from "@/data/board";
import { BoardMember } from "@/types/board";
import { BoardMemberCard, CarouselArrows } from "@/components/ui";
import { useCarousel } from "@/hooks/useCarousel";

interface BoardCarouselProps {
  /** Accessible label for the row (e.g. "High Board"). */
  title: string;
  /** Unique id used to link the heading and carousel region. */
  id: string;
  /** Ordered members to display in this row. */
  members: BoardMember[];
  /** When true, cards are centered in a static row instead of a scrollable carousel. */
  centered?: boolean;
}

/**
 * BoardCarousel
 *
 * A single labeled, horizontally scrollable row of board member cards.
 * Owns its own carousel state so each row scrolls independently.
 */
function BoardCarousel({ title, id, members, centered = false }: BoardCarouselProps) {
  const { carouselRef, scrollLeft, scrollRight, handleKeyDown, arrows } =
    useCarousel(280);

  return (
    <div className="mt-8 first:mt-6">
      {/* Row title */}
      <h3 id={`${id}-title`} className="subsection-title !text-primary-500 mb-2">
        {title}
      </h3>

      {centered ? (
        /* Centered static row — used for High Board (few members) */
        <div
          id={id}
          className="flex flex-wrap justify-center gap-8 lg:gap-10 py-4"
          role="region"
          aria-labelledby={`${id}-title`}
          aria-label={`${title} members`}
        >
          {members.map((member) => (
            <BoardMemberCard key={member.id} {...member} />
          ))}
        </div>
      ) : (
        /* Carousel container */
        <div className="relative">
          {/* Horizontal scrollable row with snap behavior and keyboard navigation */}
          <div
            id={id}
            ref={carouselRef}
            className="carousel-x scrollbar-hidden focus-ring !items-stretch"
            role="region"
            aria-labelledby={`${id}-title`}
            aria-roledescription="carousel"
            aria-label={`${title} members carousel`}
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            {members.map((member) => (
              <BoardMemberCard key={member.id} {...member} />
            ))}
          </div>

          {/* Navigation arrows */}
          <CarouselArrows
            onLeftClick={scrollLeft}
            onRightClick={scrollRight}
            controlsId={id}
            showLeft={arrows.showLeft}
            showRight={arrows.showRight}
          />
        </div>
      )}
    </div>
  );
}

/**
 * Board Section Component ("Meet Our Board")
 *
 * Showcases the MEGA board across three independent carousel rows:
 * High Board, Non-Technical Board, and Technical Board.
 *
 * Optimized for:
 * - Performance: Memoized section; per-row carousel state; lazy-loaded card images.
 * - SEO: Semantic headings and descriptive subtitle.
 * - Accessibility: ARIA regions/labels per row and keyboard-navigable carousels.
 * - Best Practices: Data-driven rendering consistent with other home sections.
 */
function BoardSection() {
  return (
    <section aria-labelledby="board-title" id="board">
      <div className="container">
        {/* Section Heading */}
        <h2 id="board-title" className="section-title">
          Meet Our Board
        </h2>
        <p className="section-subtitle">
          The people leading MEGA across leadership, non-technical, and technical
          circles.
        </p>

        {/* Three independent rows */}
        <BoardCarousel
          title="High Board"
          id="board-high"
          members={highBoard}
          centered
        />
        <BoardCarousel
          title="Non-Technical Board"
          id="board-non-technical"
          members={nonTechnicalBoard}
        />
        <BoardCarousel
          title="Technical Board"
          id="board-technical"
          members={technicalBoard}
        />
      </div>
    </section>
  );
}

export default memo(BoardSection);
