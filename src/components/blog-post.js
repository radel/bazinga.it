import React from "react"
import { graphql } from "gatsby"
import Layout from "./Layout"
import Seo from "./Seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "react-bnb-gallery/dist/style.css"

export default ({ data }) => {
  const post = data.allMdx.nodes[0]
  const images = post.frontmatter.photos
    ? post.frontmatter.photos.map((photo) => {
        return {
          thumbnail: photo.childImageSharp.thumb.src,
          width: photo.childImageSharp.thumb.presentationWidth,
          height: photo.childImageSharp.thumb.presentationHeight,
          src: photo.childImageSharp.full.src,
          caption: post.frontmatter.title,
        }
      })
    : []
  let coverImg = post.frontmatter.cover ? (
    <img
      src={post.frontmatter.cover.childImageSharp.fluid.src}
      className="object-fit rounded-lg shadow-lg mb-8"
      alt={post.frontmatter.title}
    />
  ) : (
    ""
  )
  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <div className="mx-auto max-w-4xl">
        {coverImg}
        <h1 className="text-5xl text-gray-800 dark:text-gray-200 font-bold">
          {post.frontmatter.title}
        </h1>
        <span className="block pb-8 pt-0 text-gray-600 dark:text-gray-500">
          {post.frontmatter.date} - {post.timeToRead} min read
        </span>
        <div className="text-xl entry-content">
          <MDXRenderer images={images}>{post.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allMdx(filter: { frontmatter: { path: { eq: $slug } } }) {
      nodes {
        frontmatter {
          path
          cover {
            childImageSharp {
              fluid(maxWidth: 960) {
                src
              }
            }
          }
          photos {
            childImageSharp {
              thumb: fluid(maxHeight: 400) {
                src
                presentationWidth
                presentationHeight
              }
              full: fluid(maxWidth: 1024) {
                src
              }
            }
          }
          title
          date(formatString: "MMMM Do, YYYY")
        }
        timeToRead
        body
      }
    }
  }
`
