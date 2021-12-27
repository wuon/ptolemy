import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { MailIcon, BookOpenIcon, CodeIcon } from '@heroicons/react/outline';

const solutions = [
  {
    name: 'Blog',
    description: 'Read some of my updates',
    href: '/blog',
    icon: BookOpenIcon,
  },
  {
    name: 'Projects',
    description: 'View some of my creations',
    href: '/projects',
    icon: CodeIcon,
  },
  {
    name: 'Contact',
    description: 'Get in touch with me',
    href: '/contact',
    icon: MailIcon,
  },
];

const Menu = () => {
  return (
    <div className="">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="bg-white p-2 inline-flex items-center justify-center hover:bg-gray-100 focus:outline-none">
              {open ? (
                <XIcon className="h-6 w-6 text-red-500" aria-hidden="true" />
              ) : (
                <MenuIcon
                  className="h-6 w-6 text-gray-900"
                  aria-hidden="true"
                />
              )}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 right-0 mt-3 w-max sm:w-screen max-w-md">
                <div className="overflow-hidden shadow-lg ring-1 ring-black">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <Link key={item.name} to={item.href}>
                        <div className="flex items-center p-2 -m-3 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                            <item.icon className="text-gray-900 h-6 w-6" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-50">
                    <a
                      href="https://github.com/wuon/ptolemy"
                      className="flow-root px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Ptolemy
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        A gatsby template built by wuon
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default Menu;
