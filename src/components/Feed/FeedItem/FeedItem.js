import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Styles from './FeedItem.module.css';

const FeedItem = ({ node }) => (
  <article className={Styles.post}>
    <header className={Styles.post__info}>
      <time className={Styles.post__date}>{node.frontmatter.date}</time>
      <Link
        to={`/tags/${node.frontmatter.category}`}
        className={Styles.post__tags}
      >
        {node.frontmatter.category}
      </Link>
    </header>
    <h2 className={Styles.post__title}>
      <Link to={node.frontmatter.slug} className={Styles.post__link}>
        {node.frontmatter.title}
      </Link>
    </h2>
    <p className={Styles.post__excerpt}>{node.excerpt}</p>
    <Link to={node.frontmatter.slug} className={Styles.post__link}>
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
