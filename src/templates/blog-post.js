import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import SEO from '../components/Seo';
import Copyright from '../components/Copyright';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="blog-container">
      <SEO title={post.frontmatter.title} keywords={post.frontmatter.tags} />
      <a href="/" className="link-button all-articles-link">
        All Articles
      </a>
      <main className="blog-post">
        <h1 className="blog-post__title">{post.frontmatter.title}</h1>
        <article className="blog-body">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <footer className="blog-post-footer">
            <p>
              <em>
                By {post.frontmatter.author}. Published {post.frontmatter.date}.
              </em>
            </p>
            <div className="blog-post-tags">
              <ul className="blog-post-tags__ul">
                {post.frontmatter.tags.map(tag => (
                  <li className="blog-post-tags__li" key={tag}>
                    <Link to={`/tags/${tag}/`} className="link-button">
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="blog-post-footer__foot">
              <p>{data.site.siteMetadata.subtitle}</p>
            </div>
            <Copyright />
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
        author
        date(formatString: "DD MMMM YYYY")
        tags
      }
    }
    site {
      siteMetadata {
        subtitle
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
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        subtitle: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPost;
