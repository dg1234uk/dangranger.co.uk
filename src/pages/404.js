import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/Seo';
import PageLayout from '../components/Layouts/page-layout';

const NotFoundPage = () => (
  <PageLayout>
    <SEO title="Page not found" />
    <main className="post-list">
      <article className="post">
        <h1>404 - No Page Found</h1>
        <p>
          There's nothing here <Link to="/">return home</Link>
        </p>
      </article>
    </main>
  </PageLayout>
);

export default NotFoundPage;
