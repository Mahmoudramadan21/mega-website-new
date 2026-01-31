"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { circles } from '@/data/circle';

export default function CirclesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentSlug = pathname.split('/circles/')[1] || '';

  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Auto-scroll the active circle link into view on page load/change
  useEffect(() => {
    const activeLink = linkRefs.current[currentSlug];
    if (activeLink) {
      activeLink.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [currentSlug]);

  return (
    <>
      {/* Circles navigation section with top/bottom padding */}
      <section aria-labelledby="circles-title" className="pt-6 lg:pt-12 pb-6">
        {/* Centered content wrapper */}
        <div className="container">
          {/* Header with main title and subtitle */}
          <header className="text-center mb-12 lg:mb-16">
            <h1 id="circles-title" className="section-title">Our Circles</h1>
            <p className="section-subtitle">
              Explore technical and non-technical tracks to enhance your skills
            </p>
          </header>

          {/* Horizontal scrolling navigation carousel for circles */}
          <div
            className="carousel-x scrollbar-hidden focus-ring"
            role="region"
            aria-label="MEGA Circles carousel"
          >
            {circles.map((circle) => {
              const isActive = circle.slug === currentSlug;
              return (
                // Individual circle navigation link with hover scale and active state
                <Link
                  key={circle.slug}
                  href={`/circles/${circle.slug}`}
                  ref={(el) => {
                    linkRefs.current[circle.slug] = el;
                  }}
                  className={`group flex flex-col items-center shrink-0 snap-center w-full md:w-auto p-4 rounded-3xl transition-all duration-500 hover:scale-110 ${isActive ? "bg-primary-500 text-neutral-50" : "bg-neutral-50 text-neutral-700"}`}
                  aria-label={`View details about ${circle.title} circle`}
                >
                  {/* Circle illustration container with fixed aspect ratio */}
                  <div className="relative w-full md:w-60 h-60 aspect-3/4">
                    <Image
                      src={circle.imageSrc}
                      alt={`${circle.title} circle illustration`}
                      fill
                      className="rounded-3xl"
                      loading="lazy"
                    />
                  </div>
                  {/* Circle title with centered alignment */}
                  <h2 className="z-10 mt-6 text-center font-bold text-lg lg:text-xl">
                    {circle.title}
                  </h2>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main content area for individual circle pages */}
      <div className="container">
        {children}
      </div>
    </>
  );
}