import {
  HeroSection,
  TotalEventsSection,
  UpcomingEventSection,
  PodcastsSection,
  CirclesSection,
  MotivationSection,
  SponsorsMarquee,
} from "./components";

import { sponsors } from "@/data/sponser";

/**
 * Home Page
 *
 * The main landing page of the MEGA website. Renders all major sections in a logical,
 * user-friendly order to guide visitors from introduction → upcoming opportunities →
 * community circles → past achievements → podcasts → motivation → sponsors.
 *
 * Section Order Rationale:
 * 1. HeroSection           – Captures attention with bold headline and primary CTA
 * 2. UpcomingEventSection  – Highlights the next big event (high urgency)
 * 3. CirclesSection        – Showcases active technical circles for skill-building
 * 4. TotalEventsSection    – Demonstrates experience and past success
 * 5. PodcastsSection       – Provides educational/audio content
 * 6. MotivationSection     – Inspirational quotes to engage emotionally
 * 7. SponsorsMarquee       – Acknowledges partners and adds credibility
 *
 * All sections are independent components for better maintainability, performance,
 * and reusability.
 */
export default function Home() {
  return (
    <>
      {/* Hero section with main headline, description, and primary call-to-action */}
      <HeroSection />

      {/* Upcoming event highlight – drives immediate engagement and registrations */}
      <UpcomingEventSection />

      {/* Technical circles showcase – core community skill-building programs */}
      <CirclesSection />

      {/* Past events archive – builds trust through demonstrated track record */}
      <TotalEventsSection />

      {/* Podcast episodes section – educational and inspirational audio content */}
      <PodcastsSection />

      {/* Motivational quotes carousel – emotional connection and inspiration */}
      <MotivationSection />

      {/* Sponsors marquee – recognition of partners and supporters */}
      <SponsorsMarquee sponsors={sponsors} />
    </>
  );
}
