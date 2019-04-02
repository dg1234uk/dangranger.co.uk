import React from 'react';
import PropTypes from 'prop-types';

import Contact from '../Contact';

const Social = ({ author }) => {
  const { contacts } = author;
  return (
    <div className="social">
      <ul className="social__ul">
        {Object.keys(contacts).map(name => (
          <Contact socialName={name} link={contacts[name]} key={name} />
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
      rss: PropTypes.string.isRequired,
      codepen: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

export default Social;
