'use client';

import { useState, useRef, useEffect } from 'react';
import { FilterCategory, SortOption, FILTER_LABELS, SORT_LABELS } from '@/types/filters';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  currentFilter: FilterCategory;
  currentSort: SortOption;
  onFilterChange: (filter: FilterCategory) => void;
  onSortChange: (sort: SortOption) => void;
}

export default function FilterBar({
  currentFilter,
  currentSort,
  onFilterChange,
  onSortChange,
}: FilterBarProps) {
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);
  const filterDropdownRef = useRef<HTMLDivElement>(null);

  const filterOptions: FilterCategory[] = ['all', 'cars', 'pickups', 'suvs'];
  const sortOptions: SortOption[] = ['none', 'price-asc', 'price-desc', 'year-newest', 'year-oldest'];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setIsSortDropdownOpen(false);
      }
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target as Node)) {
        setIsFilterDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSortSelect = (option: SortOption) => {
    onSortChange(option);
    setIsSortDropdownOpen(false);
  };

  const handleFilterSelect = (filter: FilterCategory) => {
    onFilterChange(filter);
    setIsFilterDropdownOpen(false);
  };

  return (
    <div className={styles.filterBar}>
      {/* Desktop filter section */}
      <div className={`${styles.filterSection} ${styles.desktopOnly}`}>
        <span className={styles.filterLabel}>Filtrar por</span>
        <div className={styles.filters}>
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`${styles.filterButton} ${currentFilter === filter ? styles.active : ''}`}
            >
              {FILTER_LABELS[filter]}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile filter dropdown */}
      <div className={`${styles.filterContainer} ${styles.mobileOnly}`} ref={filterDropdownRef}>
        <button
          className={styles.sortButton}
          onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
        >
          Filtrar por
          <span className={styles.dropdownArrow}>▼</span>
        </button>

        {isFilterDropdownOpen && (
          <div className={styles.dropdown}>
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterSelect(filter)}
                className={`${styles.dropdownOption} ${currentFilter === filter ? styles.selected : ''}`}
              >
                {FILTER_LABELS[filter]}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Sort dropdown */}
      <div className={styles.sortContainer} ref={sortDropdownRef}>
        <button
          className={styles.sortButton}
          onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
        >
          Ordenar por
          <span className={styles.dropdownArrow}>▼</span>
        </button>

        {isSortDropdownOpen && (
          <div className={styles.dropdown}>
            {sortOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleSortSelect(option)}
                className={`${styles.dropdownOption} ${currentSort === option ? styles.selected : ''}`}
              >
                {SORT_LABELS[option]}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
