import React from 'react';
import PropTypes from 'prop-types';
import FeedItem from './FeedItem';

const Feed = ({ posts }) => (
  <main className="post-list">
    {posts.map(({ node }) => (
      <FeedItem node={node} key={node.frontmatter.slug} />
    ))}
  </main>
);

Feed.propTypes = {
  posts: PropTypes.arrayOf(
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
  ),
};

export default Feed;
