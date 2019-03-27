import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/Seo';
import PageLayout from '../components/Layouts/page-layout';
import Feed from '../components/Feed';

const IndexPage = ({ data }) => (
  <PageLayout>
    <SEO
      title="Blog"
      keywords={[
        `Dan`,
        `Daniel`,
        `Granger`,
        `Blog`,
        `JavaScript`,
        `Full-stack`,
      ]}
    />
    <Feed posts={data.allMarkdownRemark.edges} />
  </PageLayout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
              category: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
            }).isRequired,
            excerpt: PropTypes.string.isRequired,
          }).isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            slug
            category
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
