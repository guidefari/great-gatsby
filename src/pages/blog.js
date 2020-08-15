import React from 'react'
import { graphql, } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from "../components/HomeLayout";
import SEO from "../components/seo";
import PostCard from '../components/BlogCard'




const BlogPage = ({ data }) => (
  <Layout>
    <SEO
        keywords={[`software`,`blog`, `frontend`, `development`, `music`, `playlists`]}
        title="Blog posts"
        pathname="/blog"
      />
    <section className="text-gray-200 body-font">
    <div className="container px-5 py-24 mx-auto">
    <div className='flex flex-wrap -m-4'>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id} className="p-4 md:w-1/3">
          <PostCard 
                    category={post.node.frontmatter.category}
                    title={post.node.frontmatter.title}
                    summary={post.node.frontmatter.summary}
                    image={post.node.frontmatter.image.childImageSharp.fluid}
                    path={post.node.frontmatter.path} />
      </div>
      
      ))}
    </div>
    </div>
    </section>
  </Layout>
)

BlogPage.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
query blogQuery {
  allMarkdownRemark(filter: {frontmatter: {article: {eq: "true"}}}) {
    edges {
      node {
        id
        frontmatter {
          path
          title
          date(formatString: "DD MMMM, YYYY")
          author
          summary
          article
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}

`


export default BlogPage