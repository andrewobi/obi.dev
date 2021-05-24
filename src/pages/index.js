import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/frontpage/hero"
import ProjSection from "../components/frontpage/projects"
import BlogSection from "../components/frontpage/blog"
import ExperimSection from "../components/frontpage/experiments"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <ProjSection />
    <BlogSection />
    <ExperimSection />
    <br />
  </Layout>
)

export default IndexPage
