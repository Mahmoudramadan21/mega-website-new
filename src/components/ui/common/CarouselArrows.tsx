import { ArrowRightIcon } from '@/assets/icons';
import { memo } from 'react';

interface CarouselArrowsProps {
  /** Function to scroll the carousel left */
  onLeftClick: () => void;
  /** Function to scroll the carousel right */
  onRightClick: () => void;
  /** ID of the carousel container for accessibility */
  controlsId: string;
  /** Optional size for the arrow buttons (default: 48px) */
  size?: number;
  /** Optional Tailwind classes to override default styling */
  className?: string;
  /** Optional: show/hide left arrow */
  showLeft?: boolean;
  /** Optional: show/hide right arrow */
  showRight?: boolean;
}

/**
 * CarouselArrows Component
 *
 * Left & right navigation buttons for horizontal carousels.
 * Fully accessible with optional visibility control for each arrow.
 *
 * Key Features & Optimizations:
 * - Absolute positioning centered vertically
 * - Circular buttons with subtle shadow and hover effect
 * - Accessible: aria-labels and aria-controls
 * - Customizable size via prop
 * - Conditional rendering of each arrow
 * - Smooth transition on hover and focus
 * - Layout → Box Model → Typography → Visual → Transitions
 */
function CarouselArrows({
  onLeftClick,
  onRightClick,
  controlsId,
  size = 48,
  className = '',
  showLeft = true,
  showRight = true,
}: CarouselArrowsProps) {
  const baseClasses = `
    absolute top-1/2 -translate-y-1/2
    z-10
    rounded-full bg-white/90 shadow-md
    flex items-center justify-center
    text-primary-500 hover:bg-white hover:text-primary-600
    transition focus-ring
  `;

  return (
    <>
      {/* Left arrow – hidden when showLeft is false */}
      {showLeft && (
        <button
          onClick={onLeftClick}
          aria-label="Scroll left"
          aria-controls={controlsId}
          className={`${baseClasses} left-3 ${className}`}
          style={{ width: size, height: size }}
        >
          <ArrowRightIcon className="rotate-180 w-7 h-7" />
        </button>
      )}

      {/* Right arrow – hidden when showRight is false */}
      {showRight && (
        <button
          onClick={onRightClick}
          aria-label="Scroll right"
          aria-controls={controlsId}
          className={`${baseClasses} right-3 ${className}`}
          style={{ width: size, height: size }}
        >
          <ArrowRightIcon className="w-7 h-7" />
        </button>
      )}
    </>
  );
}

export default memo(CarouselArrows);