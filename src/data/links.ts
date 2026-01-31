// data/footer.ts
import { LinkItem, SocialLinkItem } from '@/types/links';

import FacebookIcon from '@/assets/icons/facebook.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import XIcon from '@/assets/icons/x-twitter.svg';
import YouTubeIcon from '@/assets/icons/youtube.svg';

/** Navbar Links */
export const navItems: LinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Events', href: '/#events' },
  { label: 'Circles', href: '/#circles' },
];

/**
 * Services Links
 * - Displayed in the "Services" section of the footer
 */
export const servicesLinks: LinkItem[] = [
  { label: 'Training', href: '/events/upcoming' },
  { label: 'Podcast', href: '/#podcasts' },
  { label: 'Events', href: '/#events' },
  { label: 'Workshops', href: '/events/upcoming' },
];

/**
 * Quick Links
 * - Displayed in the "Quick Links" section of the footer
 */
export const quickLinks: LinkItem[] = [
  { label: 'Events', href: '/#events' },
  { label: 'MEGAst', href: '/#podcasts' },
  { label: 'Circles', href: '/#circles' },
  { label: 'Articles', href: '/#motivation' },
  { label: 'About Us', href: '/#about' },
];

/**
 * Social Links
 * - External links to social media platforms
 * - Icon is a React SVG component
 */
export const socialLinks: SocialLinkItem[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/megateam.mu18/', Icon: FacebookIcon },
  { label: 'LinkedIn', href: 'https://eg.linkedin.com/company/mega-team-mu', Icon: LinkedInIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/megateammu', Icon: InstagramIcon },
  { label: 'X (Twitter)', href: 'https://x.com/MegaTeamMU', Icon: XIcon },
  { label: 'YouTube', href: 'https://www.youtube.com/@MEGATeamMU', Icon: YouTubeIcon },
];