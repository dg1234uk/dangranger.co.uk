import React from 'react';
import SEO from '../components/Seo';
import PageLayout from '../components/Layouts/page-layout';
import Styles from './about.module.css';

const About = () => (
  <PageLayout>
    <SEO
      title="About me"
      keywords={[`Dan Granger`, `Daniel`, `Granger`, 'Daniel Granger']}
    />
    <main className={Styles.postList}>
      <article className={Styles.post}>
        <h1>About me</h1>
        <p>
          Hello, my name is Daniel Granger. I am currently a hobbyist full-stack
          JavaScript developer.
        </p>
        <p>This blog is a notebook of my projects and discoveries.</p>
      </article>
    </main>
  </PageLayout>
);

export default About;
