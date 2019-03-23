import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon }) => (
  <svg className="social__svg" viewBox={icon.viewBox}>
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
