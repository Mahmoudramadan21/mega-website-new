'use client';

import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '@/data/links';

/**
 * ApplicationClosedMessage Component
 *
 * Full-width, centered message shown when event registration/application is closed.
 * Communicates closure in a positive, encouraging way while directing users to follow
 * social media channels for future opportunities.
 *
 * Key Features & Optimizations:
 * - Full viewport height centering with responsive min-height
 * - Prominent red "Form Closed" banner for instant clarity
 * - Emotional illustration with proper sizing and priority loading
 * - Semantic structure: headings, ARIA labels, role="banner"
 * - Accessible social links with descriptive aria-labels
 * - Subtle hover animations and scale feedback on social icons
 * - Memoized component (no props → always stable)
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions

 */
const ApplicationClosedMessage = memo(() => {
  return (
    // Main full-height section – serves as anchor target and ARIA landmark
    <section
      id="application-closed"
      aria-labelledby="closed-heading"
      className="
        flex items-center justify-center
        min-h-[70vh] md:min-h-screen
        py-12 md:py-16 lg:py-20
        bg-linear-to-b from-neutral-50 via-white to-neutral-100
      "
    >
      {/* Centered content wrapper – consistent container usage */}
      <div className="container">
        <div
          className="
            max-w-4xl mx-auto
            bg-white
            rounded-2xl shadow-2xl
            overflow-hidden
            border-t-4 border-primary-500
          "
        >
          {/* Status banner – high-visibility closed indicator */}
          <div
            className="
              bg-primary-500
              text-neutral-50
              py-4 px-6 md:py-5 md:px-8
              font-bold text-xl md:text-2xl
              tracking-tight
              text-center
            "
            role="banner"
          >
            Form Closed
          </div>

          {/* Main message content area */}
          <div className="p-6 md:p-10 lg:p-12 space-y-8 md:space-y-10 text-center">
            {/* Emotional illustration – above-the-fold priority image */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <Image
                  src="/images/closed-application.svg"
                  alt="Illustration of a closed application form with an hourglass and 'sorry we're closed' sign, representing the end of submissions"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
                  priority
                  loading="eager"
                />
              </div>
            </div>

            {/* Primary heading – project-wide heading style */}
            <h1
              id="closed-heading"
              className="heading-primary text-neutral-800"
            >
              The application has officially ended.
            </h1>

            {/* Encouraging secondary message */}
            <p className="text-body text-neutral-600 max-w-2xl mx-auto">
              But this is just the beginning — more{' '}
              <span className="font-semibold text-primary-500">MEGA experiences</span> are coming
              soon!
            </p>

            {/* Social follow prompt and links */}
            <div className="space-y-4 md:space-y-6 pt-4">
              {/* Section title */}
              <h2 className="subsection-title text-neutral-700">
                Follow Us Now
              </h2>

              {/* Call-to-action subtitle */}
              <p className="text-body text-neutral-500">
                So you don&apos;t miss the next opportunity
              </p>

              {/* Social media icons – accessible group with hover effects */}
              <div
                className="flex flex-wrap justify-center gap-4 md:gap-6"
                role="group"
                aria-label="Social media links to follow MEGA Team MU"
              >
                {socialLinks.map((platform) => (
                  <Link
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-3 md:p-4
                      rounded-full
                      bg-neutral-100
                      hover:bg-primary-100
                      transition-all duration-300
                      hover:scale-105 active:scale-95
                      focus-ring
                    "
                    aria-label={`Follow MEGA Team MU on ${platform.label}`}
                  >
                    <platform.Icon
                      className="w-6 h-6 md:w-8 md:h-8 text-neutral-700"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ApplicationClosedMessage.displayName = 'ApplicationClosedMessage';

export default memo(ApplicationClosedMessage);