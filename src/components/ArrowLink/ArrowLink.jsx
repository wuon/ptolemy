import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';

const ArrowLink = ({ to, text }) => {
  return (
    <Link to={to}>
      <div className="flex items-center justify-center font-bold text-sky-500 hover:text-sky-600">
        {text}
        <div className="w-6 ml-1">
          <ArrowNarrowRightIcon />
        </div>
      </div>
    </Link>
  );
};

ArrowLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
};

export default ArrowLink;
