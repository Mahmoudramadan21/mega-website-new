import { Sponsor } from "@/types/sponser";

/**
 * sponsors
 *
 * Official list of MEGA Team sponsors and partners.
 *
 * Main Purpose:
 *   • Display credibility & institutional support on homepage / About / Footer
 *   • Build trust with visitors, applicants, and potential collaborators
 *   • Strengthen brand perception through recognized logos
 *
 * Key Characteristics:
 *   • Static & centralized – single source of truth
 *   • Ready for marquee/infinite scroll duplication
 *   • Names suitable for alt text (accessibility & SEO)
 *   • Easy to reorder or extend
 */
export const sponsors: Sponsor[] = [
  { id: 1, name: "Tesla", logo: "/logos/tesla.png" },
  { id: 2, name: "Hult Prize", logo: "/logos/hult.png" },
  { id: 3, name: "Triago", logo: "/logos/triago.png" },
  { id: 4, name: "Techno Club", logo: "/logos/techno.png" },
  { id: 5, name: "ITI", logo: "/logos/iti.png" },
  { id: 6, name: "Creativa", logo: "/logos/creativa.png" },
  { id: 7, name: "Madarek Academy", logo: "/logos/madarek.png" },
] as const;
