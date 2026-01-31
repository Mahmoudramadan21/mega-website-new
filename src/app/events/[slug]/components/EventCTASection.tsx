'use client';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@/assets/icons';

type EventCTASectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  image: {
    src: string;
    alt: string;
  };
  className?: string;
};

/**
 * EventCTASection
 *
 * Prominent call-to-action section with text content on one side
 * and illustrative image on the other (desktop only).
 * Typically used to highlight upcoming events, registrations, or key actions.
 *
 * Key Features & Optimizations:
 * - Responsive grid layout (stacked on mobile, side-by-side on desktop)
 * - Colored background with rounded corners for visual emphasis
 * - Accessible heading and button with proper ARIA
 * - Responsive image sizing and object positioning
 * - Smooth hover transition on CTA button
 * - Memoized component for performance
 * - Layout → Box Model → Typography → Visual → Transitions
 */
function EventCTASection({
  title,
  description,
  buttonText,
  buttonHref,
  image,
  className = '',
}: EventCTASectionProps) {
  return (
    // Main CTA section – full-width with optional custom classes
    <section aria-labelledby="event-cta-title" className={className}>
      {/* Container with relative positioning for layout control */}
      <div className="container relative">
        {/* Colored background card with grid layout */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 items-center
            gap-8
            px-6 py-8 md:px-12 md:py-12
            bg-primary-500 rounded-3xl
          "
        >
          {/* Text content column */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            {/* Primary heading */}
            <h2 id="event-cta-title" className="heading-primary text-neutral-50">
              {title}
            </h2>

            {/* Description paragraph */}
            <p className="text-body-lg text-neutral-100 max-w-96">
              {description}
            </p>

            {/* CTA button with icon */}
            <Link
              href={buttonHref}
              aria-label={buttonText}
              className="
                inline-flex items-center justify-center gap-2
                w-fit mx-auto md:mx-0 mt-4
                bg-white text-primary-600 font-medium
                px-6 py-3 rounded-lg
                hover:bg-neutral-100 transition focus-ring
              "
            >
              {buttonText}
              <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Image column – hidden on mobile */}
          <div className="hidden md:block relative w-full h-64 md:h-80">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-right"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(EventCTASection);