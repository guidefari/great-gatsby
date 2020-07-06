import React from 'react'
import { Link, graphql, } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from "../components/layout";


const BlogPage = ({ data }) => (
  <Layout>
    <div>
      <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by {post.node.frontmatter.author} on{' '}
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
    </div>
  </Layout>
)

BlogPage.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
query WebIndexQuery {
  allMarkdownRemark (
    filter: {frontmatter: {category: {eq: "web"}} }
  ) {
    edges {
      node {
        id
        frontmatter {
          path
          title
          date
          author
        }
      }
    }
  }
}
`


export default BlogPage