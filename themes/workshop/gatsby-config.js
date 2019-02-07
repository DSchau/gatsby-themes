const path = require(`path`);

module.exports = function gatsbyConfig({ content }) {
  return {
    siteMetadata: {
      title: `Your Great Workshop`,
      description: `A description of your workshop in about 160 characters or so`,
      author: `@schaudustin`,
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-layout`,
        options: {
          component: require.resolve(`./src/layouts/index.js`)
        }
      },
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: path.join(
            __dirname,
            `src`,
            `utils`,
            `typography.js`
          ),
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `content`,
          path: content,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-transformer-yaml`,
      {
        resolve: `gatsby-mdx`,
        options: {
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 590,
              },
            },
            {
              resolve: `gatsby-remark-autolink-headers`,
            },
          ],
        },
      },
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-starter-default`,
          short_name: `starter`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: require.resolve(`src/images/gatsby-icon.png`)
        },
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, 'src', 'pages'),
        },
      },
    ],
  };
};
