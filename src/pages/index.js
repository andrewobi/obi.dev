import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Seo from "../components/seo"
import Hero from "../components/frontpage/hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero>
    </Hero>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
