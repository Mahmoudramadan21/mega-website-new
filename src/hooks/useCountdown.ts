'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Helper to calculate remaining time until target
 */
function calculateTimeLeft(target: Date): TimeLeft {
  const now = Date.now();
  const diff = target.getTime() - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

/**
 * Custom countdown hook
 * Returns { timeLeft, isExpired } for a target date
 */
export function useCountdown(targetDate: string | Date): { timeLeft: TimeLeft; isExpired: boolean } {
  // Memoize target date so it doesn't change on every render
  const target = useMemo(() => {
    return typeof targetDate === 'string' ? new Date(targetDate) : targetDate;
  }, [targetDate]);

  // Detect invalid date
  const isInvalidDate = Number.isNaN(target.getTime());

  // Compute initial state outside effect → avoids synchronous setState
  const initialTimeLeft: TimeLeft = isInvalidDate ? { days: 0, hours: 0, minutes: 0, seconds: 0 } : calculateTimeLeft(target);
  const initialExpired = isInvalidDate || Object.values(initialTimeLeft).every((v) => v === 0);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(initialTimeLeft);
  const [isExpired, setIsExpired] = useState(initialExpired);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // If invalid date → no need to start interval
    if (isInvalidDate) return;

    const tick = () => {
      const newTimeLeft = calculateTimeLeft(target);
      setTimeLeft(newTimeLeft);

      const expired = Object.values(newTimeLeft).every((v) => v === 0);
      setIsExpired(expired);

      if (expired && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    // Start interval for ticking
    intervalRef.current = setInterval(tick, 1000);

    // Run tick once immediately to update instantly on mount
    tick();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [targetDate, isInvalidDate, target]);

  return { timeLeft, isExpired };
}
