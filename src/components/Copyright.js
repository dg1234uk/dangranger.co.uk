import React from 'react';
import PropTypes from 'prop-types';

const Copyright = ({ text }) => (
  <div className="copyright">
    <span>{text}</span>
  </div>
);

Copyright.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Copyright;
