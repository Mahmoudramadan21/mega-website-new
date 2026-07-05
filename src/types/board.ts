/**
 * BoardMember
 *
 * Structure for a single board member displayed in the "Meet Our Board" section.
 *
 * Includes:
 * - id: Unique identifier (used as React key).
 * - name: Full display name of the member.
 * - position: Role/title shown above the name (e.g. "Leader", "HR Head", "Frontend Mentor").
 * - image: Path to the member's photo (served from /public).
 */
export interface BoardMember {
  id: string;
  name: string;
  position: string;
  image: string;
}
