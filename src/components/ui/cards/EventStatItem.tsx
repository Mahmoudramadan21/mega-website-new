'use client';

import { memo, type ComponentType } from 'react';

interface StatItemProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string | number;
  ariaLabel: string;
  className?: string;
}

/**
 * EventStatItem Component
 *
 * Reusable statistic display component: circular icon container + label + prominent value.
 * Commonly used in ribbons, stat cards, dashboards, event highlights, etc.
 *
 * Key Features & Optimizations:
 * - Subtle hover scale animation with active state feedback
 * - Responsive icon & text sizing (mobile → desktop)
 * - Accessibility: screen-reader-only <dt>, descriptive aria-label
 * - Clean separation: icon wrapper vs content area
 * - Memoized to prevent unnecessary re-renders
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions

 */
const EventStatItem = memo(function EventStatItem({
  icon: Icon,
  label,
  value,
  ariaLabel,
  className = '',
}: StatItemProps) {
  return (
    // Main stat item container with flex layout and hover animation
    <div
      className={`
        flex items-start gap-3 sm:gap-4
        transition-transform duration-200 hover:scale-105 active:scale-100
        ${className}
      `}
    >
      {/* Icon container – fixed size, never shrinks */}
      <div className="shrink-0">
        {/* Circular/rounded icon background with subtle glass effect */}
        <div className="
          inline-flex items-center justify-center
          w-10 h-10 sm:w-12 sm:h-12
          rounded-lg bg-neutral-100/90 backdrop-blur-sm
          shadow-sm
        ">
          <Icon
            className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Text content area */}
      <div className="flex flex-col items-start gap-0.5 font-cairo">
        {/* Hidden label for screen readers (semantic dt/dd structure) */}
        <dt className="sr-only">{ariaLabel}</dt>
        
        {/* Stat label – smaller, lighter text */}
        <span className="text-sm sm:text-base opacity-90 font-medium tracking-tight">
          {label}
        </span>
        
        {/* Prominent stat value – bold and high contrast */}
        <dd className="
          font-semibold text-base tracking-tight
          text-neutral-50
        ">
          {value}
        </dd>
      </div>
    </div>
  );
});

export default memo(EventStatItem);