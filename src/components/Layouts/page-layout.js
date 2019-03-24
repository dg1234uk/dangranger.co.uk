import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';

const PageLayout = ({ children }) => (
  <div className="index-container">
    <Sidebar />
    {children}
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default PageLayout;
