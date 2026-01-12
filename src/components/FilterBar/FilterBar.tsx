'use client';

import { FilterCategory, SortOption, FILTER_LABELS, SORT_LABELS } from '@/types/filters';
import { useDropdown } from '@/hooks/useDropdown';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  currentFilter: FilterCategory;
  currentSort: SortOption;
  onFilterChange: (filter: FilterCategory) => void;
  onSortChange: (sort: SortOption) => void;
}

// Helper function to format sort labels with bold keywords
function formatSortLabel(option: SortOption): React.ReactNode {
  const label = SORT_LABELS[option];

  switch (option) {
    case 'price-asc':
      return <>De <strong>menor</strong> a <strong>mayor</strong> precio</>;
    case 'price-desc':
      return <>De <strong>mayor</strong> a <strong>menor</strong> precio</>;
    case 'year-newest':
      return <>Más <strong>nuevos</strong> primero</>;
    case 'year-oldest':
      return <>Más <strong>viejos</strong> primero</>;
    default:
      return label;
  }
}

export default function FilterBar({
  currentFilter,
  currentSort,
  onFilterChange,
  onSortChange,
}: FilterBarProps) {
  // Use custom dropdown hook for both dropdowns
  const {
    isOpen: isSortOpen,
    dropdownRef: sortRef,
    toggle: toggleSort,
    close: closeSort,
  } = useDropdown();

  const {
    isOpen: isFilterOpen,
    dropdownRef: filterRef,
    toggle: toggleFilter,
    close: closeFilter,
  } = useDropdown();

  const filterOptions: FilterCategory[] = ['all', 'cars', 'pickups', 'suvs'];
  const sortOptions: SortOption[] = ['none', 'price-asc', 'price-desc', 'year-newest', 'year-oldest'];

  const handleSortSelect = (option: SortOption) => {
    onSortChange(option);
    closeSort();
  };

  const handleFilterSelect = (filter: FilterCategory) => {
    onFilterChange(filter);
    closeFilter();
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
      <div className={`${styles.filterContainer} ${styles.mobileOnly}`} ref={filterRef}>
        <button
          className={styles.dropdownButton}
          onClick={toggleFilter}
        >
          Filtrar por
          <span className={styles.dropdownArrow}>▼</span>
        </button>

        {isFilterOpen && (
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
      <div className={styles.sortContainer} ref={sortRef}>
        <button
          className={styles.dropdownButton}
          onClick={toggleSort}
        >
          Ordenar por
          <span className={styles.dropdownArrow}>▼</span>
        </button>

        {isSortOpen && (
          <div className={styles.dropdown}>
            {sortOptions.map((option) => (
              <button
                key={option}
                onClick={() => handleSortSelect(option)}
                className={`${styles.dropdownOption} ${currentSort === option ? styles.selected : ''}`}
              >
                {formatSortLabel(option)}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
