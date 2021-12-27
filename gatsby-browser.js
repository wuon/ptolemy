import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import '@fontsource/poppins';
import './src/css/index.css';

require('prismjs/themes/prism-solarizedlight.css');

const MyH1 = (props) => (
  <h1 className="font-bold text-2xl sm:text-3xl mb-2 mt-4" {...props} />
);
const MyH2 = (props) => (
  <h1 className="font-bold text-xl sm:text-2xl mb-2 mt-4" {...props} />
);
const MyH3 = (props) => (
  <h1 className="font-bold text-lg sm:text-xl mb-2 mt-4" {...props} />
);
const MyH4 = (props) => (
  <h1 className="font-bold text-base sm:text-lg mb-2 mt-4" {...props} />
);
const MyParagraph = (props) => (
  <p className="leading-relaxed text-base mb-2" {...props} />
);
const MyBlockquote = (props) => (
  <div className="my-4 pt-4 pb-2 px-2 border-l-2 bg-zinc-50 border-gray-500">
    <blockquote {...props}></blockquote>
  </div>
);
const MyPre = (props) => (
  <pre
    className="my-4 py-4 px-2 border bg-zinc-50 border-gray-500 overflow-x-auto"
    {...props}
  />
);
const MyBreak = (props) => (
  <hr className="h-0.5 w-full bg-gray-500 my-4" {...props} />
);
const MyTable = (props) => (
  <table
    className="min-w-full divide-y divide-gray-500 overflow-x-auto my-4"
    {...props}
  />
);
const MyTableCellHead = (props) => (
  <th className="text-base font-bold text-left" {...props} />
);
const MyLink = (props) => (
  <a className="text-sky-500 hover:text-sky-600" {...props}></a>
);

const components = {
  p: MyParagraph,
  h1: MyH1,
  h2: MyH2,
  h3: MyH3,
  h4: MyH4,
  blockquote: MyBlockquote,
  pre: MyPre,
  hr: MyBreak,
  table: MyTable,
  th: MyTableCellHead,
  a: MyLink,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
