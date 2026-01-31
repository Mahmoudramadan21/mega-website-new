import { redirect } from 'next/navigation';

/**
 * Circles Index Page
 *
 * Acts as an entry point for /circles.
 * Performs a server-side redirect to the default circle page.
 *
 * Route:
 * /circles  →  /circles/hr
 */
export default function CirclesPage() {
  redirect('/circles/hr');
}
