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
  slug: "magicoders",

  title: "MagiCoders",

  description:
    "Learn how to build a strong CV, understand how companies choose candidates, and gain the skills you need to stand out. MEGA connects you with real companies, internships, and career paths—helping bridge the gap between university and the job market. Whether you're a student or a fresh graduate, this event is for you.",

  state: "open",

  link: "/events/upcoming",

  images: [
    {
      src: "/images/next-event.png",
      alt: "MagiCoders event poster featuring speakers, workshops, and participants at Mansoura University",
      width: 630,
      height: 600,
    },
  ],

  dateTime: "2027-01-18",

  meta: [
    { icon: "calendar", label: "Date", value: "Saturday, January 18, 2026" },
    { icon: "clock", label: "Time", value: "9:00 AM – 6:00 PM" },
    { icon: "map-pin", label: "Location", value: "ITI, Mansoura University" },
    { icon: "record", label: "Sessions", value: "6 Sessions" },
  ],

  cta: {
    label: "Learn More",
    href: "/events/upcoming",
    ariaLabel: "Learn more about MagiCoders event",
  },

  registration: {
    registeredCount: 150,
    progress: 75,
  },
} as const;
