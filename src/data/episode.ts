import { BackgroundDualEpisode, EpisodeData } from "@/types/episode";

/**
 * imageRightEpisodes / imageLeftEpisodes / backgroundDualEpisodes
 *
 * Podcast episodes data – separated by visual variant/layout style.
 *
 * Main Purpose:
 *   • Populate podcast section with different card layouts
 *   • Showcase MEGA podcast content (titles, dates, descriptions)
 *   • Support multiple visual sections on homepage / podcast page
 *
 * Key Characteristics:
 *   • Grouped by display variant (image-right, image-left, background-dual)
 *   • Centralized source – easy to add new episodes
 *   • Ready for sorting by date or episode number
 */
export const imageRightEpisodes: EpisodeData[] = [
  {
    id: 1,
    episode: 1,
    title: 'Project Management Essentials',
    description: 'Project management… it’s not just a job, it’s a life skill! Learn core principles and real-world applications.',
    date: '2024-12-15',
    imageSrc: '/images/episode-1.png',
    variant: 'image-right',
  },
  {
    id: 2,
    episode: 2,
    title: 'Agile Methodologies Deep Dive',
    description: 'Agile helps teams deliver value faster with continuous improvement and adaptive planning.',
    date: '2024-12-22',
    imageSrc: '/images/episode-1.png',
    variant: 'image-right',
  },
  {
    id: 3,
    episode: 3,
    title: 'Effective Team Coordination',
    description: 'Discover tools and techniques for seamless project coordination in dynamic environments.',
    date: '2024-12-29',
    imageSrc: '/images/episode-1.png',
    variant: 'image-right',
  },
  // Add more unique episodes as needed
] as const;

export const imageLeftEpisodes: EpisodeData[] = [
  {
    id: 4,
    episode: 4,
    title: 'Product Management Fundamentals',
    description: 'Product Management is about vision, strategy, and delivering maximum user value.',
    date: '2025-01-05',
    imageSrc: '/images/episode-4.png',
    variant: 'image-left',
  },
  {
    id: 5,
    episode: 5,
    title: 'Roadmapping and Prioritization',
    description: 'Master the art of building product roadmaps and prioritizing features effectively.',
    date: '2025-01-12',
    imageSrc: '/images/episode-4.png',
    variant: 'image-left',
  },
  {
    id: 6,
    episode: 6,
    title: 'User-Centric Design Thinking',
    description: 'Explore how empathy and iteration drive successful product development.',
    date: '2025-01-19',
    imageSrc: '/images/episode-4.png',
    variant: 'image-left',
  },
] as const;

export const backgroundDualEpisodes: BackgroundDualEpisode[] = [
  {
    id: 7,
    episode: 7,
    title: 'Leadership in Tech Teams',
    description:
      'Leadership is influence, communication, and decisive action in high-stakes environments.',
    date: '2025-01-26',
    variant: 'background-dual',
    images: {
      left: '/images/episode-7-left.png',
      right: '/images/episode-7-right.png',
    },
  },
  {
    id: 8,
    episode: 8,
    title: 'Building High-Performing Teams',
    description:
      'Strategies for fostering collaboration, motivation, and innovation in tech organizations.',
    date: '2025-02-02',
    variant: 'background-dual',
    images: {
      left: '/images/episode-7-left.png',
      right: '/images/episode-7-right.png',
    },
  },
] as const;