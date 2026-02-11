/**
 * Pack Immobilier Pro - Configuration
 * Qualification de Leads par IA
 */

export interface RealEstateLead {
  /** Nom du client */
  clientName: string;

  /** Type de bien (appartement, maison, terrain, etc.) */
  propertyType: string;

  /** Budget en euros */
  budget: number;

  /** Indication d'urgence */
  isUrgent: boolean;

  /** Score IA (1-10) */
  scoreIA: number;
}

export enum PropertyType {
  APPARTEMENT = 'appartement',
  MAISON = 'maison',
  TERRAIN = 'terrain',
  COMMERCE = 'commerce',
  BUREAU = 'bureau',
  IMMEUBLE = 'immeuble',
  AUTRE = 'autre'
}

export const PROPERTY_TYPES = [
  { value: PropertyType.APPARTEMENT, label: 'Appartement' },
  { value: PropertyType.MAISON, label: 'Maison' },
  { value: PropertyType.TERRAIN, label: 'Terrain' },
  { value: PropertyType.COMMERCE, label: 'Commerce' },
  { value: PropertyType.BUREAU, label: 'Bureau' },
  { value: PropertyType.IMMEUBLE, label: 'Immeuble' },
  { value: PropertyType.AUTRE, label: 'Autre' }
];

export const DEFAULT_LEAD: RealEstateLead = {
  clientName: '',
  propertyType: PropertyType.AUTRE,
  budget: 0,
  isUrgent: false,
  scoreIA: 0
};
