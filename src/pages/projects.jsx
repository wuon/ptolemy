import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

import ProjectsHero from '../sections/projects/Projects.Hero';
import ProjectsCards from '../sections/projects/Projects.Cards';

const ProjectsPage = ({ data }) => {
  const projects = data.allProjects.nodes;

  return (
    <>
      <SEO title="Projects" />
      <Header />
      <ProjectsHero />
      <ProjectsCards projects={projects} />
      <Footer />
    </>
  );
};

export const query = graphql`
  query {
    allProjects(sort: { fields: date, order: DESC }) {
      nodes {
        id
        name
        url
        technologies
        description
        date(formatString: "MMMM YYYY")
      }
    }
  }
`;

export default ProjectsPage;
