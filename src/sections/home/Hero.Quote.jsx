import React from 'react';

const HeroQuote = () => {
  return (
    <>
      <div className="container mx-auto py-8">
        <div className="flex flex-col p-12 bg-zinc-50 border-l-4 border-gray-500">
          <p className="font-serif text-4xl">
            “Mortal as I am, I know that I am born for a day. But when I follow
            at my pleasure the serried multitude of the stars in their circular
            course, my feet no longer touch the earth.”
          </p>
          <p className="text-gray-500 text-sm mt-8">- Ptolemy</p>
        </div>
      </div>
    </>
  );
};

export default HeroQuote;
