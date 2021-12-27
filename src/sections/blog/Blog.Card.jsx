import React from 'react';
import PropTypes from 'prop-types';

import ArrowLink from '../../components/ArrowLink';

const BlogCard = ({ article }) => {
  const { slug, frontmatter } = article;
  const { title, description, date } = frontmatter;

  return (
    <>
      <div className="flex flex-col justify-start border-gray-500 py-4 md:py-2 md:pl-4 md:border-l-2">
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-3xl font-bold py-2 line-clamp-1 h-12">{title}</p>
        <p className="text-sm line-clamp-2 h-11">{description}</p>
        <div className="flex flex-row mt-4">
          <ArrowLink to={slug} text="Read more" />
        </div>
      </div>
    </>
  );
};

BlogCard.propTypes = {
  article: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.string,
    }),
    id: PropTypes.string,
    slug: PropTypes.string,
  }),
};

export default BlogCard;
