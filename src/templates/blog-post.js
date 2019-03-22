import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="blog-container">
      <a href="/" className="all-articles-link">
        All Articles
      </a>
      <main className="blog-post">
        <h1 className="blog-post__title">{post.frontmatter.title}</h1>
        <article className="blog-body">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <footer className="blog-post-footer">
            <p>
              <em>Published {post.frontmatter.date}</em>
            </p>
            <div className="blog-post-tags">
              <ul className="blog-post-tags__ul">
                {post.frontmatter.tags.map(tag => (
                  <li className="blog-post-tags__li">
                    <Link
                      to={`/tags/${tag.toLowerCase()}/`}
                      className="blog-post-tags__link"
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="blog-post-footer__foot">
              <p>
                Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
                diam. Sed arcu.
              </p>
              <p>SOCIAL LINKS</p>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.object.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPost;
