/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

const createTagsPages = (createPage, edges) => {
  const tags = [];

  edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (tags.indexOf(tag) === -1) {
          tags.push(tag);
        }
      });
    }
  });

  tags.forEach(tagName => {
    createPage({
      path: `/tags/${tagName}`,
      component: path.resolve(`./src/templates/tag.js`),
      context: {
        tagName,
      },
    });
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    const { edges } = result.data.allMarkdownRemark;
    createTagsPages(createPage, edges);
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.frontmatter.slug,
        },
      });
    });
  });
};
