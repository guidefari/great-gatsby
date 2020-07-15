import React from 'react'
import { graphql, } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from "../components/HomeLayout";
import SEO from "../components/seo";
import PostCard from '../components/BlogCard'




const MusicPage = ({ data }) => (
  <Layout>
    <SEO
        keywords={[`freelance`,`music`,`blog`, `playlists`, `tailwindcss`]}
        title="Music"
      />
    <section className="text-gray-200 body-font">
    <div className="container px-5 py-24 mx-auto">
    <div className='flex flex-wrap -m-4'>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id} className="p-4 md:w-1/3">
          <PostCard 
                    category={post.node.frontmatter.category}
                    title={post.node.frontmatter.title}
                    slug={post.node.frontmatter.slug}
                    image={post.node.frontmatter.image}
                    path={post.node.frontmatter.path} />
        </div>
      
      ))}
    </div>
    </div>
    </section>
  </Layout>
)

MusicPage.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
query MusicIndexQuery {
  allMarkdownRemark (
    filter: {frontmatter: {category: {eq: "music"}} }
  ) {
    edges {
      node {
        id
        frontmatter {
          path
          title
          date
          author
          image
        }
      }
    }
  }
}
`


export default MusicPage

{/* <div key={post.node.id}>
  <h3>{post.node.frontmatter.title}</h3>
  <small>
    Posted by {post.node.frontmatter.author} on{' '}
    {post.node.frontmatter.date}
  </small>
  <br />
  <br />
  <Link to={post.node.frontmatter.path}>Read More</Link> */}
  {/* <br />
  <br />
  <hr />
</div> */}