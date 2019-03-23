import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import PageLayout from '../components/Layouts/page-layout';

const Tags = ({ data }) => (
  <PageLayout>
    <main className="post-list">
      <article className="post">
        <h1>Tags</h1>
        <ul>
          {data.allMarkdownRemark.group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`tags/${tag.fieldValue}`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </main>
  </PageLayout>
);

Tags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default Tags;
