'use client';

import Image from 'next/image';
import { memo } from 'react';

/**
 * PodcastRoundedImage Component
 *
 * A reusable circular image component primarily used for podcast episode thumbnails
 * in EpisodeCard (both image-left and image-right variants). Can also serve as a
 * general-purpose rounded avatar/profile image in other sections.
 *
 * Key Features & Optimizations:
 * - Fixed square container with perfect circle overflow for consistent rounding
 * - Next.js Image with fill layout and object-cover for optimal fitting
 * - Lazy-loaded as it's typically used in carousels or lists
 * - Purely decorative: empty alt and aria-hidden to avoid screen reader noise
 * - Non-interactive (pointer-events-none, select-none)
 * - Memoized with `React.memo` to prevent unnecessary re-renders
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions

 */

interface PodcastRoundedImageProps {
  /** Path to the image source (relative or absolute) */
  imageSrc: string;
}

const PodcastRoundedImage = ({ imageSrc }: PodcastRoundedImageProps) => (
  // Circular container for podcast thumbnail  - prevents shrinking and enforces perfect circle
  <div className="relative w-47 h-47 shrink-0 overflow-hidden rounded-full select-none">
    {/* Filled image with cover fit - decorative only, hidden from screen readers */}
    <Image
      src={imageSrc}
      alt=""
      fill
      className="object-cover pointer-events-none"
      loading="lazy"
      aria-hidden="true"
    />
  </div>
);

export default memo(PodcastRoundedImage);