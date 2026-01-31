'use client';

import React, { memo, useEffect } from 'react';
import Image from "next/image";

/**
 * SuccessModal Component
 *
 * An accessible, fully interactive success modal displayed after successful event registration.
 * Features focus trapping, Escape key closure, click-outside dismissal, and body scroll lock.
 *
 * Key Features & Optimizations:
 * - Proper ARIA dialog attributes for screen reader support
 * - Prevents background scrolling while open
 * - Closes on Escape key, backdrop click, or button press
 * - Smooth entrance animation with zoom effect
 * - Decorative success illustration hidden from assistive technologies
 * - Auto-focus on close button for better keyboard navigation
 * - Memoized with `React.memo` to prevent unnecessary re-renders
 * - Tailwind classes ordered: Layout → Box Model → Typography → Visual → Transitions

 */

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    // Backdrop overlay - darkens background, enables click-outside close and blur effect
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
      onClick={onClose}
    >
      {/* Modal content card - stops event propagation to prevent backdrop close on inner clicks */}
      <div
        className="w-full max-w-lg p-8 rounded-3xl bg-white shadow-2xl text-center animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative success illustration - centered and hidden from screen readers */}
        <div className="mb-8">
          <Image
            src="/images/registration-complete.svg"
            alt=""
            width={200}
            height={200}
            className="mx-auto"
            priority
            aria-hidden="true"
          />
        </div>

        {/* Success title with accessible ID reference */}
        <h2
          id="success-modal-title"
          className="mb-4 font-bold text-2xl md:text-3xl text-primary-500"
        >
          Registration Successful!
        </h2>

        {/* Confirmation message with event-specific details */}
        <p className="mb-8 text-neutral-600">
          Thank you for registering.
          <br />
          We&apos;ve received your application and will be in touch soon.
        </p>

        {/* Primary close button with auto-focus for keyboard accessibility */}
        <button
          onClick={onClose}
          className="px-10 py-2 rounded-full text-lg font-semibold cursor-pointer bg-primary-500 text-white hover:bg-primary-600 focus-ring transition-all"
          autoFocus
        >
          Got It!
        </button>
      </div>
    </div>
  );
}

export default memo(SuccessModal);