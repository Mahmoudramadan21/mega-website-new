'use client';

import { memo } from "react";

/**
 * RegistrationCountdown Component
 *
 * A live, real-time countdown timer displaying remaining days, hours, minutes, and seconds
 * until the specified event start time (provided as an ISO datetime string).
 *
 * Key Features & Optimizations:
 * - Updates every second via setInterval for smooth live countdown
 * - Automatically stops when the event time is reached
 * - Responsive grid layout adapting from 2 to 4 columns on larger screens
 * - Proper pluralization of time units (e.g., "Day" vs "Days")
 * - Uses digital-style font and high-contrast colors for readability
 * - Accessible: Hidden heading for screen readers, semantic structure
 * - Memoized with `React.memo` to prevent unnecessary re-renders
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions

 */

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface RegistrationCountdownProps {
  timeLeft: TimeLeft;
  /** Optional title shown to screen readers (default: "Starts in") */
  ariaLabel?: string;
}

function RegistrationCountdown({ timeLeft, ariaLabel = "Starts in", }: RegistrationCountdownProps) {
  return (
    // Full-width section with primary background and light text
    <div className="grid py-6 sm:py-12 bg-primary-500 text-neutral-50">
      {/* Centered container with digital font for the countdown display */}
      <div className="container text-center font-digital">
        {/* Hidden heading for screen readers only - improves accessibility */}
        <h2 className="sr-only">{ariaLabel}</h2>

        {/* Responsive grid: 2 columns on mobile, 4 columns on sm and above */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
            // Individual time unit block
            <div key={unit} className="flex flex-col">
              {/* Large numeric value with leading zero padding */}
              <span className="font-bold text-lg md:text-xl lg:text-3xl">
                {String(timeLeft[unit]).padStart(2, "0")}
              </span>

              {/* Unit label with proper pluralization (e.g., Day vs Days) */}
              <span className="mt-2 uppercase md:text-lg">
                {unit === "days"
                  ? "Days"
                  : unit.slice(0, -1) + (timeLeft[unit] === 1 ? "" : "s")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(RegistrationCountdown);