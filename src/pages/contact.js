import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/Seo';
import SocialIcon from '../components/Sidebar/Social/SocialContact/SocialIcon';
import getIcon from '../utils/get-icon';
import PageLayout from '../components/Layouts/page-layout';
import Styles from './contact.module.css';

const ContactMe = ({ data }) => (
  <PageLayout>
    <SEO title="Contact me" />
    <main className={Styles.postList}>
      <article className={Styles.post}>
        <h1>Contact me</h1>
        <p>If you would like to get in contact with me please do so via:</p>
        <ul>
          <li>
            <SocialIcon icon={getIcon('twitter')} />{' '}
            <a href={data.site.siteMetadata.author.contacts.twitter}>
              Twitter - @dg1234uk
            </a>
          </li>
          <li>
            <SocialIcon icon={getIcon('github')} />{' '}
            <a href={data.site.siteMetadata.author.contacts.github}>
              Github - dg1234uk
            </a>
          </li>
          <li>
            <SocialIcon icon={getIcon('codepen')} />{' '}
            <a href={data.site.siteMetadata.author.contacts.codepen}>
              Codepen - dg1234uk
            </a>
          </li>
        </ul>
      </article>
    </main>
  </PageLayout>
);

ContactMe.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        author: PropTypes.shape({
          contacts: PropTypes.shape({
            twitter: PropTypes.string.isRequired,
            github: PropTypes.string.isRequired,
            codepen: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        author {
          contacts {
            twitter
            github
            codepen
          }
        }
      }
    }
  }
`;

export default ContactMe;
