import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import CookieWarning from '../CookieWarning';

const PageLayout = ({ children }) => (
  <div className="index-container">
    <Sidebar />
    {children}
    <CookieWarning />
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default PageLayout;
