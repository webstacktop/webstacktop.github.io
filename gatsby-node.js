/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`)
const replacePath = path => (path === `/` ? path : path.replace(/\/$/, ``))
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    // console.log(createFilePath({ node, getNode }))
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: replacePath(slug),
    })
  }
}

const path = require("path")
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              location
            }
          }
        }
      }
    }
  `)

  const template = path.resolve(`./src/templates/contentTemplate.js`)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(node)
    createPage({
      path: node.fields.slug,
      component: template,
      context: {
        slug: node.fields.slug,
        location: node.frontmatter.location,
      },
    })
  })
}
