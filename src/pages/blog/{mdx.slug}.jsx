import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import SEO from '../../components/SEO';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BlogPost = ({ data }) => {
  const { body, slug, frontmatter } = data.mdx;
  const { date, title, description } = frontmatter;

  return (
    <>
      <SEO title={title} description={description} />
      <Header />
      <div className="container mx-auto py-8">
        <div className="flex flex-row">
          <Link to="/">
            <span className="text-gray-500 hover:text-gray-900">home</span>
          </Link>
          &nbsp;/&nbsp;
          <Link to="/blog">
            <span className="text-gray-500 hover:text-gray-900">blog</span>
          </Link>
          &nbsp;/&nbsp;
          <span className="text-gray-900 underline underline-offset-2 decoration-gray-900 decoration-2 line-clamp-1">
            {slug.replace('/', '')}
          </span>
        </div>
        <p className="mt-4 text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl md:text-5xl">
          {title}
        </p>
        <p className="mt-4">{date}</p>
        <div className="h-0.5 w-full bg-gray-500 my-4" />
        <div className="py-8">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
      }
      body
      slug
    }
  }
`;

export default BlogPost;
