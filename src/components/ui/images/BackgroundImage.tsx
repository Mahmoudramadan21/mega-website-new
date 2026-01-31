'use client';

import Image from 'next/image';
import { memo } from 'react';

/**
 * BackgroundImage Component
 *
 * Purely decorative background image used in podcast episode cards (background-dual variant).
 * Positioned absolutely at the bottom-left or bottom-right corner with reduced opacity.
 *
 * Key Features & Optimizations:
 * - Fixed dimensions with responsive scaling for consistent layout
 * - Lazy-loaded with priority kept low as it's decorative
 * - Fully hidden from screen readers (aria-hidden + empty alt)
 * - Non-interactive (pointer-events-none, select-none)
 * - Memoized with `React.memo` to prevent unnecessary re-renders
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions

 */

interface BackgroundImageProps {
  /** Path to the image source (relative or absolute) */
  imageSrc: string;
  /** Placement of the image within its container */
  position: 'left' | 'right';
}

const BackgroundImage = ({ imageSrc, position }: BackgroundImageProps) => (
  // Decorative background image - absolutely positioned at bottom corners
  <Image
    src={imageSrc}
    alt=""
    width={188}
    height={188}
    className={`absolute bottom-0 ${position === 'left' ? 'left-0' : 'right-0'} w-35 h-35 md:w-47 md:h-47 select-none pointer-events-none opacity-80`}
    loading="lazy"
    role="presentation"
    aria-hidden="true"
  />
);

export default memo(BackgroundImage);