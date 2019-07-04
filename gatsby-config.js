module.exports = {
  siteMetadata: {
    title: `bazinga.it`,
    author: `Marco Bonomo`,
    description: ``,
    siteUrl: `https://www.bazinga.it/`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/radel`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/radel_`,
      },
      {
        name: `github`,
        url: `https://github.com/radel`
      }
    ]
  },
  plugins: [
    {
      resolve: "gatsby-theme-blog",
      options: {},
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-tumble-media`,
            options: {
              // optional, defaults to 700
              // should be the same as whatever remark-images
              // is using below.
              maxWidth: 700,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // make this be the same as the remark-tumble-media
              // value above
              maxWidth: 700,
              // don't let remark-images make the images too big
              // which breaks the responsive design stuff.
              wrapperStyle: "max-width:100% !important;",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bazinga!`,
        short_name: `Bazinga`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#fdde00`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
