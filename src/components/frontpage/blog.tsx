import { graphql, useStaticQuery} from "gatsby";
import Card from "../util/card";
import React from "react";

import * as blogStyle from "./blog.module.scss"

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    query{
      allMdx(limit: 8) {
        nodes{
          id
          frontmatter{
            title
            summary
            date
          }
          slug
        }
      }
    }
  
  `)

  if(!data?.allMdx?.nodes) {
    return <div>Error</div>
  }

  return <section className={blogStyle.section}><h1 className={blogStyle.Title}>Blog</h1>{data.allMdx.nodes.map(({frontmatter, slug, id}) => ( <div className={blogStyle.child}><Card text={frontmatter.summary} slink={slug} title={frontmatter.title} key={id} /></div>))}</section>
}

export default BlogSection



