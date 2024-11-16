import React, { useState } from 'react';
import FilterTabs from './FilterTabs';
import DataCard from './DataCard';



export const GitHubLink = ({ link }: { link: string }) => {
  return (
    <a href={link}>Github Link</a>
  )
}


export const PreviewLink = ({ link }: { link: string }) => {
  return (
    <a href={link}>Preview Link</a>
  )
}




interface DataItem {
  title: any;
  content: any;
  filter: string;
}

const data: DataItem[] = [

  { title: <GitHubLink link='https://github.com/TechieTee/Product-Listing-App' />, content: <PreviewLink link='https://products-listing.netlify.app/' />, filter: 'React App' },
  { title: <GitHubLink link='https://github.com/TechieTee/transmonitor1' />, content: <PreviewLink link='https://transmonitor1.netlify.app/' />, filter: 'React App' },
  { title: <GitHubLink link='https://github.com/TechieTee/StarWars' />, content: <PreviewLink link='https://star-wars001.netlify.app/login' />, filter: 'React App' },
  { title: <GitHubLink link='https://github.com/TechieTee/Typing_Game_App' />, content: <PreviewLink link='https://accurate-speedy.netlify.app/' />, filter: 'React App' },
  { title: <GitHubLink link='https://github.com/TechieTee/Booking-Form' />, content: <PreviewLink link='https://booking-form.netlify.app/' />, filter: 'React App' },
  { title: <GitHubLink link='https://github.com/TechieTee/telesoftas' />, content: <PreviewLink link='https://telesoftas01.netlify.app/' />, filter: 'React App' },
  { title: <GitHubLink link='https://github.com/TechieTee/EdenServices' />, content: <PreviewLink link='https://eden-services.netlify.app/' />, filter: 'React App' },
  { title: <GitHubLink link='https://github.com/TechieTee/QR-code-component' />, content: <PreviewLink link='https://fma-qr-code.netlify.app/' />, filter: 'React App' },
  { title: <GitHubLink link='https://github.com/TechieTee/TalentQl' />, content: <PreviewLink link='https://talentql-fe.netlify.app/' />, filter: 'React App' }, 

  { title: <GitHubLink link='https://joble.app/' />, content: <PreviewLink link='https://joble.app/' />, filter: 'Web App' },
  
  { title: <GitHubLink link='https://joble.app/' />, content: <PreviewLink link='https://joble.app/' />, filter: 'Web App' },
  
  { title: <GitHubLink link='https://ko-ko.app/' />, content: <PreviewLink link='https://ko-ko.app/' />, filter: 'Web App' },
  { title: <GitHubLink link='https://zarttalent.org/' />, content: <PreviewLink link='https://zarttalent.org/' />, filter: 'Web App' },
  { title: <GitHubLink link='https://15wins.com/' />, content: <PreviewLink link='https://15wins.com/' />, filter: 'Web App' },
];

const filters = ['All', 'React App', 'Web App'];

const FilterableDataTabs: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState('All');

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
  };

  const filteredData = currentFilter === 'All' ? data : data.filter(item => item.filter === currentFilter);

  return (
    <>
                           
    <div className="p-4 pt-36" data-aos="fade-up" data-aos-delay="300" id="project"> <h1 className="mb-0 leading-normal capitalize text-center pb-14">Featured Projects</h1>
      <FilterTabs filters={filters} currentFilter={currentFilter} onFilterChange={handleFilterChange} />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="300">
        {filteredData.map((item, index) => (
          <DataCard key={index} title={item.title} content={item.content} filter={item.filter} />
        ))}
      </div>
    </div></>
  );
};

export default FilterableDataTabs;
