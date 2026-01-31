import { redirect } from 'next/navigation';

/**
 * Events Index Page
 *
 * This page acts as an entry point for /events.
 * It performs a server-side redirect to the upcoming event page.
 *
 * Why server-side redirect?
 * - Better performance
 * - SEO friendly
 * - No unnecessary client-side rendering
 *
 * Route:
 * /events  →  /events/upcoming
 */
export default function EventsPage() {
  redirect('/events/upcoming');
}
