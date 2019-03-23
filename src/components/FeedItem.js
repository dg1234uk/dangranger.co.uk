import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const FeedItem = ({ node }) => (
  <article className="post">
    <header className="post__info">
      <time className="post__date">{node.frontmatter.date}</time>
      <Link
        to={`/tags/${node.frontmatter.category}`}
        className="post__tags post__link"
      >
        {node.frontmatter.category}
      </Link>
    </header>
    <h2 className="post__title">
      <Link to={node.frontmatter.slug} className="post__link">
        {node.frontmatter.title}
      </Link>
    </h2>
    <p className="post__excerpt">{node.excerpt}</p>
    <Link to={node.frontmatter.slug} className="post__link">
      Read
    </Link>
  </article>
);

FeedItem.propTypes = {
  node: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeedItem;
