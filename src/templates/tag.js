import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import PageLayout from '../components/Layouts/page-layout';
import FeedItem from '../components/FeedItem';

const Tags = ({ data, pageContext }) => (
  <PageLayout>
    <main className="post-list">
      <h1>{pageContext.tagName} Tag</h1>

      {data.allMarkdownRemark.edges.map(edge => (
        <FeedItem node={edge.node} key={edge.node.frontmatter.slug} />
        // <Link to={edge.node.frontmatter.slug}>
        //   <li key={edge.node.frontmatter.slug}>
        //     {edge.node.frontmatter.title}
        //   </li>
        // </Link>
      ))}
    </main>
  </PageLayout>
);

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tagName: PropTypes.string.isRequired,
  }).isRequired,
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
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query($tagName: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tagName] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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

export default Tags;
