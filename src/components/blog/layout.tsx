import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../util/nav"
import FooterSection from "../util/footer"
import Seo from "../seo"

import * as layoutStyles from "./layout.module.scss"


const BlogLayout = ({ children }) => {

    const data = useStaticQuery(graphql`
        query PostTitleQuery{
            mdx {
                frontmatter {
                  title
                }
            }
        }
    `)
    return(
        <>
        <Seo title={data.mdx.frontmatter?.title || `Title`} />
        <Header />
        <main className={layoutStyles.posts}>{children}</main>
        <FooterSection />
        </>
    )
}

BlogLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BlogLayout