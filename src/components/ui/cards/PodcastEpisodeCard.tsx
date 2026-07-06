"use client";

import Image from "next/image";
import { memo } from "react";
import { PodcastEpisode } from "@/types/episode";
import { PlayIcon } from "@/assets/icons";

type PodcastEpisodeCardProps = PodcastEpisode;

/**
 * PodcastEpisodeCard Component
 *
 * A poster-style podcast episode card used in the MEGA Podcasts section.
 *
 * Key Features & Optimizations:
 * - Displays the episode cover image with a season/episode badge overlay
 * - "Watch Now" button links out to the full episode video
 * - Encodes spaces and ampersands so filenames with special characters resolve
 * - Lazy-loaded, memoized, and sized for horizontal snap carousels
 * - Semantic HTML with proper ARIA attributes for accessibility
 */
const PodcastEpisodeCard = ({
  season,
  episode,
  title,
  guest,
  imageSrc,
  imageAlt,
  link,
}: PodcastEpisodeCardProps) => {
  const safeSrc = imageSrc.replace(/ /g, "%20").replace(/&/g, "%26");
  const titleId = `podcast-s${season}e${episode}-title`;

  return (
    <article
      role="group"
      aria-labelledby={titleId}
      className="
        group flex flex-col shrink-0
        w-72 md:w-80 overflow-hidden rounded-2xl
        bg-neutral-900 text-white
        border border-primary-500/20 shadow-xl
        snap-center lg:snap-start
        transition-all duration-300 hover:border-primary-500/50
        focus-within:border-primary-500/50
      "
    >
      {/* Episode cover with badge overlay */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={safeSrc}
          alt={imageAlt ?? `${title} episode poster`}
          fill
          sizes="(max-width: 768px) 80vw, 320px"
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient for badge legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent"
        />
        {/* Season / Episode badge */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-primary-500 text-neutral-50">
          S{season} • E{episode}
        </span>
      </div>

      {/* Text content & CTA */}
      <div className="flex flex-col flex-1 gap-3 p-5">
        <h3 id={titleId} className="heading-card text-neutral-50 line-clamp-2">
          {title}
        </h3>

        {guest && (
          <p className="text-sm text-neutral-400 line-clamp-1">{guest}</p>
        )}

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 w-fit px-6 mt-auto text-sm md:text-base btn focus-ring"
          aria-label={`Watch Season ${season} Episode ${episode}: ${title}`}
        >
          <PlayIcon aria-hidden="true" className="h-5 w-5 pt-0.5 md:pt-1" />
          Watch Now
        </a>
      </div>
    </article>
  );
};

export default memo(PodcastEpisodeCard);
