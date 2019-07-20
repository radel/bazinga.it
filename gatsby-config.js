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
      options: {
        mdx: false
     }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
         {
          resolve:`gatsby-remark-tumble-media`,
         },
         {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              wrapperStyle: 'max-width:100% !important;'
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-numbered-footnotes` },
          { resolve: `gatsby-remark-smartypants` },
          { resolve: `gatsby-remark-embed-spotify`}
        ],
        remarkPlugins: [require(`remark-slug`)],
        plugins: [ `gatsby-remark-images`, `gatsby-remark-tumble-media` ],
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
