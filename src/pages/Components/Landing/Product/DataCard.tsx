import React from 'react';

interface DataCardProps {
  title: string;
  content: string;
  filter: string;
}

const DataCard: React.FC<DataCardProps> = ({ title, content, filter }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md m-2"  data-aos="fade-up"  data-aos-delay="300">
      <h2 className="text-lg font-bold">{title}</h2>
      <p>{content}</p>
      <span className="text-sm text-gray-500">{filter}</span>
    </div>
  );
};

export default DataCard;
