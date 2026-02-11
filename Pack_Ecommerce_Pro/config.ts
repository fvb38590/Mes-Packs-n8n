/**
 * Pack E-commerce Pro - Configuration
 * Avis Clients → Posts Sociaux Automatisés
 */

export interface ReviewToPost {
  /** Nom du client */
  customerName: string;

  /** Texte de l'avis */
  reviewText: string;

  /** Note (1-5) */
  rating: number;

  /** Plateforme cible (LinkedIn, Instagram, Twitter) */
  platformTarget: string;
}

export enum Platform {
  LINKEDIN = 'linkedin',
  INSTAGRAM = 'instagram',
  TWITTER = 'twitter'
}

export const PLATFORMS = [
  { value: Platform.LINKEDIN, label: 'LinkedIn' },
  { value: Platform.INSTAGRAM, label: 'Instagram' },
  { value: Platform.TWITTER, label: 'Twitter' }
];

export const DEFAULT_REVIEW_TO_POST: ReviewToPost = {
  customerName: '',
  reviewText: '',
  rating: 0,
  platformTarget: Platform.LINKEDIN
};
