import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const BlogIndex = () => (
  <Layout>
    <SEO title="Blog Home" />
    <h1>Hi people</h1>
    <Link to="/blog/001-hello-world/">Go to page 2</Link> <br />
  </Layout>
)

export default BlogIndex;