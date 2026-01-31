
import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { servicesLinks, quickLinks, socialLinks } from "@/data/links";
import {
  ArrowRightIcon,
  EmailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/assets/icons";

/**
 * Footer Component
 *
 * The main site footer containing logo, description, services/quick links,
 * contact information, social media links, back-to-top button, and legal info.
 *
 * Optimized for:
 * - Performance: Memoized, lazy-loaded logo if needed, minimal re-renders
 * - SEO: Semantic structure with <footer>, proper headings, meaningful links
 * - Accessibility: ARIA labels, focusable links, decorative icons hidden, skip-to-content friendly
 * - Best Practices: Responsive grid/layout, data-driven links, current year in copyright
 * - Mobile-First: Stacks properly on small screens
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions

 */
function Footer() {
  const currentYear = new Date().getFullYear(); // 2025 → will show 2025

  return (
    // Main footer container with dark background and light text for contrast
    <footer
      className="text-neutral-200 bg-[#0D0D0D]"
      aria-labelledby="footer-heading"
    >
      {/* Inner container for content with vertical padding, responsive for larger screens */}
      <div className="container py-12 lg:py-16">
        {/* Grid layout for footer sections, responsive columns and gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-18 lg:pb-8">
          {/* Logo & Description */}
          {/* Column for logo, description, and social links */}
          <div className="flex flex-col gap-4">
            {/* Home link with logo image */}
            <Link
              href="/"
              className="focus-ring"
              aria-label="MEGA Team MU Home"
            >
              <Image
                src="/logo-white.svg" //  Use white version for dark footer
                alt="MEGA Team MU Logo"
                width={150}
                height={56}
                priority
              />
            </Link>
            {/* Descriptive paragraph about the organization */}
            <p className="max-w-xs leading-relaxed font-cairo">
              Empowering individuals to achieve their dreams through motivation,
              community and continuous growth.
            </p>
            {/* Container for social media icons */}
            <div className="flex items-center gap-4 mt-4">
              {socialLinks.map(({ href, Icon, label }) => (
                // Individual social media link with icon
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring hover:text-white transition-colors"
                  aria-label={`Follow us on ${label}`}
                >
                  {/* Social icon with fixed size, hidden from screen readers */}
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          {/* Column for services links */}
          <div>
            {/* Heading for services section */}
            <h3 className="mb-4 font-semibold text-lg text-white">Services</h3>
            {/* List of service links */}
            <ul className="space-y-4 font-cairo">
              {servicesLinks.map(({ label, href }) => (
                // List item with link
                <li key={label}>
                  <Link
                    href={href}
                    className="focus-ring hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          {/* Column for quick links */}
          <div>
            {/* Heading for quick links section */}
            <h3 className="mb-4 font-semibold text-lg text-white">
              Quick Links
            </h3>
            {/* List of quick links */}
            <ul className="space-y-4 font-cairo">
              {quickLinks.map(({ label, href }) => (
                // List item with link
                <li key={label}>
                  <Link
                    href={href}
                    className="focus-ring hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          {/* Column for contact information */}
          <div>
            {/* Heading for contact section */}
            <h3 className="mb-4 font-semibold text-lg text-white">
              Contact Us
            </h3>
            {/* List of contact details */}
            <ul className="space-y-4 font-cairo">
              {/* Phone contact item */}
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                {/* Phone icon, hidden from screen readers */}
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                <a href="tel:+201212043552" className="focus-ring">
                  (+20) 121 204 3552
                </a>
              </li>
              {/* Email contact item */}
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                {/* Email icon, hidden from screen readers */}
                <EmailIcon className="h-5 w-5" aria-hidden="true" />
                <a href="mailto:mega.team.mu@gmail.com" className="focus-ring">
                  mega.team.mu@gmail.com
                </a>
              </li>
              {/* Location contact item */}
              <li className="flex items-start gap-3 hover:text-white transition-colors">
                {/* Location icon with slight top margin, hidden from screen readers */}
                <MapPinIcon
                  className="mt-0.5 h-5 w-5 shrink-0"
                  aria-hidden="true"
                />
                {/* Address element, not italicized */}
                <address className="not-italic focus-ring">
                  Mansoura University, Dakahlia, Egypt
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        {/* Horizontal divider for separation */}
        <hr className="my-8 border-neutral-700" />
        {/* Copyright notice with dynamic year */}
        <p className="text-center text-neutral-200">
          Copyright © 2018–{currentYear} All Rights Reserved to MEGA Team MU.
        </p>
      </div>

      {/* Back to Main */}
      <Link
        href="#main"
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl bg-neutral-800/80 backdrop-blur-sm cursor-pointer hover:bg-neutral-700 focus-ring transition-all"
        aria-label="Back to top"
      >
        {/* Up arrow icon, rotated for upward direction */}
        <ArrowRightIcon
          className="h-7 w-7 -rotate-90 text-primary-500"
          aria-hidden="true"
        />
      </Link>
    </footer>
  );
}

export default memo(Footer);