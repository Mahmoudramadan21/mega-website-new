'use client';

import Image from 'next/image';
import { memo } from 'react';
import type { EventVideo } from '@/types/event';
import { ArrowRightIcon } from '@/assets/icons';

interface VideoEpisodeCardProps {
  video: EventVideo;
  index: number;
}

function VideoEpisodeCard({ video, index }: VideoEpisodeCardProps) {
  const { name, description, imageSrc, imageAlt, watchUrl } = video;

  return (
    <article
      role="group"
      aria-labelledby={`video-${index}-title`}
      className="
        flex flex-col h-full overflow-hidden rounded-2xl
        bg-neutral-900 text-white
        border border-primary-500/20 shadow-xl
        transition-all duration-300 hover:border-primary-500/50
        focus-within:border-primary-500/50
      "
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={imageSrc.replace(/ /g, '%20')}
          alt={imageAlt ?? `${name} episode poster`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 gap-6 p-6 md:p-8">
        <h3
          id={`video-${index}-title`}
          className="heading-card text-primary-400"
        >
          {name}
        </h3>

        <p className="text-body text-neutral-300 whitespace-pre-line">
          {description}
        </p>

        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-fit px-8 mt-auto btn focus-ring"
          aria-label={`Watch ${name} episode on YouTube`}
        >
          Watch Episode
          <ArrowRightIcon aria-hidden="true" className="h-5 w-5 pt-0.5" />
        </a>
      </div>
    </article>
  );
}

export default memo(VideoEpisodeCard);
