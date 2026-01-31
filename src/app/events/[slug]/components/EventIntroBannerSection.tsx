'use client';

import Image from 'next/image';
import { memo, useEffect, useState, useCallback } from 'react';
import { EventData } from '@/types/event';

/**
 * EventIntroBannerSection
 *
 * Full-width hero banner with auto-rotating background images,
 * fade transitions, clickable navigation dots, and centered overlay text.
 *
 * Key Features & Optimizations:
 * - Smooth cross-fade between multiple event images
 * - Auto-advance every 5 seconds (configurable)
 * - Pause on hover/focus for better UX
 * - Fully accessible carousel dots with keyboard support
 * - ARIA attributes + polite screen reader handling
 * - Responsive height and image sizing
 * - Memoized + minimal re-renders
 * - Layout → Box Model → Typography → Visual → Transitions
 */
interface EventIntroBannerSectionProps {
  event: EventData;
  autoRotateIntervalMs?: number; // Default: 5000ms
  className?: string;
}

function EventIntroBannerSection({
  event,
  autoRotateIntervalMs = 5000,
  className = '',
}: EventIntroBannerSectionProps) {

  const images = event.images.length > 0 ? event.images : [{
    src: '/images/placeholder-event-hero.jpg',
    alt: `${event.title} event group photo`,
    width: 1200,
    height: 600,
  }];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoRotateIntervalMs);

    return () => clearInterval(interval);
  }, [images.length, isPaused, autoRotateIntervalMs]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    // Main hero banner section – full-width with responsive height
    <section
      aria-labelledby="event-hero-title"
      className={`relative w-full h-[60vh] min-h-125 md:h-[70vh] overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Background image layers – absolute positioned with fade transition */}
      {images.map((img, index) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== currentIndex}
        >
          <div className="h-full">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-center brightness-[0.85]"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 90vw"
              quality={85}
            />
          </div>
        </div>
      ))}

      {/* Overlay gradient + centered content */}
      <div className="
        absolute inset-0
        flex items-end justify-center
        pb-12 md:pb-20
        bg-linear-to-t from-black/65 via-black/40 to-transparent/30
        pointer-events-none
      ">
        <div className="text-center pointer-events-auto">
          {/* Event title */}
          <h1
            id="event-hero-title"
            className="
              heading-primary
              mb-4 md:mb-6 px-2
              text-neutral-50
          ">
            {event.title}
          </h1>

          {/* Short description / slogan */}
          <p className="text-body-lg text-neutral-100 max-w-lg mb-12 px-2">
            {event.shortDescription || 'Your First Step Into the Real World.'}
          </p>

          {/* Navigation dots – only shown when multiple images */}
          {images.length > 1 && (
            <div
              role="tablist"
              aria-label="Event image carousel navigation"
              className="flex justify-center gap-3 md:gap-4"
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  tabIndex={0}
                  aria-label={`View image ${index + 1} of ${images.length}`}
                  aria-selected={index === currentIndex}
                  aria-controls={`image-slide-${index}`}
                  onClick={() => goToImage(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      goToImage(index);
                    }
                  }}
                  className={`
                    w-2 h-2 rounded-full
                    transition-all duration-300
                    ${index === currentIndex 
                      ? 'bg-primary-500 scale-125 shadow-md'
                      : 'bg-white/60 hover:bg-white/90 hover:scale-110'}
                    focus-ring
                  `}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default memo(EventIntroBannerSection);