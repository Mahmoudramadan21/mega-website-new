/**
 * CircleType
 *
 * Defines the category of a circle.
 * - 'technical': Technical-oriented tracks focusing on engineering and development skills.
 * - 'non-technical': Non-technical tracks emphasizing soft skills, management, and creative roles.
 */
export type CircleType = 'technical' | 'non-technical';

/**
 * CircleData
 *
 * Structure for a single circle entry.
 * Includes:
 * - slug: Unique slug for the circle.
 * - title: Display name of the circle.
 * - description: Concise overview to engage users and improve SEO through keyword-rich content.
 * - imageSrc: Path to the illustrative image (optimized for lazy loading).
 * - type: Category to enable filtering and grouping.
 * - link: Internal URL for the circle detail page.
 * - roadmapLink: Optional external URL to the circle's learning roadmap (technical circles).
 */
export interface CircleData {
  slug: string;
  title: string;
  shortDescription: string; 
  longDescription: string;
  imageSrc: string;
  type: CircleType;
  link: string;
  roadmapLink?: string;
  skills?: string[];
  responsibilities?: string[];
}