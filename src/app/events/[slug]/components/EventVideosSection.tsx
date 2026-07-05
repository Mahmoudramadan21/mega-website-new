'use client';

import { memo } from 'react';
import { EventData } from '@/types/event';
import { VideoEpisodeCard } from '@/components/ui';

interface EventVideosSectionProps {
  event: EventData;
  className?: string;
}

function EventVideosSection({ event, className = '' }: EventVideosSectionProps) {
  if (!event.videos?.length) {
    return (
      <div className="py-12 text-center text-neutral-500" role="status" aria-live="polite">
        No videos available for this event.
      </div>
    );
  }

  return (
    <section className={className} aria-labelledby="videos-heading">
      <div className="container">
        <div className="mb-10 md:mb-12 text-center">
          <h2 id="videos-heading" className="heading-primary text-primary-500">
            {event.title} Episodes
          </h2>
          <p className="mt-3 text-body">
            {event.videosSubtitle ??
              'Watch each episode and explore ideas from influential books'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {event.videos.map((video, idx) => (
            <VideoEpisodeCard key={video.name} video={video} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(EventVideosSection);
