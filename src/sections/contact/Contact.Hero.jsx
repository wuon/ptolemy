import { Link } from 'gatsby';
import React from 'react';

const ContactHero = () => {
  return (
    <>
      <div className="container mx-auto pt-8">
        <div className="flex flex-row">
          <Link to="/">
            <span className="text-gray-500 hover:text-gray-900">home</span>
          </Link>
          &nbsp;/&nbsp;
          <span className="text-gray-900 underline underline-offset-2 decoration-gray-900 decoration-2 line-clamp-1">
            contact
          </span>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Contact.
          </p>
          <p className="mt-4">
            Looking to connect? Feel free to add me on the listed platforms
            below!
          </p>
        </div>
        <div className="h-0.5 w-full bg-gray-500 my-4" />
      </div>
    </>
  );
};

export default ContactHero;
