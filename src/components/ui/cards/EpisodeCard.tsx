"use client";

import Link from "next/link";
import { SingleImageEpisode, BackgroundDualEpisode } from "@/types/episode";
import { BackgroundImage, PodcastRoundedImage } from "@/components/ui";
import { PlayIcon } from "@/assets/icons";
import { memo } from "react";

type EpisodeCardProps = SingleImageEpisode | BackgroundDualEpisode;

/**
 * EpisodeCard Component
 *
 * A flexible, responsive podcast episode card supporting three visual variants:
 * - 'image-right': Circular podcast image on the right (default)
 * - 'image-left': Circular podcast image on the left
 * - 'background-dual': Two decorative background images positioned at bottom corners
 *
 * Key Features & Optimizations:
 * - Conditional rendering based on variant for clean, maintainable code
 * - Lazy-loaded images handled by dedicated child components
 * - Semantic HTML with proper ARIA attributes for accessibility
 * - Full-card focus support with visible focus-ring
 * - Responsive layout with carousel snap behavior
 * - Smooth hover/focus transitions and interactive button effects
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions

 */

const EpisodeCard = (props: EpisodeCardProps) => {
  const { title, description, date, episode, variant = "image-right" } = props;

  const isImageLeft = variant === "image-left";
  const isImageRight = variant === "image-right";
  const isBackground = "images" in props;

  return (
    // Main card article - focusable and grouped for accessibility with carousel snap
    <article
      role="group"
      aria-labelledby={`episode-${episode}-title`}
      tabIndex={0}
      className={`
        relative
        flex flex-col md:flex-row items-center ${isImageRight ? "flex-col-reverse md:flex-col" : ""}
        gap-6 py-6 min-w-fit md:min-w-160 min-h-73 overflow-hidden select-none
        bg-[linear-gradient(99.4deg,#4C4C4C_7.85%,#0D0D0D_94.38%)]
        card-container snap-center lg:snap-start text-center md:text-left focus-ring
      `}
    >
      {/* Background Dual Images (for background-dual variant) */}
      {isBackground && (
        <>
          {/* Decorative background image - bottom left corner */}
          <BackgroundImage imageSrc={props.images.left} position="left" />
          {/* Decorative background image - bottom right corner */}
          <BackgroundImage imageSrc={props.images.right} position="right" />
        </>
      )}

      {/* Circular Podcast Image - Left Position */}
      {isImageLeft && "imageSrc" in props && (
        // Rounded podcast cover on the left side
        <PodcastRoundedImage imageSrc={props.imageSrc} />
      )}

      {/* Main Text Content & CTA */}
      {/* Central content area with higher z-index for overlay visibility */}
      <div
        className={`relative z-10 flex flex-col items-center md:items-start gap-3 mx-auto ${isBackground ? "max-w-80" : ""}`}
      >
        {/* Episode meta information (number and date) */}
        <div className="font-semibold text-sm text-primary-500">
          <span>Episode {episode} • </span>
          <time dateTime={date} aria-label={`Episode date: ${date}`}>
            {date}
          </time>
        </div>

        {/* Episode title with unique ID for accessibility reference */}
        <h3
          id={`episode-${episode}-title`}
          className="heading-card text-neutral-50"
        >
          {title}
        </h3>

        {/* Truncated episode description with relaxed line height */}
        <p className="text-body text-neutral-300 line-clamp-3">{description}</p>

        {/* Watch now CTA button with icon and hover expansion */}
        <Link
          href="#" // Replace "#" with meaningful path in future
          className="flex items-center gap-1 px-6 w-fit text-sm md:text-base btn focus-ring hover:px-12 hover:bg-white/20 transition-all duration-300"
          aria-label={`Read more about Episode ${episode}: ${title}`}
        >
          <PlayIcon aria-hidden="true" className="h-5 w-5 pt-0.5 md:pt-1" />
          Watch Now
        </Link>
      </div>

      {/* Circular Podcast Image - Right Position (default) */}
      {isImageRight && "imageSrc" in props && (
        // Rounded podcast cover on the right side (default position)
        <PodcastRoundedImage imageSrc={props.imageSrc} />
      )}
    </article>
  );
};

export default memo(EpisodeCard);
