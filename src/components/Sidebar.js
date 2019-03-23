import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import BlogTitle from './BlogTitle';
import Nav from './Nav';
import Social from './Social';
import Copyright from './Copyright';

const Sidebar = ({ data }) => {
  const { title, subtitle, author, copyright, menu } = data.site.siteMetadata;
  return (
    <div>
      <header className="header">
        <BlogTitle title={title} subtitle={subtitle} />
        <Nav menu={menu} />
        <Social author={author} />
        <Copyright text={copyright} />
      </header>
    </div>
  );
};

Sidebar.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        menu: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
          }).isRequired
        ).isRequired,
        author: PropTypes.shape({
          contacts: PropTypes.shape({
            twitter: PropTypes.string.isRequired,
            github: PropTypes.string.isRequired,
            rss: PropTypes.string.isRequired,
            codepen: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

const SidebarQuery = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            subtitle
            menu {
              label
              path
            }
            author {
              contacts {
                twitter
                github
                rss
                codepen
              }
            }
          }
        }
      }
    `}
    render={data => <Sidebar data={data} {...props} />}
  />
);

export default SidebarQuery;
