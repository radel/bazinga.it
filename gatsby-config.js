module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Bazinga`,
    // Default title of the page
    siteTitleAlt: `Marco bonomo's blog`,
    siteCopyright: `Marco Bonomo`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Cooper, this is no time for caution`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://www.bazinga.it`,
    // Used for SEO
    siteDescription: `Hi! I'm Marco, I’m a full stack developer. I do things in php and javascript.`,
    // Will be set on the <html /> tag
    siteLanguage: `it`,
    titleTemplate: "%s · Bazinga",
    // Used for og:image and must lekoartsbe placed inside the `static` folder
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
        url: `https://www.instagram.com/radel_/`,
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
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400,
            },
          },
          "gatsby-remark-responsive-iframe",
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
              prompt: {
                user: "marco",
                host: "hoth",
                global: false,
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/portfolio`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bazinga`,
        short_name: `bazinga`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteTitleAlt
                siteTitle
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map((post) => {
                return Object.assign({}, post.frontmatter, {
                  description: post.excerpt,
                  date: post.frontmatter.date,
                  url: site.siteMetadata.siteUrl + post.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + post.frontmatter.path,
                  custom_elements: [{ "content:encoded": post.html }],
                })
              })
            },
            query: `
              {
                allMdx(sort: {order: DESC, fields: frontmatter___date}) {
                  nodes {
                    frontmatter {
                        path
                        title
                        date
                        excerpt
                    }
                    html
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Bazinga",
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.bazinga.it",
        sitemap: "https://www.bazinga.it/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Sans`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-165453088-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        // Enables Google Optimize using your container Id
      },
    },
  ],
}
