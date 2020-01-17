import React from "react"
import Post from "../components/Post"

const ContentTemplate = ({ data }) => {
  console.log(data)
  const post = data.markdownRemark
  return (
    <Post postMeta={{ ...data.allMarkdownRemark, currentPost: post }}>
      <h1>{post.frontmatter.title}</h1>
      <h2>{post.frontmatter.date}</h2>
      <h2>{post.frontmatter.author}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Post>
  )
}

export default ContentTemplate

export const pageQuery = graphql`
  query($slug: String!, $location: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
        location
        folderNo
        folder
        subFolder
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { location: { eq: $location } } }
      sort: { order: ASC, fields: frontmatter___folderNo }
    ) {
      nodes {
        frontmatter {
          title
          folderNo
          folder
          location
          subFolder
        }
        fields {
          slug
        }
        id
      }
      totalCount
    }
  }
`
