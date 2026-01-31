import QuoteIcon from '@/assets/icons/quote-icon.svg';
import LightBlubIcon from '@/assets/icons/lightbulb-icon.svg';
import AlertTriangleIcon from '@/assets/icons/alert-triangle-icon.svg';

import { MotivationQuote } from '@/types/motivation';

/**
 * motivationQuotes
 *
 * Collection of motivational quotes used across the site (e.g. homepage carousel).
 *
 * Main Purpose:
 *   • Inspire and motivate visitors (students & tech enthusiasts)
 *   • Add emotional & personal touch to the brand experience
 *   • Reinforce MEGA's core values through relevant messaging
 *
 * Key Characteristics:
 *   • Each quote paired with unique icon + gradient for visual distinction
 *   • Readonly + as const for immutability
 *   • Ready for randomization, filtering, or section-specific display
 */
export const motivationQuotes: readonly MotivationQuote[] = [
  // 1
  {
    id: 1,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    icon: QuoteIcon,
    gradient: "bg-[linear-gradient(135.42deg,#F3E8FF_2.92%,rgba(221,193,245,0.64)_103.65%)]",
    authorColor: "text-[#9333EA]",
  },
  {
    id: 2,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    icon: LightBlubIcon,
    gradient: "bg-[linear-gradient(130.61deg,#F3E8FF_4.24%,#C1F9D5_94.79%)]",
    authorColor: "text-[#16A34A]",
  },
  {
    id: 3,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    icon: AlertTriangleIcon,
    gradient: "bg-[linear-gradient(135.31deg,#FFF6F2_3.54%,#FEE2E2_98.45%)]",
    authorColor: "text-[#EA580C]",
  },

  // 2
  {
    id: 4,
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
    icon: QuoteIcon,
    gradient: "bg-[linear-gradient(135.42deg,#F3E8FF_2.92%,rgba(221,193,245,0.64)_103.65%)]",
    authorColor: "text-[#9333EA]",
  },
  {
    id: 5,
    text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    author: "Steve Jobs",
    icon: LightBlubIcon,
    gradient: "bg-[linear-gradient(130.61deg,#F3E8FF_4.24%,#C1F9D5_94.79%)]",
    authorColor: "text-[#16A34A]",
  },
  {
    id: 6,
    text: "Self-confidence can be learned, practiced, and mastered – just like any other skill.",
    author: "Barrie Davenport",
    icon: AlertTriangleIcon,
    gradient: "bg-[linear-gradient(135.31deg,#FFF6F2_3.54%,#FEE2E2_98.45%)]",
    authorColor: "text-[#EA580C]",
  },

  // 3
  {
    id: 7,
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    icon: QuoteIcon,
    gradient: "bg-[linear-gradient(135.42deg,#F3E8FF_2.92%,rgba(221,193,245,0.64)_103.65%)]",
    authorColor: "text-[#9333EA]",
  },
  {
    id: 8,
    text: "People should pursue what they’re passionate about.",
    author: "Elon Musk",
    icon: LightBlubIcon,
    gradient: "bg-[linear-gradient(130.61deg,#F3E8FF_4.24%,#C1F9D5_94.79%)]",
    authorColor: "text-[#16A34A]",
  },
  {
    id: 9,
    text: "With each step you take, you will grow stronger and more successful.",
    author: "Mark Victor Hansen",
    icon: AlertTriangleIcon,
    gradient: "bg-[linear-gradient(135.31deg,#FFF6F2_3.54%,#FEE2E2_98.45%)]",
    authorColor: "text-[#EA580C]",
  },

  // 4
  {
    id: 10,
    text: "Failure is the opportunity to begin again, only this time more wisely.",
    author: "Henry Ford",
    icon: QuoteIcon,
    gradient: "bg-[linear-gradient(135.42deg,#F3E8FF_2.92%,rgba(221,193,245,0.64)_103.65%)]",
    authorColor: "text-[#9333EA]",
  },
  {
    id: 11,
    text: "Innovation distinguishes between a leader and a follower – but passion fuels the innovation.",
    author: "Steve Jobs (Inspired)",
    icon: LightBlubIcon,
    gradient: "bg-[linear-gradient(130.61deg,#F3E8FF_4.24%,#C1F9D5_94.79%)]",
    authorColor: "text-[#16A34A]",
  },
  {
    id: 12,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    icon: AlertTriangleIcon,
    gradient: "bg-[linear-gradient(135.31deg,#FFF6F2_3.54%,#FEE2E2_98.45%)]",
    authorColor: "text-[#EA580C]",
  },

  // 5
  {
    id: 13,
    text: "Debugging is not a failure; it is an opportunity to learn, refine, and improve.",
    author: "Anonymous (Tech Wisdom)",
    icon: QuoteIcon,
    gradient: "bg-[linear-gradient(135.42deg,#F3E8FF_2.92%,rgba(221,193,245,0.64)_103.65%)]",
    authorColor: "text-[#9333EA]",
  },
  {
    id: 14,
    text: "If you love coding, every challenge becomes an exciting puzzle.",
    author: "Anonymous (Tech Community)",
    icon: LightBlubIcon,
    gradient: "bg-[linear-gradient(130.61deg,#F3E8FF_4.24%,#C1F9D5_94.79%)]",
    authorColor: "text-[#16A34A]",
  },
  {
    id: 15,
    text: "Believe in your code, believe in your skills.",
    author: "MEGA Team Inspiration",
    icon: AlertTriangleIcon,
    gradient: "bg-[linear-gradient(135.31deg,#FFF6F2_3.54%,#FEE2E2_98.45%)]",
    authorColor: "text-[#EA580C]",
  },

  // 6
  {
    id: 16,
    text: "Every bug you fix makes you a better programmer.",
    author: "Anonymous",
    icon: QuoteIcon,
    gradient: "bg-[linear-gradient(135.42deg,#F3E8FF_2.92%,rgba(221,193,245,0.64)_103.65%)]",
    authorColor: "text-[#9333EA]",
  },
  {
    id: 17,
    text: "Find what sparks your curiosity in tech.",
    author: "Inspired by Alan Kay",
    icon: LightBlubIcon,
    gradient: "bg-[linear-gradient(130.61deg,#F3E8FF_4.24%,#C1F9D5_94.79%)]",
    authorColor: "text-[#16A34A]",
  },
  {
    id: 18,
    text: "Once you believe in yourself, you can risk curiosity and wonder.",
    author: "Inspired by e.e. cummings",
    icon: AlertTriangleIcon,
    gradient: "bg-[linear-gradient(135.31deg,#FFF6F2_3.54%,#FEE2E2_98.45%)]",
    authorColor: "text-[#EA580C]",
  },
] as const;
