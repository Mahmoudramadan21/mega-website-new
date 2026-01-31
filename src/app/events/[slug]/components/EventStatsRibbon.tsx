'use client';

import { memo } from 'react';
import { EventData } from '@/types/event';
import { AudienceIcon, CalendarIcon, ClockIcon, MapPinIcon } from '@/assets/icons';
import { EventStatItem } from '@/components/ui';


/**
 * EventStatsRibbon
 *
 * Horizontal stats ribbon displaying key event metrics:
 * attendance count, date, location, and number of sessions.
 *
 * Key Features & Optimizations:
 * - Responsive layout (stacks on small screens, spreads on lg+)
 * - Prominent primary-colored background with shadow
 * - Circular icon containers via EventStatItem
 * - Semantic <dl> structure with screen-reader labels
 * - Hover scale effect on stat items (handled in EventStatItem)
 * - Memoized to prevent unnecessary re-renders
 * - Layout → Box Model → Typography → Visual → Transitions
 */
interface EventStatsRibbonSectionProps {
  event: EventData;
  className?: string;
}

function EventStatsRibbon({ event, className = '' }: EventStatsRibbonSectionProps) {
  // Format date nicely – in production consider using date-fns or Intl.DateTimeFormat
  const formattedDate = event.dateTime
    ? new Date(event.dateTime).toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      })
    : 'Date TBA';

  const formattedSessions = event.sessionCount
    ? `${event.sessionCount} Daily`
    : 'Sessions TBA';

  const stats = [
    {
      icon: AudienceIcon,
      label: 'Audience No.',
      value: event.attendance ? event.attendance.toLocaleString() : '—',
      ariaLabel: 'Total number of attendees',
    },
    {
      icon: CalendarIcon,
      label: 'Date',
      value: formattedDate,
      ariaLabel: 'Event date',
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: event.location || 'TBA',
      ariaLabel: 'Event location',
    },
    {
      icon: ClockIcon,
      label: 'No. Sessions',
      value: formattedSessions,
      ariaLabel: 'Number of sessions',
    },
  ];

  return (
    // Main wrapper – full-width with optional custom spacing
    <div className={`relative w-full py-4 lg:py-8 ${className}`}>
      {/* Container */}
      <div className="container">
        {/* Main ribbon background card */}
        <div
          className="
            flex flex-col sm:flex-row items-center justify-between
            py-5 px-4 sm:px-8 md:px-10
            bg-primary-500 text-neutral-50 rounded-2xl shadow-lg overflow-hidden
          "
        >
          {/* Stats definition list */}
          <dl
            className="
              grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8
              w-full
              divide-x divide-primary-400/30 divide-solid
            "
          >
            {stats.map((stat) => (
              <EventStatItem
                key={stat.label}
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
                ariaLabel={stat.ariaLabel}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default memo(EventStatsRibbon);