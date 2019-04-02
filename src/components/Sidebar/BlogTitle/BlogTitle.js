import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Styles from './BlogTitle.module.css';

const BlogTitle = ({ data, title, subtitle }) => (
  <div>
    <Link to="/">
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Logo"
        className={Styles.header__logo}
      />
    </Link>
    <h1 className={Styles.header__title}>
      <Link to="/" className={Styles.header__link}>
        {title}
      </Link>
    </h1>
    <p className={Styles.header__intro}>{subtitle}</p>
  </div>
);

BlogTitle.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const BlogTitleQuery = props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "dg1234uk.png" }) {
          childImageSharp {
            fixed(width: 75) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => <BlogTitle data={data} {...props} />}
  />
);

export default BlogTitleQuery;
// export default BlogTitle;
