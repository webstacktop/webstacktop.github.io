/**
 * Post component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Sidebar from "../Sidebar"
import Footer from "../footer"
import Layout from "../Layout"

const Post = ({ postMeta, children }) => {
  /*   const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) */

  return (
    <Layout>
      <Sidebar {...postMeta} />
      <article className="content">{children}</article>
      <Footer />
    </Layout>
  )
}

Post.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Post
