import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ArrowLink from '../components/ArrowLink';

const Page404 = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto pt-8">
        <div className="flex flex-col">
          <p className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl md:text-5xl">
            404 Error.
          </p>
          <p className="mt-4">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="mt-5 sm:mt-8 flex justify-start">
            <ArrowLink to="/" text="Back to home" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page404;
