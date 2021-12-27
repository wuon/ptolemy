import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactMap from '../sections/contact/Contact.Map';
import ContactHero from '../sections/contact/Contact.Hero';

const ContactPage = ({ data }) => {
  const socials = data.allSocials.nodes;

  return (
    <>
      <Header />
      <ContactHero />
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-900">
                <table className="min-w-full divide-y divide-gray-500">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-gray-900"
                      >
                        Platform
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-gray-900"
                      >
                        External link
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-gray-900"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-bold text-gray-900"
                      >
                        Last updated
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-500">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm text-gray-900">Email</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <a
                          className="text-sm text-sky-500"
                          href="mailto:hello@world.com"
                        >
                          hello@world.com
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">
                          01/01/2022
                        </span>
                      </td>
                    </tr>
                    {socials.map((social) => (
                      <tr key={social.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-sm text-gray-900">
                              {social.platform}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a
                            className="text-sm text-sky-500"
                            href={social.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {social.username}
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {social.active ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              Inactive
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">
                            {social.lastUpdated}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactMap />
      <Footer />
    </>
  );
};

export const query = graphql`
  query {
    allSocials {
      nodes {
        id
        platform
        username
        active
        link
        lastUpdated
      }
    }
  }
`;

export default ContactPage;
