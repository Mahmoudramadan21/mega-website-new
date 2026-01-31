import { useRef, useCallback, useState, useEffect, KeyboardEvent } from 'react';

interface CarouselArrowsVisibility {
  showLeft: boolean;
  showRight: boolean;
}

/**
 * useCarousel Hook
 *
 * A reusable hook for horizontal scrollable carousels with:
 * - Smooth scroll on arrow buttons
 * - Keyboard navigation (ArrowLeft / ArrowRight)
 * - Dynamic arrows visibility
 *
 * @param scrollAmount Distance in pixels to scroll on each arrow click (default: 320)
 */
export function useCarousel(scrollAmount: number = 320) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [arrows, setArrows] = useState<CarouselArrowsVisibility>({
    showLeft: false,
    showRight: false,
  });

  /** Scroll the carousel to the left by `scrollAmount` */
  const scrollLeft = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  }, [scrollAmount]);

  /** Scroll the carousel to the right by `scrollAmount` */
  const scrollRight = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, [scrollAmount]);

  /** Update arrows visibility based on scroll position */
  const updateArrowsVisibility = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setArrows({
      showLeft: scrollLeft > 0,
      showRight: scrollLeft + clientWidth < scrollWidth - 1, // small offset for precision
    });
  }, []);

  /** Handle keyboard navigation (ArrowLeft / ArrowRight) */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.target !== carouselRef.current) return;
      switch (e.key) {
        case 'ArrowRight':
          scrollRight();
          break;
        case 'ArrowLeft':
          scrollLeft();
          break;
      }
    },
    [scrollLeft, scrollRight]
  );

  /** Update arrows visibility on mount and on scroll */
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    updateArrowsVisibility(); // initial check

    el.addEventListener('scroll', updateArrowsVisibility);
    window.addEventListener('resize', updateArrowsVisibility); // recalc on resize

    return () => {
      el.removeEventListener('scroll', updateArrowsVisibility);
      window.removeEventListener('resize', updateArrowsVisibility);
    };
  }, [updateArrowsVisibility]);

  return { carouselRef, scrollLeft, scrollRight, handleKeyDown, arrows };
}
