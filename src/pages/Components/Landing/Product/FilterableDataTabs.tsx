import React, { useState } from 'react';
import FilterTabs from './FilterTabs';
import DataCard from './DataCard';
import placeholder from "assets/images/placeholder.jpg";


interface DataItem {
  title: string,
  description: string,
  githublink: any;
  livelink: any;
  filter: string;
}

const data: DataItem[] = [

  { title:'Evolve Quiz Plugin', description:'A body quiz custom plugin built for Med Spa Services.', githublink: 'https://github.com/TechieTee/evolve-quiz', livelink:'https://evolvewebdev.wpengine.com/treatment-quiz/?utm_source=evolvemedspadev&utm_medium=organic', filter: 'React Projects' },
  { title:'Transmonitor', description:'This is an Invoicing Application', githublink: 'https://github.com/TechieTee/transmonitor1', livelink: 'https://transmonitor1.netlify.app/', filter: 'React Projects' },
  { title:'StarWars', description:'StarWars Application', githublink: 'https://github.com/TechieTee/StarWars', livelink:'https://star-wars001.netlify.app/login', filter: 'React Projects' },
  { title:'Typing Game App', description:'A simple app built with React + NextJS for users to test and improve their typing skills. ', githublink: 'https://github.com/TechieTee/Typing_Game_App', livelink:'https://accurate-speedy.netlify.app/', filter: 'React Projects' },
  { title:'News Aggregator', description:'A modern news aggregator built with React, TypeScript, Vite, Tailwind CSS, TanStack Query, and Redux Toolkit.', githublink: 'https://github.com/TechieTee/news-aggregator', livelink:'https://news-aggregator-bay.vercel.app/', filter: 'React Projects' },
  { title:'Telesoftas', description:'Empowering Non-Tech Founders to Build & Grow Tech Businesses.', githublink: 'https://github.com/TechieTee/telesoftas', livelink:'https://telesoftas01.netlify.app/', filter: 'React Projects' },
  { title:'Eden Services', description:'Review your Plan and Services', githublink: 'https://github.com/TechieTee/EdenServices', livelink:'https://eden-services.netlify.app/', filter: 'React Projects' },
  { title:'Product Listing Application', description:'Created Product Listing Application using React/NextJs and TailwindCSS for an e-commerce application', githublink: 'https://github.com/TechieTee/Product-Listing-App', livelink:'https://products-listing.netlify.app/', filter: 'React Projects' },

  { title:'Paysys Merchant', description:'A Fintech application with payment link, split payment, bulk payment, and invoicing modules.', githublink: '/', livelink:'https://www.paysysmerchant.ng/', filter: 'React Projects' },
  { title:'Solar Marketplace Nigeria', description:'Connects and facilitates business, trade, and investment between local and foreign stakeholders.', githublink: '/', livelink:'https://solarmarketplacenigeria.com/', filter: 'React Projects' }, 


  { title:'Joble', description:'An AI-powered platform designed to streamline work processes.', githublink: '', livelink:'https://joble.app/', filter: 'Wordpress Projects' },
  { title:'13th Scent Perfumery', description:'An E-commerce website for purchasing perfumes, home fragrances, and body mists.', githublink: '', livelink:'https://13thscentsperfumery.com/', filter: 'Wordpress Projects' },
  { title:'Louiversal Music', description:' A music label website showcasing the label artist music and video portfolio.', githublink: '', livelink:'https://louiversalmusic.com/', filter: 'Wordpress Projects' },
  { title:'Mail Helpa', description:'A platform that gives developers and businesses the ability to configure and send bulk mails as quickly as possible.', githublink: '', livelink:'https://mailhelpa.com/', filter: 'Wordpress Projects' },
  { title:'Yewandes Braids UK', description:'A hair styling booking web app with an online store where users can order hair products and pay online.', githublink: '', livelink:'https://yewandesbraids.co.uk', filter: 'Wordpress Projects' },
  { title: "Shaddy's Kitchen UK", description:'A food eCommerce website where users can order food and pay using their credit/debit card or bank transfer.', githublink: '', livelink:'https://kitchen.shaddysventures.co.uk/', filter: 'Wordpress Projects' },
  { title:'Sij Logistics', description:'A web application where users can track and check their shipping information.', githublink: '', livelink:'https://sijlogisticsng.com/', filter: 'Wordpress Projects' },
  { title:'Zarttalent', description:'Zarttalent empoweres the next generation of tech talent through its skill-focused training programs.', githublink: '', livelink:'https://zarttalent.org/', filter: 'Wordpress Projects' },
  { title:'15Wins', description:'A digital acceleration platform to guide startup founders through every step of the startup journey.', githublink: '', livelink:'https://15wins.com/', filter: 'Wordpress Projects' },
];

const filters = ['All Projects', 'React Projects', 'Wordpress Projects'];

const FilterableDataTabs: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState('All Projects');

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
  };

  const filteredData = currentFilter === 'All Projects' ? data : data.filter(item => item.filter === currentFilter);

  return (
    <>
                           
    <div className="p-4 pt-36" data-aos="fade-up" data-aos-delay="300" id="project"> <h1 className="mb-0 leading-normal capitalize text-center pb-8">Featured Projects</h1>
      <FilterTabs filters={filters} currentFilter={currentFilter} onFilterChange={handleFilterChange} />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="300">
        {filteredData.map((item, index) => (
        
          <DataCard key={index}
  title={item.title}
  filter={item.filter} 
  description={item.description}
  tags={["React", "Tailwind", "REST API"]}
  image={placeholder}
  
  githubLink={item.githublink}
  liveLink={item.livelink}
/>

        ))}
      </div>
    </div></>
  );
};

export default FilterableDataTabs;
