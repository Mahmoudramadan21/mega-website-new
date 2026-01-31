'use client';

import Link from 'next/link';
import Image from 'next/image';
import { memo, useEffect, useState } from 'react';
import { ArrowRightIcon } from "@/assets/icons";

const HERO_IMAGES = [
  "/images/image-1.jpg",
  "/images/image-2.jpg",
  "/images/image-3.jpg",
  "/images/image-4.jpg",
] as const;

const IMAGE_CHANGE_INTERVAL = 4000; // ms – slightly longer for better UX

/**
 * Hero Section Component
 * Displays an introduction to MEGA Team MU with a rotating background image slideshow
 * on the right and textual content + CTA on the left.
 *
 * Optimized for:
 * - Performance: lazy loading non-visible images, proper priority, minimal re-renders
 * - SEO: semantic HTML, meaningful alt text
 * - Accessibility: proper heading hierarchy, focusable button, ARIA labels where needed
 * - Best Practices: clear comments, constants, descriptive alt texts, responsive design
 */
function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, IMAGE_CHANGE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    // Main hero section with vertical padding and anchor target
    <section aria-labelledby="hero-heading" id="about">
      {/* Centered content container with Cairo font applied */}
      <div className="container font-cairo">
        {/* Responsive two-column layout (stacked on mobile, side-by-side on lg+) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Text Content */}
          {/* Text column with centered alignment on mobile and start on larger screens */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 max-w-full lg:max-w-[48%]">
            {/* Primary hero heading with accessible ID */}
            <h1 id="hero-heading" className="section-title">
              About <span className="text-primary-500">MEGA Team MU</span>
            </h1>

            {/* Introductory paragraphs with responsive text sizing */}
            <p className="text-body text-[#4E4E4E]">
              MEGA is a volunteer team passionate about Computer Science and
              Information Technology, founded in{" "}
              <span className="text-primary-500">2018</span> at the Faculty of
              Computers and Information, Mansoura University.
            </p>

            <p className="text-base lg:text-lg xl:text-20 leading-relaxed text-[#4E4E4E]">
              We empower tech enthusiasts by providing high-quality resources,
              tools, and mentorship, while working on real-world projects and
              organizing impactful on-campus events to build strong portfolios
              and practical skills.
            </p>

            <p className="text-base lg:text-lg xl:text-20 leading-relaxed text-[#4E4E4E]">
              Our vision is to create a vibrant tech community across Egypt,
              preparing members for success in the digital world through
              technical excellence and personal growth.
            </p>

            {/* Hashtags – treated as links for discoverability */}
            {/* Hashtag links with hover underline effect */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-primary-500">
              <Link href="#" className="hover:underline focus-ring">
                #MEGA_Team
              </Link>
              <Link href="#" className="hover:underline focus-ring">
                #Shaping_Futures
              </Link>
              <Link href="#" className="hover:underline focus-ring">
                #Empowering_TechMinds
              </Link>
            </div>

            {/* Call to Action Button */}
            {/* Primary CTA button with icon and centered text */}
            <Link
              href="/#events"
              className="flex items-center justify-center gap-2 px-12 btn focus-ring"
              aria-label="Learn more about MEGA Team MU"
            >
              Know More
              <ArrowRightIcon aria-hidden="true" className="h-5 w-5 pt-1" />
            </Link>
          </div>

          {/* Right: Image Slideshow */}
          {/* Image column with responsive aspect ratio and prominent shadow */}
          <div className="hero-image-wrapper relative w-full lg:w-[48%] aspect-4/3 lg:aspect-auto lg:h-137.5 overflow-hidden shadow-2xl">
            {/* Decorative SVG overlay – preserved for design but made non-interactive */}
            {/* Full-cover decorative SVG grid overlay (non-interactive) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none scale-[1.01] z-10"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <g stroke="#F4F4EA" strokeWidth="0.7">
                <line x1="25" y1="25" x2="25" y2="0" />
                <line x1="25" y1="25" x2="25" y2="100" />
                <line x1="75" y1="75" x2="75" y2="0" />
                <line x1="75" y1="75" x2="75" y2="100" />
              </g>
              <g stroke="#F4F4EA" strokeWidth="0.4">
                <line x1="50" y1="50" x2="50" y2="0" />
                <line x1="50" y1="50" x2="50" y2="75" />
              </g>
              <g stroke="#F4F4EA" strokeWidth="0.65">
                <line x1="0" y1="75" x2="50" y2="55" />
                <line x1="100" y1="75" x2="50" y2="55" />
                <line x1="0" y1="50" x2="50" y2="30" />
                <line x1="100" y1="50" x2="50" y2="30" />
                <line x1="75" y1="90" x2="50" y2="75" />
                <line x1="25" y1="90" x2="50" y2="75" />
              </g>
            </svg>

            {/* Image Slideshow with fade transition */}
            {/* Slideshow container handling fade transitions between images */}
            <div className="relative w-full h-full">
              {HERO_IMAGES.map((src, index) => (
                // Individual hero image with conditional opacity and optimized loading
                <Image
                  key={src}
                  src={src}
                  alt="MEGA Team MU members collaborating on tech projects and participating in workshops and events"
                  fill
                  className={`object-cover transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0} // Only the first image loads immediately
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(HeroSection);