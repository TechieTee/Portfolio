import React from 'react';

interface FilterTabsProps {
  filters: string[];
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ filters, currentFilter, onFilterChange }) => {
  return (
    <div className="flex items-center justify-center space-x-4"  data-aos="fade-up"  data-aos-delay="300">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 rounded   transition-all duration-300 ease-in-out transform hover:scale-105 ${
            currentFilter === filter ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => onFilterChange(filter)}
        >
         
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
