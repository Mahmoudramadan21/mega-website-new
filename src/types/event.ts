import { Sponsor } from "./sponser";

/**
 * EventState
 * Defines the possible states of an event: open for registration, soon to start, or closed/completed.
 */
export type EventState = "open" | "soon" | "closed";

/**
 * EventImage
 * Represents an image associated with the event, including source, alt text, and dimensions for responsive rendering.
 */
export interface EventImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * EventMetaItem
 * Flexible metadata item for event details like date, location, or focus areas, with an icon for UI representation.
 */
export interface EventMetaItem {
  icon: string;
  label: string;
  value: string;
}

/**
 * EventCTA
 * Call-to-action button details for events, used in UI for registration or more info links.
 */
export interface EventCTA {
  label: string;
  href: string;
  ariaLabel: string;
}

/**
 * EventRegistration
 * Tracks registration progress, including count and percentage for progress bars in UI.
 */
export interface EventRegistration {
  registeredCount: number;
  progress: number; // 0 → 100
}

/**
 * EventSession
 * Details for individual sessions within an event, including speaker information.
 */
export interface EventSession {
  name: string; // e.g. "Career Tracks in Tech"
  description: string; // detailed session description
  speakerName: string;
  speakerJobTitle?: string; // e.g. "Senior Software Engineer"
  speakerCompany: string;
  time?: string; // e.g. "10:00 AM - 11:30 AM"
  date?: string; // e.g. "Sat, 15 Jan"
}

/**
 * EventReview
 * User reviews for the event, including reviewer details and rating.
 */
export interface EventReview {
  reviewerImage: EventImage; // Profile image of the reviewer
  reviewerName: string; // Name of the reviewer
  reviewText: string; // The review content
  rating: number; // Rating out of 5 (e.g., 1-5)
}

/**
 * Main Event Model
 *
 * Comprehensive model for event data, suitable for:
 * - Event cards in listings
 * - Spotlight or featured sections
 * - Detailed event pages
 * - CMS / API integrations
 *
 * Best Practices:
 * - All fields are optional where possible for flexibility, but core fields (slug, title, description) are required.
 * - Descriptions use \n\n for paragraph breaks, compatible with markdown rendering.
 * - Arrays are readonly for immutability.
 * - Extensible meta field for additional custom details.
 */
export interface EventData {
  slug: string;

  title: string;
  shortDescription?: string;
  description: string;

  state: EventState;
  link: string;

  images: readonly EventImage[];

  attendance?: number;

  /** ISO date string */
  dateTime: string;

  location?: string;

  sessionCount?: number;
  sessions?: readonly EventSession[];

  reviews?: readonly EventReview[];
  sponsors?: readonly Sponsor[];

  meta: readonly EventMetaItem[];

  /** Only for featured / upcoming events */
  cta?: EventCTA;
  registration?: EventRegistration;
}
