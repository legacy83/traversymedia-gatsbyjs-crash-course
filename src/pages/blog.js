import { graphql } from "gatsby"
import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Our Blog" />
    <h1>Our Blog</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h2>{post.node.frontmatter.title}</h2>
        <small>
          Posted by {post.node.frontmatter.author} on
          {post.node.frontmatter.date}
        </small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu urna et
      nunc varius ultricies a eget magna. Praesent id ligula sit amet augue
      cursus dictum. Sed condimentum sed leo a finibus. Ut laoreet at erat vel
      tempor. Nullam ac nibh eu magna condimentum rutrum vitae vel massa. In hac
      habitasse platea dictumst. Curabitur mauris nisi, ultrices ut lacus vitae,
      pulvinar malesuada sem. Vestibulum id dignissim turpis. Phasellus sit amet
      pharetra nibh. Nulla id dapibus tortor. Suspendisse mollis malesuada ex in
      finibus. Fusce justo diam, finibus sit amet ex ac, imperdiet porttitor
      lorem.
    </p>
  </Layout>
)

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage
