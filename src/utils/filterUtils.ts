import { Vehicle, API_SEGMENTS } from '@/types/vehicle';
import { FilterCategory, SortOption } from '@/types/filters';


export function filterAndSortVehicles(
  vehicles: Vehicle[],
  filterBy: FilterCategory,
  sortBy: SortOption
): Vehicle[] {

  let filtered = vehicles;

  if (filterBy === 'cars') {
    filtered = vehicles.filter(
      (v) =>
        v.segment === API_SEGMENTS.SEDAN ||
        v.segment === API_SEGMENTS.HATCHBACK
    );
  } else if (filterBy === 'pickups') {
    filtered = vehicles.filter(
      (v) => v.segment === API_SEGMENTS.PICKUPS_Y_COMERCIALES
    );
  } else if (filterBy === 'suvs') {
    filtered = vehicles.filter((v) => v.segment === API_SEGMENTS.SUVS);
  }

  if (sortBy === 'price-asc') {
    return [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    return [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'year-newest') {
    return [...filtered].sort((a, b) => b.year - a.year);
  } else if (sortBy === 'year-oldest') {
    return [...filtered].sort((a, b) => a.year - b.year);
  }

  return filtered;
}
