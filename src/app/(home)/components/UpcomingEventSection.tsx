'use client';

import React, { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { upcomingEvent } from '@/data/upcoming-event';
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  RecordIcon,
} from "@/assets/icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: CalendarIcon,
  "map-pin": MapPinIcon,
  clock: ClockIcon,
  record: RecordIcon,
};

/**
 * UpcomingEvent Section Component
 *
 * A spotlight section highlighting the current or most prominent upcoming event.
 * Optimized for:
 * - Performance: Efficient image loading, minimal re-renders via memo
 * - SEO: Semantic HTML, proper title hierarchy, descriptive alt text
 * - Accessibility: ARIA labels, focusable elements, decorative icons hidden
 * - Best Practices: Clear structure, responsive design, meaningful links
 */
function UpcomingEventSection() {
  const { title, description, state, link, images, meta, cta, registration } =
    upcomingEvent;

  return (
    // Main upcoming event section with dark background and vertical padding
    <section
      aria-labelledby="current-event-title"
      id="upcoming-event"
      className="bg-[#0D0D0D]"
    >
      {/* Centered content container */}
      <div className="container">
        {/* Section Title */}
        {/* Primary heading with accessible ID reference */}
        <h2 id="current-event-title" className="section-title">
          Current Event Spotlight
        </h2>
        {/* Descriptive subtitle with light text for contrast */}
        <p className="section-subtitle text-neutral-300">
          Don&apos;t miss out on our most important event of this semester
        </p>

        {/* Event Content Grid */}
        {/* Responsive grid: stacked on mobile, side-by-side on lg+ */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          {/* Event Image */}
          {/* Image container with rounded corners and overflow hidden */}
          <div className="relative w-full lg:max-w-[48%] overflow-hidden rounded-2xl">
            {/* Priority-loaded event poster image with responsive cover fit */}
            <Image
              src={images[0].src}
              alt={images[0].alt}
              width={images[0].width}
              height={images[0].height}
              sizes="(max-width: 1024px) 100vw, 48vw"
              priority
              className="w-full h-full object-cover"
            />
            {/* Status Badge */}
            {/* Conditional event status badge overlaid on the image */}
            <span
              className="absolute left-0 top-10 px-9 py-2 rounded-r-full font-semibold bg-[#34C759] text-neutral-50"
              aria-label={`Event status: ${state}`}
            >
              {state}
            </span>
          </div>

          {/* Event Details */}
          {/* Text content column with vertical spacing */}
          <div className="flex flex-col gap-6 w-full lg:w-[48%] py-6 lg:py-12">
            {/* Title + CTA */}
            {/* Title and primary CTA row with responsive layout */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-between gap-6">
              <h3 className="subsection-title">{title}</h3>
              <Link
                href={cta?.href ?? link}
                className="flex items-center justify-center gap-2 px-12 btn focus-ring"
                aria-label={cta?.ariaLabel}
              >
                {cta?.label ?? "Learn More"}
                <ArrowRightIcon aria-hidden="true" className="h-5 w-5 pt-1" />
              </Link>
            </div>

            {/* Description */}
            {/* Event description paragraph */}
            <p className="subsection-description text-neutral-200">
              {description}
            </p>

            {/* Event Meta Grid – Driven by data array for maintainability and scalability */}
            {/* Responsive meta information grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto lg:mx-0">
              {meta.map(({ icon, label, value }) => {
                const IconComponent = iconMap[icon];
                if (!IconComponent) {
                  return null;
                }

                // Individual meta item with icon and label/value pair
                return (
                  <div
                    key={label}
                    className="flex items-center lg:items-start gap-4"
                  >
                    <IconComponent
                      className="h-6 w-6 shrink-0 text-primary-500"
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="font-medium text-base text-neutral-400">
                        {label}
                      </h4>
                      <p className="mt-0.5 text-base text-neutral-200">
                        {value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Registration Progress */}
            {registration && (
              // Registration progress bar with count display
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-bold text-lg text-neutral-200">
                  {registration.registeredCount}+ Already Registered
                </p>
                {/* Accessible progress bar with dynamic width */}
                <div
                  className="relative w-full sm:w-80 h-3 overflow-hidden bg-neutral-700 rounded-full"
                  role="progressbar"
                  aria-valuenow={registration.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Registration progress: ${registration.progress}% full`}
                >
                  <div
                    className={`absolute inset-y-0 left-0 rounded-r-full bg-primary-500 transition-all duration-500`}
                    style={{ width: `${registration.progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(UpcomingEventSection);