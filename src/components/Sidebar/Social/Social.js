import React from 'react';
import PropTypes from 'prop-types';

import SocialContact from './SocialContact';
import Styles from './Social.module.css';

const Social = ({ author }) => {
  const { contacts } = author;
  return (
    <div className={Styles.social}>
      <ul className={Styles.social__ul}>
        {Object.keys(contacts).map(name => (
          <SocialContact socialName={name} link={contacts[name]} key={name} />
        ))}
      </ul>
    </div>
  );
};

Social.propTypes = {
  author: PropTypes.shape({
    contacts: PropTypes.shape({
      twitter: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      codepen: PropTypes.string.isRequired,
      rss: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default Social;
