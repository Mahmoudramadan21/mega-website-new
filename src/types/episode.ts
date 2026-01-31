'use client';

/**
 * EpisodeCardVariant
 *
 * Defines the visual layout of an EpisodeCard component.
 * - 'image-right': Circular image appears on the right side
 * - 'image-left': Circular image appears on the left side
 * - 'background-dual': Two decorative background images at bottom corners
 */
export type EpisodeCardVariant = 'image-right' | 'image-left' | 'background-dual';

/**
 * BaseEpisodeData
 *
 * Common structure for all podcast episodes.
 * Includes title, description, episode number, release date, variant type, and optional link.
 */
export interface BaseEpisodeData {
  id: number;
  title: string;
  description: string;
  date: string;
  episode: number;
  variant: EpisodeCardVariant;
  link?: string;
}

/**
 * SingleImageEpisode
 *
 * Episodes that display a single circular image.
 * Can be aligned left or right.
 */
export interface SingleImageEpisode extends BaseEpisodeData {
  variant: 'image-right' | 'image-left';
  imageSrc: string;
}

/**
 * BackgroundDualEpisode
 *
 * Episodes with two decorative background images.
 * Usually used for stylized cards without a main circular image.
 */
export interface BackgroundDualEpisode extends BaseEpisodeData {
  variant: 'background-dual';
  images: {
    left: string;
    right: string;
  };
}

/**
 * EpisodeData
 *
 * Union type for all episode structures.
 * Allows type-safe handling of both single-image and background-dual episodes.
 */
export type EpisodeData = SingleImageEpisode | BackgroundDualEpisode;
