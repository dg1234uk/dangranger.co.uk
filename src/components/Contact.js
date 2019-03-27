import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import getIcon from '../utils/get-icon';

const Contact = ({ socialName, link }) => (
  <li className="social__li">
    <a href={link} aria-label={socialName} className="social__link">
      <Icon icon={getIcon(socialName)} />
    </a>
  </li>
);

Contact.propTypes = {
  socialName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Contact;
