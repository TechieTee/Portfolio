import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface DataCardProps {
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  githubLink?: string;
  liveLink?: string;
   filter: string; 

}

const DataCard: React.FC<DataCardProps> = ({
  title,
  description,
  tags,
  image,
  githubLink,
  liveLink,
  filter,
}) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl max-w-sm"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold !text-gray-800">{title}</h2>
          <p className="mt-2 text-gray-600 text-sm">{description}</p>
       
        </div>

        {/* Tags */}
        {tags && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-4 mt-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 hover:text-black transition"
            >
              <Github size={18} /> <span className="text-sm">Code</span>
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 hover:text-black transition"
            >
              <ExternalLink size={18} /> <span className="text-sm">Live</span>
            </a>
          )}
        </div>
          <span className="text-sm text-gray-500 hidden">{filter}</span> 
      </div>
    </div>
  );
};

export default DataCard;



