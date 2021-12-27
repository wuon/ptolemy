import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

import BlogCards from '../sections/blog/Blog.Cards';
import BlogHero from '../sections/blog/Blog.Hero';

const BlogPage = ({ data }) => {
  const articles = data.allMdx.nodes;

  return (
    <>
      <SEO title="Blog" />
      <Header />
      <BlogHero />
      <BlogCards articles={articles} />
      <Footer />
    </>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

export default BlogPage;
