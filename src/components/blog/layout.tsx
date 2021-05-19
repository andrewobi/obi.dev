import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Seo from "../seo"


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
        <main>{children}</main>
        </>
    )
}

BlogLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BlogLayout