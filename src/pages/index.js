import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
import Hero from "../components/Hero"
import Portfolio from "../components/portfolio"

export default ({ data }) => {
  const posts = data.allMdx.nodes
  return (
    <Layout>
      <Seo />
      <Hero />
      <Portfolio />
      <PostList posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          path
          title
          date(formatString: "MMMM Do, YYYY")
          cover {
            childImageSharp {
              fluid(maxWidth: 800) {
                src
              }
            }
          }
        }
        body
        id
      }
    }
  }
`
