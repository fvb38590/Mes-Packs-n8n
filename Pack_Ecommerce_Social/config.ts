/**
 * Types for customer reviews and output options (Pack E-commerce & Social Media)
 */

export interface CustomerReview {
  /** Full name of the reviewer */
  name: string;

  /** Rating (1-5) */
  rating: number;

  /** Product identifier or name */
  product: string;

  /** Optional textual comment */
  comment?: string;

  /** ISO date string */
  date?: string;
}

export enum SocialPlatform {
  LINKEDIN = 'linkedin',
  INSTAGRAM = 'instagram',
  TWITTER = 'twitter'
}

export interface ReviewFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  product: string;
  rating: number;
  comment?: string;
  source?: string;
  preferredPlatforms?: SocialPlatform[];
}

export const SOCIAL_PLATFORMS = [
  { value: SocialPlatform.LINKEDIN, label: 'LinkedIn' },
  { value: SocialPlatform.INSTAGRAM, label: 'Instagram' },
  { value: SocialPlatform.TWITTER, label: 'Twitter' }
];

export const DEFAULT_REVIEW: CustomerReview = {
  name: '',
  rating: 0,
  product: '',
  comment: '',
  date: new Date().toISOString(),
};
