import React, { useState } from 'react';
import FilterTabs from './FilterTabs';
import DataCard from './DataCard';

interface DataItem {
  title: string;
  content: string;
  filter: string;
}

const data: DataItem[] = [
  { title: 'App 1', content: 'Content for App 1', filter: 'Web Apps' },
  { title: 'App 2', content: 'Content for App 2', filter: 'Web Apps' },
  { title: 'Web 1', content: 'Content for Web 1', filter: 'React Apps' },
  { title: 'Web 2', content: 'Content for Web 2', filter: 'React Apps' },
  { title: 'Design 1', content: 'Content for Design 1', filter: 'WordPress' },
];

const filters = ['All', 'Web Apps', 'React Apps', 'WordPress'];

const FilterableDataTabs: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState('All');

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
  };

  const filteredData = currentFilter === 'All' ? data : data.filter(item => item.filter === currentFilter);

  return (
    <div className="p-4 pt-36" data-aos="fade-up"  data-aos-delay="300" id="project">
      <FilterTabs filters={filters} currentFilter={currentFilter} onFilterChange={handleFilterChange} />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up"  data-aos-delay="300">
        {filteredData.map((item, index) => (
          <DataCard key={index} title={item.title} content={item.content} filter={item.filter} />
        ))}
      </div>
    </div>
  );
};

export default FilterableDataTabs;
