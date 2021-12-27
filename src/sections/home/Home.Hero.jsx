import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import ArrowLink from '../../components/ArrowLink';

const HomeHero = () => {
  return (
    <>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="flex flex-col justify-center">
            <div>
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="xl:inline">The journey so far...</span>
              </h1>
            </div>
            <div>
              <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                Ptolemy, Latin in full Claudius Ptolemaeus, (born c. 100 CE—died
                c. 170 CE), an Egyptian astronomer, mathematician, and
                geographer of Greek descent who flourished in Alexandria during
                the 2nd century CE.
              </p>
            </div>
            <div className="mt-5 sm:mt-8 flex justify-start">
              <ArrowLink to="/blog" text="Read more" />
            </div>
          </div>
          <div className="flex p-4">
            <StaticImage
              src="../../assets/space.svg"
              alt="hero image"
              placeholder="tracedSVG"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
