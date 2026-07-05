'use client';

import Image from 'next/image';
import { memo } from 'react';

import { BoardMember } from '@/types/board';

/**
 * BoardMemberCard Component
 *
 * A compact, performant card for a single board member.
 * Layout (top → bottom): photo, position, then name.
 *
 * Key Optimizations & Best Practices:
 * - Memoized with `React.memo` to prevent unnecessary re-renders.
 * - Lazy-loaded, cover-fit portrait with descriptive alt text for a11y/SEO.
 * - Focusable for keyboard navigation with a visible focus ring.
 * - Snap alignment + fixed min width for smooth carousel behavior.
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions
 */
const BoardMemberCard = ({ id, name, position, image }: BoardMember) => {
  const isLeadPosition = /Head|Mentor/.test(position);

  return (
  <article
    role="group"
    aria-labelledby={`${id}-name`}
    tabIndex={0}
    className="group flex flex-col shrink-0 snap-center w-56 md:w-64 overflow-hidden rounded-2xl select-none bg-neutral-200 hover:bg-neutral-300 focus-ring transition-colors duration-300"
  >
    {/* Member Photo */}
    <div className="relative w-full h-64 md:h-72 overflow-hidden">
      <Image
        src={image}
        alt={`${name} — ${position} at MEGA`}
        fill
        sizes="(max-width: 768px) 224px, 256px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    {/* Position + Name */}
    <div className="flex flex-col items-center grow gap-1 px-4 py-4 text-center">
      <p
        className={`font-cairo text-sm text-primary-500 ${
          isLeadPosition ? "font-bold" : "font-semibold"
        }`}
      >
        {position}
      </p>
      <h3
        id={`${id}-name`}
        className="font-cairo font-bold text-lg leading-snug text-neutral-900"
      >
        {name}
      </h3>
    </div>
  </article>
  );
};

export default memo(BoardMemberCard);
