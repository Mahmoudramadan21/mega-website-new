'use client';

import Image from 'next/image';
import { memo } from 'react';
import { StarOutlineIcon } from '@/assets/icons';

interface Review {
  reviewerName: string;
  reviewerImage: { src: string; alt?: string };
  rating: number;
  reviewText: string;
}

interface ReviewCardProps {
  review: Review;
  index: number;
  className?: string;
}

/**
 * ReviewCard Component
 *
 * Card component displaying a single user/attendee review.
 * Features circular avatar, reviewer name, star rating display,
 * and quoted review text.
 *
 * Key Features & Optimizations:
 * - Horizontal snap point for carousel usage (snap-center)
 * - Responsive sizing and padding (mobile → desktop)
 * - Hover/focus visual feedback with smooth transition
 * - Accessible: named heading, ARIA rating label, semantic <blockquote>
 * - Lazy-loaded avatar image with proper alt text
 * - Memoized to prevent unnecessary re-renders
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions

 */
const ReviewCard = memo(function ReviewCard({
  review,
  index,
  className = '',
}: ReviewCardProps) {
  const { reviewerName, reviewerImage, rating, reviewText } = review;

  return (
    // Main review card article – acts as carousel item with shadow and rounded corners
    <article
      role="group"
      tabIndex={0}
      aria-labelledby={`reviewer-${index}-name`}
      className={`
        snap-center shrink-0 w-full md:w-6/12 lg:w-120
        bg-neutral-200 rounded-2xl shadow-lg
        transition-all duration-300 focus-ring
        ${className}
      `}
    >
      {/* Inner content wrapper with responsive padding */}
      <div className="p-6 md:p-8">
        {/* Flex container for avatar + text content */}
        <div className="flex items-start gap-4 md:gap-5">
          {/* Avatar container – fixed size, circular */}
          <div className="shrink-0">
            <div className="
              w-14 h-14 md:w-16 md:h-16
              rounded-full overflow-hidden
              border-2 border-primary-200/60 shadow-sm
            ">
              <Image
                src={reviewerImage.src}
                alt={`${reviewerName}'s avatar`}
                width={64}
                height={64}
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Main content area – name, rating, and review text */}
          <div className="flex-1 min-w-0 flex flex-col gap-3">
            {/* Header row: name + rating stars */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Reviewer name – used as accessible heading */}
              <h4
                id={`reviewer-${index}-name`}
                className="font-cairo text-lg md:text-xl font-semibold text-neutral-800"
              >
                {reviewerName}
              </h4>

              {/* Star rating – visual + accessible description */}
              {/* <div
                className="flex gap-0.5"
                role="img"
                aria-label={`Rated ${rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <StarOutlineIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < rating 
                        ? 'text-yellow-500 fill-yellow-500' 
                        : 'text-neutral-400'
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div> */}
            </div>

            {/* Review text presented as a quote */}
            <blockquote className="
              font-cairo text-neutral-600
              leading-relaxed text-[15px] md:text-base
            ">
              “{reviewText}”
            </blockquote>
          </div>
        </div>
      </div>
    </article>
  );
});

export default memo(ReviewCard);