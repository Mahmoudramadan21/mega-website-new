'use client';

import { memo } from 'react';
import type { EventSession } from '@/types/event';

interface SessionCardProps {
  session: EventSession;
  index: number;
  className?: string;
}

/**
 * SessionCard Component
 *
 * Card component for displaying a single event session in dark theme.
 * Features prominent title, truncated description, date/time info,
 * speaker details block, and decorative red corner accents.
 *
 * Key Features & Optimizations:
 * - Horizontal snap behavior suitable for carousels/scrollers
 * - Responsive width, padding and typography scaling
 * - Hover border glow + focus visible ring
 * - Accessible: named heading, semantic <time> with machine-readable datetime
 * - Conditional rendering for optional date/time and speaker sections
 * - Decorative corner borders using absolute positioned elements
 * - Memoized to prevent unnecessary re-renders
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions

 */
const SessionCard = memo(function SessionCard({
  session,
  index,
  className = '',
}: SessionCardProps) {
  const {
    name,
    description,
    date,
    time,
    speakerName,
    speakerJobTitle,
    speakerCompany,
  } = session;

  const hasSpeaker = speakerName || speakerJobTitle || speakerCompany;

  return (
    // Main session card article – dark background with subtle border glow on hover
    <article
      role="group"
      tabIndex={0}
      aria-labelledby={`session-${index}-title`}
      className={`
        snap-center shrink-0 
        w-full md:w-5/12 lg:w-120 xl:w-lg
        bg-neutral-900 text-white 
        rounded-2xl
        shadow-xl border border-primary-500/20
        transition-all duration-300 
        hover:border-primary-500/50
        focus-ring
        ${className}
      `}
    >
      {/* Decorative red corner accents – non-interactive absolute elements */}
      <div className="relative pointer-events-none">
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary-500 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary-500 rounded-tr-2xl" />
      </div>

      {/* Main content wrapper with z-index to stay above decorations */}
      <div className="p-6 md:p-7 lg:p-8 relative z-10">
        {/* Session title – prominent colored heading */}
        <h3
          id={`session-${index}-title`}
          className="heading-card text-primary-400 mb-3.5"
        >
          {name || 'Session Title'}
        </h3>

        {/* Session description – limited to 4 lines with ellipsis */}
        <p className="text-body text-neutral-300 mb-6 line-clamp-4">
          {description || 'No description provided for this session.'}
        </p>

        {/* Date and time display – conditional with semantic <time> */}
        {(date || time) && (
          <p className="text-sm md:text-base text-neutral-400 mb-6 font-medium">
            <time
              dateTime={`${date || ''}${time ? `T${time}` : ''}`.trim() || undefined}
              aria-label={`Session scheduled for ${date || 'unknown date'} at ${time || 'unknown time'}`}
            >
              {date && <span>{date}</span>}
              {date && time && <span className="mx-1.5">•</span>}
              {time && <span>{time}</span>}
            </time>
          </p>
        )}

        {/* Speaker information block – only shown when data exists */}
        {hasSpeaker && (
          <div className="
            bg-neutral-800/80 rounded-xl p-5 
            border border-neutral-700/50
          ">
            {/* Speaker name – bold heading */}
            <h4 className="font-semibold text-lg text-white mb-1.5">
              {speakerName || 'Speaker'}
            </h4>
            
            {/* Job title and company – secondary info */}
            <p className="text-primary-300 font-medium text-sm md:text-base">
              {speakerJobTitle && <span>{speakerJobTitle}</span>}
              {speakerJobTitle && speakerCompany && <span className="mx-1.5">•</span>}
              {speakerCompany && <span>@{speakerCompany}</span>}
              {!speakerJobTitle && !speakerCompany && <span>Expert / Guest Speaker</span>}
            </p>
          </div>
        )}
      </div>
    </article>
  );
});

export default memo(SessionCard);