import { ComponentType } from 'react';

/**
 * MotivationQuote
 *
 * Structure for a single motivational quote card.
 * Includes:
 * - id: Unique identifier.
 * - text: The inspirational quote content (for display and SEO).
 * - author: Name of the quote author (used in <cite> for semantic markup).
 * - icon: SVG icon component for visual distinction and thematic reinforcement.
 * - gradient: Tailwind class for unique background gradient per quote.
 * - authorColor: Tailwind text color class to match gradient theme.
 */
export interface MotivationQuote {
  id: number;
  text: string;
  author: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
  authorColor: string;
}