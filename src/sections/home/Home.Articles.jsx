import React from 'react';

const HomeArticles = () => {
  return (
    <>
      <div className="container mx-auto pt-8">
        <div className="flex flex-col">
          <p className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Recent articles.
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="h-0.5 w-full bg-gray-500 my-4" />
      </div>
    </>
  );
};

export default HomeArticles;
