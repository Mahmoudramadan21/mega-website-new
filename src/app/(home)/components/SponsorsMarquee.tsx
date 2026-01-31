'use client';

import { memo } from 'react';
import Image from "next/image";
import { Sponsor } from "@/types/sponser";
import { ArrowRightIcon } from "@/assets/icons";

interface SponsorsMarqueeProps {
  /** Array of sponsors to display in the marquee */
  sponsors?: readonly Sponsor[];
  /** Whether to show the 'Become a Sponsor' button */
  showCTA?: boolean;
  /** Optional heading text; defaults to 'Our Sponsors and Partners' */
  title?: string;
  /** Whether to visually show the heading or keep it sr-only */
  showHeading?: boolean;
}

/**
 * SponsorsMarquee Component
 *
 * An infinite horizontal scrolling marquee showcasing sponsor logos.
 * Perfect for footer-adjacent or dedicated partnership sections.
 *
 * Optimized for:
 * - Performance: Memoized component; lazy-loaded images; will-change for smooth animation.
 * - SEO: Proper alt text with sponsor names; hidden accessible heading.
 * - Accessibility: sr-only heading; meaningful alt attributes; reduced motion support.
 * - Best Practices: Pure CSS animation (no JS overhead); duplicated list for seamless loop; semantic list structure.
 */
function SponsorsMarquee({
  sponsors,
  showCTA = false,
  title,
  showHeading = false,
}: SponsorsMarqueeProps) {
  if (!sponsors || sponsors.length === 0) return null; // fallback if no sponsors

  const headingText = title ?? "Our Sponsors and Partners";
  const headingClass = showHeading ? "section-title mb-12" : "sr-only";

  return (
    // Main section with vertical padding, hidden overflow, and light background
    <section
      aria-labelledby="sponsors-title"
      className="overflow-hidden bg-background"
    >
      {/* Heading, either visible with styling or sr-only */}
      <h2 id="sponsors-title" className={headingClass}>
        {headingText}
      </h2>

      {/* Full-width wrapper for marquee animation */}
      <div className="relative w-full">
        {/* Marquee container with infinite scroll */}
        {/* Infinite horizontal marquee list with CSS animation and keyboard support */}
        <ul
          className="flex items-center gap-16 w-max will-change-transform motion-reduce:animate-none animate-marquee focus-ring"
          aria-label="Our sponsors and partners logos scrolling continuously. Use Tab to focus and Arrow keys to navigate."
          tabIndex={0}
        >
          {/* Duplicate the list for seamless infinite effect */}
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            // Individual sponsor item - non-shrinking with centered logo
            <li
              key={`${sponsor.id}-${index}`}
              className="flex shrink-0 items-center justify-center px-4"
            >
              {/* Logo figure with fixed size and focus support */}
              <figure
                className="relative w-40 h-40 focus-ring"
                aria-label={sponsor.name}
                tabIndex={0}
              >
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  fill
                  sizes="160px"
                  className="object-contain"
                  loading="lazy"
                  priority={false}
                />
                <figcaption className="sr-only">{sponsor.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      {/* Show CTA button only if showCTA is true */}
      {showCTA && (
        <button className="flex items-center justify-center gap-2 px-8 mx-auto my-12 text-sm md:text-base btn focus-ring transition-all duration-300 cursor-pointer">
          Become a Sponsor
          <ArrowRightIcon
            aria-hidden="true"
            className="h-5 w-5 pt-0.5 md:pt-1"
          />
        </button>
      )}
    </section>
  );
}

export default memo(SponsorsMarquee);