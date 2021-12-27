import React from 'react';
import PropTypes from 'prop-types';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';

const ExternalArrowLink = ({ to, text }) => {
  return (
    <a href={to} target="_blank" rel="noreferrer">
      <div className="flex items-center justify-center font-bold text-sky-500 hover:text-sky-600">
        {text}
        <div className="w-6 ml-1">
          <ArrowNarrowRightIcon />
        </div>
      </div>
    </a>
  );
};

ExternalArrowLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
};

export default ExternalArrowLink;
