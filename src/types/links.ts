// types/links.ts
import React from 'react';

/**
 * LinkItem
 *
 * Generic link type with label and URL.
 * Can be used anywhere: footer, navbar, sidebar, etc.
 */
export interface LinkItem {
  label: string;
  href: string;
}

/**
 * SocialLinkItem
 *
 * Generic social media link type with:
 * - label: Platform name
 * - href: URL
 * - Icon: React SVG component
 */
export interface SocialLinkItem {
  label: string;
  href: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
