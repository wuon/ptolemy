import React from 'react';
import PropTypes from 'prop-types';

import ExternalArrowLink from '../../components/ExternalArrowLink';

const ProjectsCards = ({ projects }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 divide-gray-500 divide-y-2 md:divide-y-0">
        {projects.map((project) => (
          <div
            className="flex flex-col justify-start border-gray-500 py-4 md:py-2 md:pl-4 md:border-l-2"
            key={project.id}
          >
            <p className="text-sm text-gray-500 line-clamp-1 h-6">
              {project.date}
            </p>
            <p className="text-3xl font-bold py-2 line-clamp-1 h-12">
              {project.name}
            </p>
            <p className="text-sm line-clamp-1 h-6">
              {project.technologies.join(', ')}
            </p>
            <p className="mt-8 line-clamp-2 h-12">{project.description}</p>
            <div className="flex flex-row mt-4">
              <ExternalArrowLink to={project.url} text="Learn more" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ProjectsCards.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
      date: PropTypes.string,
    }),
  ),
};

export default ProjectsCards;
