import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import logo from '../images/dg1234uk.png';

const BlogTitle = ({ title, subtitle }) => (
  <div>
    <Link to="/">
      <img src={logo} alt="Logo" className="header__logo" />
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
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default BlogTitle;
