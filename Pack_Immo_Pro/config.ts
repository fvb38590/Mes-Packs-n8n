/**
 * Configuration des types de données pour les leads immobiliers
 */

export interface RealEstateLead {
  /** Nom complet du lead */
  nom: string;
  
  /** Adresse email du lead */
  email: string;
  
  /** Numéro de téléphone du lead */
  telephone: string;
  
  /** Type de bien recherché (appartement, maison, terrain, etc.) */
  typeDeBien: PropertyType;
  
  /** Budget maximal du lead en euros */
  budget: number;
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

export interface LeadFormData {
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  propertyType: string;
  budgetMin?: number;
  budgetMax?: number;
  message?: string;
  source?: string;
}

export const PROPERTY_TYPES_LIST = [
  { value: PropertyType.APPARTEMENT, label: 'Appartement' },
  { value: PropertyType.MAISON, label: 'Maison' },
  { value: PropertyType.TERRAIN, label: 'Terrain' },
  { value: PropertyType.COMMERCE, label: 'Commerce' },
  { value: PropertyType.BUREAU, label: 'Bureau' },
  { value: PropertyType.IMMEUBLE, label: 'Immeuble' },
  { value: PropertyType.AUTRE, label: 'Autre' }
];

export const DEFAULT_LEAD: RealEstateLead = {
  nom: '',
  email: '',
  telephone: '',
  typeDeBien: PropertyType.AUTRE,
  budget: 0,
};
