'use client';

import { useState, useMemo } from 'react';
import { Vehicle } from '@/types/vehicle';
import { FilterCategory, SortOption } from '@/types/filters';
import { filterAndSortVehicles } from '@/utils/filterUtils';
import FilterBar from '@/components/FilterBar/FilterBar';
import VehicleCard from '@/components/VehicleCard/VehicleCard';
import styles from './VehiclesView.module.css';

interface VehiclesViewProps {
  vehicles: Vehicle[];
}

export default function VehiclesView({ vehicles }: VehiclesViewProps) {
  const [currentFilter, setCurrentFilter] = useState<FilterCategory>('all');
  const [currentSort, setCurrentSort] = useState<SortOption>('none');

  const filteredAndSortedVehicles = useMemo(
    () => filterAndSortVehicles(vehicles, currentFilter, currentSort),
    [vehicles, currentFilter, currentSort]
  );

  return (
    <>
      <FilterBar
        currentFilter={currentFilter}
        currentSort={currentSort}
        onFilterChange={setCurrentFilter}
        onSortChange={setCurrentSort}
      />

      <div className={styles.vehiclesList}>
        {filteredAndSortedVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </>
  );
}
