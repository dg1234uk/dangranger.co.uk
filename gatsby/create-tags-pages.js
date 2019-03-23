const path = require('path');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.group.forEach(({ tag }) => {
      const tagSlug = `/tag/${tag.fieldValue}`;

      createPage({
        path: tagSlug,
        component: path.resolve('../src/templates/tag.js'),
        context: {
          tag: tag.fieldValue,
        },
      });
    });
  });
};
