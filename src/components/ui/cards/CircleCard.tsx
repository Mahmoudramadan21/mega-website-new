'use client';

import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

import { CircleData } from '@/types/circle';
import { ArrowRightIcon } from "@/assets/icons";

/**
 * CircleCard Component
 *
 * A reusable, performant card for displaying individual circle information.
 * Includes a responsive image, title, short description, and an optional roadmap link.
 *
 * Key Optimizations & Best Practices:
 * - Memoized with `React.memo` to prevent unnecessary re-renders.
 * - Lazy-loaded images with proper alt text for accessibility and SEO.
 * - Accessible focus management with focus-ring and meaningful aria attributes.
 * - Smooth hover/focus interactions with transitions and scale effects.
 * - Responsive layout with consistent spacing and snap behavior for carousels.
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions

 */
const CircleCard = ({
  slug,
  title,
  shortDescription,
  imageSrc,
  link,
}: CircleData) => (
  // Main card article - focusable for keyboard navigation and grouped for accessibility
  <article
    key={slug}
    role="group"
    aria-labelledby={`${slug}-title`}
    tabIndex={0}
    className="group flex flex-col snap-center min-w-full md:min-w-92.5 overflow-hidden rounded-xl p-0 select-none bg-neutral-200 hover:bg-neutral-300 focus-ring transition-all duration-300"
  >
    {/* Circle Image Container */}
    {/* Responsive image wrapper with fixed height and overflow hidden for zoom effect */}
    <div className="relative w-full md:w-92.5 h-70 overflow-hidden">
      <Image
        src={imageSrc}
        alt={`Illustration representing the ${title} circle, showcasing key aspects like innovation and collaboration`}
        fill
        className="p-4"
        loading="lazy"
      />
    </div>

    {/* Circle Text Content & CTA */}
    {/* Content section with flexible growth and centered/start alignment based on screen size */}
    <div className="flex flex-col justify-between items-center md:items-start grow p-6 gap-4">
      {/* Circle title with unique ID for aria-labelledby reference */}
      <h3 id={`${slug}-title`} className="heading-card text-primary-400">
        {title}
      </h3>

      {/* Truncated description with relaxed line height and max width for readability */}
      <p className="max-w-77.5 text-body text-neutral-900 line-clamp-4 text-center lg:text-left">
        {shortDescription}
      </p>

      {link && (
        // Optional view more CTA button with icon
        <Link
          href={link}
          className="flex items-center justify-center gap-2 px-8 text-sm md:text-base btn focus-ring transition-all duration-300"
          aria-label={`View the roadmap for ${title} circle`}
        >
          View More
          <ArrowRightIcon
            aria-hidden="true"
            className="h-5 w-5 pt-0.5 md:pt-1"
          />
        </Link>
      )}
    </div>
  </article>
);

export default memo(CircleCard);