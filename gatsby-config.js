module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Bazinga!`,
    // Default title of the page
    siteTitleAlt: `I'm back, until I'm Not.`,
    // Can be used for e.g. JSONLD
    siteHeadline: `This is no time for caution`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://www.bazinga.it`,
    // Used for SEO
    siteDescription: ``,
    // Will be set on the <html /> tag
    siteLanguage: `it`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@radel`,
    // Links displayed in the header on the right side
    externalLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com/radel`,
      },
      {
        name: `Instagram`,
        url: `https://www.instagram.com/radel_`,
      },
    ],
    // Navigation links
    navigation: [
      {
        title: `Blog`,
        slug: `/blog`,
      },
    ],
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        mdx: false,
        showLineNumbers: false,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `twitter`,
            url: `https://twitter.com/radel`,
          },
          {
            name: `github`,
            url: `https://github.com/radel`,
          },
          {
            name: `instagram`,
            url: `https://instagram.com/radel_`,
          },
          {
            name: `linkedin`,
            url: `https://www.linkedin.com/marcobonomo/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-tumble-media`,
            options: {
              maxWidth: 920,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: true,
              maxWidth: 920,
              wrapperStyle: "max-width:100% !important; padding: 0; margin: 0;",
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-numbered-footnotes` },
          { resolve: `gatsby-remark-smartypants` },
          { resolve: `gatsby-remark-embed-spotify` },
        ],
        remarkPlugins: [],
        plugins: [`gatsby-remark-images`, `gatsby-remark-tumble-media`],
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
