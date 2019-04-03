import React from 'react';
import PropTypes from 'prop-types';
import SocialIcon from './SocialIcon';
import getIcon from '../../../../utils/get-icon';
import Styles from './SocialContact.module.css';

const SocialContact = ({ socialName, link }) => (
  <li className={Styles.social__li}>
    <a
      href={link}
      aria-label={socialName}
      className={Styles.social__link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <SocialIcon icon={getIcon(socialName)} />
    </a>
  </li>
);

SocialContact.propTypes = {
  socialName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SocialContact;
