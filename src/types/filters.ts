// Filter category type for UI state
export type FilterCategory = 'all' | 'cars' | 'pickups' | 'suvs';

// Sort option type for UI state
export type SortOption = 'none' | 'price-asc' | 'price-desc' | 'year-newest' | 'year-oldest';

// UI labels for filter categories (Spanish)
export const FILTER_LABELS: Record<FilterCategory, string> = {
  all: 'Todos',
  cars: 'Autos',
  pickups: 'Pickups y Comerciales',
  suvs: 'SUVs y Crossovers',
};

// UI labels for sort options (Spanish)
export const SORT_LABELS: Record<SortOption, string> = {
  none: 'Nada',
  'price-asc': 'De menor a mayor precio',
  'price-desc': 'De mayor a menor precio',
  'year-newest': 'Más nuevos primero',
  'year-oldest': 'Más viejos primero',
};
