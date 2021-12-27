import { Link } from 'gatsby';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="pt-8 pb-32 border-t-4 border-gray-900 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="col-span-1 flex flex-col">
              <p className="font-bold pb-2 text-sm">Directory</p>
              <Link
                className="text-gray-500 text-sm hover:text-gray-900"
                to="/"
              >
                Home
              </Link>
              <Link
                className="text-gray-500 text-sm hover:text-gray-900"
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className="text-gray-500 text-sm hover:text-gray-900"
                to="/projects"
              >
                Projects
              </Link>
              <Link
                className="text-gray-500 text-sm hover:text-gray-900"
                to="/contact"
              >
                Contact
              </Link>
            </div>
            <div className="col-span-1 flex flex-col">
              <p className="font-bold pb-2 text-sm">Development</p>
              <a
                className="text-gray-500 text-sm hover:text-gray-900"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                className="text-gray-500 text-sm hover:text-gray-900"
                href="https://leetcode.com"
                target="_blank"
                rel="noreferrer"
              >
                Leetcode
              </a>
              <a
                className="text-gray-500 text-sm hover:text-gray-900"
                href="https://www.npmjs.com"
                target="_blank"
                rel="noreferrer"
              >
                npm
              </a>
            </div>
            <div className="col-span-1 flex flex-col">
              <p className="font-bold pb-2 text-sm">Social</p>
              <a
                className="text-gray-500 text-sm hover:text-gray-900"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="text-gray-500 text-sm hover:text-gray-900"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-2">
              <p className="font-bold pb-2 text-sm">General Enquiries</p>
              <a
                className="text-sky-500 text-md hover:text-sky-600"
                href="mailto:hello@world.com"
              >
                hello@world.com
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-16">
            <p className="text-gray-500 text-xs">with love and passion,</p>
            <p className="text-gray-500 text-xs">ptolemy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
