import React from 'react';
import SEO from '../components/Seo';
import PageLayout from '../components/Layouts/page-layout';

const About = () => (
  <PageLayout>
    <SEO
      title="About me"
      keywords={[`Dan Granger`, `Daniel`, `Granger`, 'Daniel Granger']}
    />
    <main className="post-list">
      <article className="post">
        <h1>About me</h1>
        <p>I am a JavaScript full-stack developer.</p>
      </article>
    </main>
  </PageLayout>
);

export default About;
