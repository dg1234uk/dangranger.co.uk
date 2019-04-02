import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import CookieWarning from '../CookieWarning';
import Styles from './page-layout.module.css';

const PageLayout = ({ children }) => (
  <div className={Styles.indexContainer}>
    <Sidebar />
    {children}
    <CookieWarning />
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default PageLayout;
