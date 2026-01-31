'use client';

import React, { memo } from 'react';

/**
 * RegistrationDetails Component
 *
 * Displays detailed information about a single event, including the title,
 * full description, and structured meta details (e.g., date, time, location, sessions).
 *
 * Key Features & Optimizations:
 * - Semantic <dl>/<dt>/<dd> structure for excellent accessibility and SEO
 * - Responsive grid layout for meta items (1 column on mobile, 2 on larger screens)
 * - Preserves line breaks in description via whitespace-pre-line
 * - Memoized with `React.memo` to prevent unnecessary re-renders
 * - Icons are decorative and hidden from screen readers
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions

 */

export interface MetaItem {
  /** Icon key to match with iconMap (e.g., 'calendar', 'clock', 'map-pin') */
  icon: keyof typeof iconMap;
  /** Label for the meta item (e.g., "Date", "Location") */
  label: string;
  /** Value/content for the meta item */
  value: string | React.ReactNode;
}

/** Base icon map - extendable by consumers */
export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: () => null, // Placeholder - consumer must provide
  'map-pin': () => null,
  clock: () => null,
  record: () => null,
  // Add more defaults if needed
};

export interface RegistrationDetailsProps {
  /** Main title of the section */
  title: string;
  /** Description paragraph (supports line breaks) */
  description?: string;
  /** Array of metadata items to display */
  meta?: MetaItem[];
  /** Custom icon components to override/extend the default iconMap */
  customIcons?: Record<string, React.ComponentType<{ className?: string }>>;
  /** Optional className for the main section */
  className?: string;
}

function RegistrationDetails({ 
  title,
  description,
  meta,
  customIcons = {},
  className = '',
 }: RegistrationDetailsProps) {
  // Merge default icons with custom ones
  const mergedIconMap = { ...iconMap, ...customIcons };

  return (
    // Main event details section with bottom margin spacing
    <section className={`mb-8 ${className}`}>
      {/* Event title heading with responsive sizing and primary color */}
      <h2 className="heading-primary text-primary-500 mb-4">
        {title}
      </h2>

      {/* Event description with preserved line breaks and responsive text size */}
      {description && (
      <p className="text-body-lg text-neutral-600 mb-8 whitespace-pre-line">
        {description}
      </p>
     )}

      {/* Responsive definition list grid for event metadata (1col mobile, 2col desktop) */}
      {meta && meta.length > 0 && (
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {meta.map(({ icon, label, value }) => {
            const IconComponent = mergedIconMap[icon];
            if (!IconComponent || !React.isValidElement(<IconComponent />)) {
              // Fallback: render without icon
              return (
                <div key={label} className="space-y-1">
                  <dt className="font-medium text-neutral-600">{label}</dt>
                  <dd className="font-semibold text-sm md:text-lg">{value}</dd>
                </div>
              );
            }

            // With icon
            return (
              <div key={label} className="flex items-center gap-5">
                {/* Decorative meta icon, fixed size and hidden from screen readers */}
                <IconComponent
                  className="h-6 w-6 shrink-0 text-primary-500"
                  aria-hidden="true"
                />

                {/* Label and value container */}
                <div>
                  <dt className="font-medium text-neutral-600">{label}</dt>
                  <dd className="font-semibold text-sm md:text-lg">
                    {value}
                  </dd>
                </div>
              </div>
            );
          })}
        </dl>
      )}
    </section>
  );
}

export default memo(RegistrationDetails);