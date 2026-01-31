/**
 * Sponsor
 *
 * Structure for a single sponsor/partner entry.
 * Includes:
 * - id: Unique identifier.
 * - name: Official name of the sponsor (used in alt text for SEO and accessibility).
 * - logo: Path to the sponsor's logo image (optimized for lazy loading).
 */
export interface Sponsor {
  id: number;
  name: string;
  logo: string;
}
