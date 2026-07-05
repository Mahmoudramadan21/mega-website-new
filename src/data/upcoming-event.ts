import { EventData } from '@/types/event';

/**
 * upcomingEvent
 *
 * Data for the currently featured / spotlight upcoming event.
 *
 * Main Purpose:
 *   • Attract attention and drive registrations for the most important upcoming event
 *   • Provide quick, engaging overview (countdown, CTA, progress bar)
 *   • Serve as primary call-to-action on homepage / events section
 *
 * Key Characteristics:
 *   • Conforms to EventData type for consistency
 *   • Contains promotional extras (registration progress, badge)
 *   • Ready for dynamic replacement via API/CMS in the future
 */
export const upcomingEvent: EventData = {
  slug: "reddev",

  title: "RedDev",

  description:
    "A 4-week startup and product-building marathon where students, developers, and innovators transform ideas into real products. Participants progress through idea validation, business planning, product design, and MVP development while receiving mentorship from industry experts, attending specialized sessions, and competing for prizes. The journey culminates in an offline Grand Final where the top teams pitch their solutions to a panel of judges.",

  state: "open",

  link: "/events/upcoming",

  images: [
    {
      src: "/images/RedDev.png",
      alt: "RedDev event poster featuring speakers, workshops, and participants at Mansoura University",
      width: 630,
      height: 600,
    },
  ],

  /** ISO date used for countdown & SEO — display range is in meta */
  dateTime: "2026-07-01T09:00:00",

  meta: [
    { icon: "calendar", label: "Date", value: "2026-07 - 2026-08" },
    { icon: "map-pin", label: "Location", value: "Mansoura University & Online" },
  ],

  cta: {
    label: "Learn More",
    href: "/events/upcoming",
    ariaLabel: "Learn more about RedDev event",
  },
} as const;
