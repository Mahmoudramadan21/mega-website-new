'use client';

import { memo } from 'react';
import { MotivationQuote } from '@/types/motivation';

/**
 * QuoteCard Component
 *
 * A visually engaging motivational quote card featuring a themed icon and gradient background.
 *
 * Key Features & Optimizations:
 * - Memoized with `React.memo` to avoid unnecessary re-renders
 * - Semantic markup using <blockquote> and <cite> for improved SEO and structure
 * - Fully accessible: aria-labelledby linking to author, decorative icon hidden from screen readers
 * - Responsive layout with carousel snap behavior
 * - Subtle interactive effects on hover/focus (shadow and icon scale)
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions

 */
const QuoteCard = ({ id, text, author, icon: Icon, gradient, authorColor }: MotivationQuote) => {
  return (
    // Main card article - focusable for keyboard navigation with carousel snap behavior
    <article
      key={id}
      tabIndex={0}
      aria-labelledby={`quote-author-${id}`}
      className={`group flex flex-col items-center justify-center gap-6 min-w-full md:min-w-90 min-h-70 p-8 rounded-2xl snap-center lg:snap-start focus-ring hover:shadow-md transition-shadow duration-300 ${gradient}`}
    >
      {/* Themed decorative icon with subtle hover scale effect */}
      <Icon
        className="opacity-80 text-primary-600 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      />

      {/* Semantic figure containing the quote and its attribution */}
      <figure className="flex flex-col items-center gap-4">
        {/* Quote text with centered alignment and constrained width for readability */}
        <blockquote className="max-w-72.5 leading-relaxed text-center text-lg text-[#1F2937]">
          “{text}”
        </blockquote>

        {/* Author attribution with unique ID for accessibility reference */}
        <figcaption>
          <cite
            id={`quote-author-${id}`}
            className={`font-semibold text-base not-italic ${authorColor}`}
          >
            — {author}
          </cite>
        </figcaption>
      </figure>
    </article>
  );
};

export default memo(QuoteCard);