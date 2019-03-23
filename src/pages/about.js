import React from 'react';
import PropTypes from 'prop-types';

import PageLayout from '../components/Layouts/page-layout';

const About = ({ location }) => (
  <PageLayout location={location}>
    <main className="post-list">
      <article className="post">
        <h1>About me</h1>
        <p>I am a JavaScript full-stack developer.</p>
      </article>
    </main>
  </PageLayout>
);

About.propTypes = {
  location: PropTypes.object.isRequired,
};

export default About;
