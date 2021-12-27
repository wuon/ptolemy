import React from 'react';
import { Link } from 'gatsby';
import Menu from '../Menu';

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex py-4 border-b-4 border-gray-900 justify-between items-center">
        <div>
          <Link to="/">
            <p className="text-5xl sm:text-7xl font-extrabold select-none">
              ptolemy.
            </p>
          </Link>
        </div>
        <div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
