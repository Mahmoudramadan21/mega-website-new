'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@/assets/icons';

/**
 * RegistrationHero Component
 *
 * Prominent hero section for event pages, displaying the event poster image,
 * dynamic title (adjusted for registration mode), back navigation link,
 * and a status badge when registration is open.
 *
 * Key Features & Optimizations:
 * - Responsive title sizing and centered layout
 * - Priority-loaded hero image with fixed height for consistent layout
 * - Accessible back link with hidden text for screen readers and visible icon
 * - Conditional "Open" badge positioned over the image
 * - Memoized with `React.memo` to prevent unnecessary re-renders
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions

 */

export interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height?: number;
}

export interface HeroSectionProps {
  /** Main visible title */
  title: string | React.ReactNode;
  /** Image to display as hero background/featured image */
  image: HeroImage;
  /** Optional badge text (e.g. "Open", "Coming Soon", "Registration") */
  badge?: string;
  /** Background color of the badge */
  badgeColor?: string;           // default: #34C759 (green)
  /** Where to go when clicking the back arrow (default: "/") */
  backHref?: string;
  /** Accessible label for the back button (default: "Back to Home") */
  backLabel?: string;
  /** Optional extra class for the whole component */
  className?: string;
  /** Show back button? (default: true) */
  showBack?: boolean;
  /** Fixed aspect or max height for the image container */
  imageMaxHeight?: string;       // default: "max-h-56"
}


function RegistrationHero({ 
  title,
  image,
  badge,
  badgeColor = '#34C759',
  backHref = '/',
  backLabel = 'Back to Home',
  className = '',
  showBack = true,
  imageMaxHeight = 'max-h-56',
 }: HeroSectionProps) {
  return (
    <>
      {/* Back Link & Page Title */}
      {/* Header row with back link, centered title, and balanced spacing */}
      <div
        className={`flex items-center justify-between gap-8 mb-12 text-primary-500 ${className}`}
      >
        {showBack && (
          <Link
            href={backHref}
            className="focus-ring hover:text-primary-300 transition-colors"
          >
            <ArrowRightIcon className="h-6 w-6 rotate-180" aria-hidden="true" />
            <span className="sr-only">{backLabel}</span>
          </Link>
        )}

        {/* Main page title with responsive sizing and dynamic text based on mode */}
        <h1 className="grow text-center heading-primary">{title}</h1>

        {/* Spacer for balance when back button exists */}
        {showBack && <div className="w-8" aria-hidden="true" />}
      </div>

      {/* Hero Image with Optional Status Badge */}
      {/* Hero image container with rounded corners and prominent shadow */}
      <div className="relative w-full h-120 mb-6 overflow-hidden rounded-2xl shadow-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="w-full h-full object-cover object-center"
        />

        {badge && (
          <span
            className="absolute left-0 top-4 px-10 py-2 rounded-r-full text-sm font-semibold text-neutral-50"
            style={{ backgroundColor: badgeColor }}
            aria-label={badge}
          >
            {badge}
          </span>
        )}
      </div>
    </>
  );
}

export default memo(RegistrationHero);