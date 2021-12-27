import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/Header';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

import HomeHero from '../sections/home/Home.Hero';
import HomeQuote from '../sections/home/Hero.Quote';
import HomeProjects from '../sections/home/Home.Projects';
import ProjectsCards from '../sections/projects/Projects.Cards';
import HomeArticles from '../sections/home/Home.Articles';
import BlogCards from '../sections/blog/Blog.Cards';

export default function Home({ data }) {
  const projects = data.allProjects.nodes;
  const articles = data.allMdx.nodes.map((article) => {
    return {
      ...article,
      slug: `blog/${article.slug}`,
    };
  });

  return (
    <>
      <SEO title="Home" />
      <Header />
      <HomeHero />
      <HomeQuote />
      <HomeArticles />
      <BlogCards articles={articles} />
      <HomeProjects />
      <ProjectsCards projects={projects} />
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    allProjects(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        id
        name
        url
        technologies
        description
        date(formatString: "MMMM YYYY")
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 2) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
        }
        id
        slug
      }
    }
  }
`;
