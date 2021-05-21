import { graphql, useStaticQuery, Link } from "gatsby";
import Card from "../frontpage/card";
import React from "react";

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    query{
      allMdx(limit: 8) {
        nodes{
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

  return <section>{data.allMdx.nodes.map(({frontmatter, slug}) => ( <Card title={frontmatter.title} sLink={slug} text={frontmatter.summary} />))}</section>
}

export default BlogSection



