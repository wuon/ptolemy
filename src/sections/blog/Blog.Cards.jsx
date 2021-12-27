import React from 'react';
import PropTypes from 'prop-types';
import BlogCard from './Blog.Card';

const BlogCards = ({ articles }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 divide-gray-500 divide-y-2 md:divide-y-0">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </>
  );
};

BlogCards.defaultProps = {
  articles: [],
};

BlogCards.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string,
      }),
      id: PropTypes.string,
      slug: PropTypes.string,
    }),
  ),
};

export default BlogCards;
