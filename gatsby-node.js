exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
  query {
   allMdx{
        nodes {
        frontmatter {
            path
        }
        }
    }
  }
  `)


  data.allMdx.nodes.forEach(node => {
    const slug = node.frontmatter.path
    let test = actions.createPage({
      path: slug,
      component: require.resolve(`./src/components/blog-post.js`),
      context: { slug: slug },
    })
  })
}