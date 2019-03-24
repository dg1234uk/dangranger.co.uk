import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
// import logo from '../images/dg1234uk.png';

const BlogTitle = ({ data, title, subtitle }) => (
  <div>
    <Link to="/">
      {/* <img src={logo} alt="Logo" className="header__logo" /> */}
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Logo"
        className="header__logo"
      />
    </Link>
    <h1 className="header__title">
      <Link to="/" className="header__link">
        {title}
      </Link>
    </h1>
    <p className="header__intro">{subtitle}</p>
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
              ...GatsbyImageSharpFixed_withWebp
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
