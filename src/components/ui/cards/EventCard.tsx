'use client';

import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { CalendarIcon, ArrowRightIcon } from "@/assets/icons";
import { EventData } from "@/types/event";

const statusColors: Record<EventData["state"], string> = {
  open: "bg-[#34C759] text-neutral-50",
  soon: "bg-[#FF8D28] text-neutral-900",
  closed: "bg-primary-500 text-neutral-50",
};

/**
 * EventCard Component
 *
 * A performant, reusable card for displaying individual event details with a prominent status badge.
 *
 * Key Features & Optimizations:
 * - Memoized with `React.memo` to prevent unnecessary re-renders
 * - Optimized Next.js Image with lazy loading and proper sizing
 * - Dynamic status badge with color mapping based on event state
 * - Responsive design with hover expansions and carousel snap behavior
 * - Smooth hover/focus transitions including image scale and button padding
 * - Accessible with ARIA labels, focus-ring, and hidden decorative icons
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions

 */
const EventCard = ({ event }: { event: EventData }) => {
  const { slug, title, description, images, meta, state, link, dateTime } =
    event;

  const dateMeta = meta.find((item) => item.label === "Date");

  return (
    <article
      key={slug}
      role="group"
      aria-labelledby={`event-${slug}-title`}
      tabIndex={0}
      className="relative flex flex-col justify-between items-center lg:items-start gap-4
        min-w-full md:min-w-94 hover:md:min-w-98
        rounded-2xl overflow-hidden select-none bg-neutral-200 hover:bg-neutral-300 card-container
        snap-center lg:snap-start focus-ring transition-all duration-300 group
      "
    >
      {/* Event Image Container */}
      <div className="relative w-full h-48 lg:h-56 overflow-hidden rounded-xl">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          sizes="(max-width: 1024px) 90vw, 392px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Event Title */}
      <h3
        id={`event-${slug}-title`}
        className="heading-card text-primary-500 md:min-h-12 text-center lg:text-left"
      >
        {title}
      </h3>

      {/* Event Description */}
      <p className="text-body text-neutral-900 line-clamp-4 max-w-77.5 text-center lg:text-left">
        {description}
      </p>

      {/* Date Meta with Icon */}
      {dateMeta && (
        <div className="flex items-center gap-2">
          <CalendarIcon
            className="w-6 h-6 shrink-0 text-primary-500"
            aria-hidden="true"
          />
          <time
            dateTime={dateTime}
            aria-label={`Event date: ${dateMeta.value}`}
            className="font-semibold text-neutral-900"
          >
            {dateMeta.value}
          </time>
        </div>
      )}

      {/* Call to Action Button */}
      <Link
        href={link}
        className="
          flex items-center justify-center px-8 gap-2 text-sm md:text-base focus-ring btn group-hover:px-15 group-hover:lg:px-25
          transition-all duration-300
        "
        aria-label={`Learn more about the ${title} event`}
      >
        Read More
        <ArrowRightIcon aria-hidden="true" className="h-5 w-5 pt-0.5 md:pt-1" />
      </Link>

      {/* Status Badge */}
      <span
        className={`
          absolute top-4 left-0 px-10 lg:px-12 py-2 rounded-r-full text-sm font-semibold capitalize shadow-md
          ${statusColors[state]}
        `}
        aria-label={`Event status: ${state}`}
      >
        {state}
      </span>
    </article>
  );
};

export default memo(EventCard);