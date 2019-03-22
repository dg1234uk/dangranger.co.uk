module.exports = {
  siteMetadata: {
    title: `Dan Granger | Blog`,
    description: `A JavaScript blog`,
    author: `@dg1234uk`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
