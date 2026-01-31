'use client';

import React, { memo, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from "@/data/links";

/**
 * Header Component
 *
 * Sticky, semi-transparent header with responsive navigation.
 * Features a desktop horizontal menu, mobile hamburger toggle with smooth slide animation,
 * and prominent "Join Us" CTA.
 *
 * Key Features & Optimizations:
 * - Fully accessible: ARIA labels, roles, focus management, and screen-reader-only text
 * - Mobile menu closes on outside click or link selection
 * - Smooth hamburger animation and menu height/opacity transition
 * - Backdrop blur with subtle shadow for modern glass-morphism effect
 * - Logo hover scale and focus-ring support on interactive elements
 * - Memoized with `React.memo` to prevent unnecessary re-renders
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions

 */

function Header() {
  const [open, setOpen] = useState(false);
  const menuWrapperRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(e.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    // Main header: sticky at top with glass-morphism effect
    <header className="sticky top-0 z-50 py-4 bg-white/20 backdrop-blur-xl shadow-[0_4px_16px_0_rgba(13,13,13,0.16)]">
      {/* Container for header content with horizontal layout */}
      <div className="container flex items-center justify-between gap-2">
        {/* Logo */}
        {/* Logo link with hover scale animation */}
        <Link
          href="/"
          className="focus-ring hover:scale-105 transition-transform"
          aria-label="Mega Logo"
        >
          <Image
            src="/logo.svg"
            alt="Mega Logo"
            width={150}
            height={56}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        {/* Desktop-only navigation menu */}
        <nav aria-label="Main navigation" className="hidden md:block">
          {/* Horizontal list of navigation items */}
          <ul className="flex items-center gap-5 lg:gap-6 xl:gap-8 text-[#1E1E1E]">
            {navItems.map((item) => (
              // Individual nav item with shrink prevention
              <li key={item.href} className="nav-link shrink-0">
                <Link href={item.href} className="focus-ring">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        {/* Desktop-only "Join Us" button */}
        <Link
          href="/register"
          className="hidden md:inline-flex px-12 focus-ring btn hover:px-11"
        >
          Join Us
        </Link>

        {/* Mobile Hamburger Button */}
        {/* Mobile-only hamburger toggle button */}
        <button
          ref={hamburgerRef}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg cursor-pointer focus-ring"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((prev) => !prev);
          }}
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger lines container */}
          <div className="space-y-1.5">
            {/* Top line - rotates and translates when open */}
            <span
              className={`block h-0.5 w-6 bg-[#1E1E1E] transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            {/* Middle line - fades out when open */}
            <span
              className={`block h-0.5 w-6 bg-[#1E1E1E] transition-all ${open ? "opacity-0" : ""}`}
            />
            {/* Bottom line - rotates and translates when open */}
            <span
              className={`block h-0.5 w-6 bg-[#1E1E1E] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile menu wrapper with smooth height and opacity transition */}
      <div
        ref={menuWrapperRef}
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {/* Mobile navigation content */}
        <nav aria-label="Mobile navigation" className="container py-4">
          {/* Vertical centered list of links */}
          <ul className="flex flex-col items-center gap-3 text-[#1E1E1E]">
            {navItems.map((item) => (
              // Mobile nav item with max width constraint
              <li key={item.href} className="nav-link max-w-fit">
                <Link
                  href={item.href}
                  className="focus-ring"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Mobile "Join Us" CTA */}
            <li>
              <Link
                href="/register"
                className="mt-4 px-16 py-1 rounded-full btn focus-ring"
                onClick={() => setOpen(false)}
              >
                Join Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default memo(Header);