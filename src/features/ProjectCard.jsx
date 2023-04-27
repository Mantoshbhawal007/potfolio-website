import React from 'react';

const ProjectCard = ({ image, name, description, link, techStack }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black text-white">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          Project Link
        </a>
        <div className="inline-block bg-yellow-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {techStack}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
