import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import SEO from '../components/Seo';
import PageLayout from '../components/Layouts/page-layout';
import Styles from './tags.module.css';

const Tags = ({ data }) => (
  <PageLayout>
    <SEO title="Tags" keywords={[`Dan Granger`, `blog`, `tags`]} />
    <main className={Styles.postList}>
      <article className={Styles.post}>
        <h1>Tags</h1>
        {data.allMarkdownRemark.group <= 0 && (
          <h2>There are currently no tags 😭.</h2>
        )}
        <ul>
          {data.allMarkdownRemark.group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${tag.fieldValue}`}>
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
