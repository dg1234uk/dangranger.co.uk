import React from 'react';
import PropTypes from 'prop-types';
import Styles from './SocialIcon.module.css';

const Icon = ({ icon }) => (
  <svg className={Styles.social__svg} viewBox={icon.viewBox}>
    <path d={icon.path} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.shape({
    path: PropTypes.string.isRequired,
    viewBox: PropTypes.string.isRequired,
  }).isRequired,
};

export default Icon;
