import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import SEO from '../components/Seo';
import Copyright from '../components/Copyright';
import CookieWarning from '../components/CookieWarning';
import Styles from './blog-post.module.css';

import '../styles/prism-okaidia.css';
// import '../styles/dracula-prism.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className={Styles.blogContainer}>
      <SEO title={post.frontmatter.title} keywords={post.frontmatter.tags} />
      <a href="/" className={Styles.allArticlesLink}>
        All Articles
      </a>
      <main className={Styles.blogPost}>
        <h1 className={Styles.blogPost__title}>{post.frontmatter.title}</h1>
        <article>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <footer className={Styles.blogPostFooter}>
            <p>
              <em>
                By {post.frontmatter.author}. Published {post.frontmatter.date}.
              </em>
            </p>
            <div>
              <ul className={Styles.blogPostTags__ul}>
                {post.frontmatter.tags.map(tag => (
                  <li className={Styles.blogPostTags__li} key={tag}>
                    <Link to={`/tags/${tag}/`} className={Styles.linkButton}>
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={Styles.blogPostFooter__foot}>
              <p>{data.site.siteMetadata.subtitle}</p>
            </div>
            <Copyright />
          </footer>
        </article>
      </main>
      <CookieWarning />
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
