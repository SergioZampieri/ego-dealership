/**
 * Segment constants for type-safe comparisons
 * Single source of truth for API segment values
 */
export const API_SEGMENTS = {
  SEDAN: 'Sedan',
  HATCHBACK: 'Hatchback',
  PICKUPS_Y_COMERCIALES: 'Pickups y Comerciales',
  SUVS: 'SUVs',
} as const;

/**
 * API Segment Types (derived from constants)
 * Ensures type and values are always in sync
 */
export type ApiSegment = typeof API_SEGMENTS[keyof typeof API_SEGMENTS];

// Base vehicle interface for list view
export interface Vehicle {
  id: number;
  name: string;
  segment: ApiSegment;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
}

// Feature interface for vehicle detail
export interface VehicleFeature {
  name: string;
  description: string;
  image: string;
}

// Highlight interface for vehicle detail
export interface VehicleHighlight {
  title: string;
  content: string;
  image: string;
}

// Extended vehicle detail interface
export interface VehicleDetails extends Vehicle {
  title: string;
  description: string;
  model_features: VehicleFeature[];
  model_highlights: VehicleHighlight[];
}
