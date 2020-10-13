import React, { useState } from 'react'
import { graphql, } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from "../components/HomeLayout";
import SEO from "../components/seo";
import PostCard from '../components/BlogCard'
// import Categories from '../components/categoryFilter'

function countCategoryAppearance(params) {
  // this function takes an array, counts the number of appearances of an entry, and returns an object as the result
  const countedObject = params.reduce(function(obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
return countedObject
}

function BlogPage  ({ data }) {
  const [catFilter, setFilter] = useState('');
  console.log(catFilter)
  let initialCatArray = []
  data.categories.nodes.forEach(post => {
    // populating the initial array with post categories
    initialCatArray = initialCatArray.concat(post.frontmatter.category)
  });
  // console.log(`this is ${initialCatArray}`)
  // console.log(countCategoryAppearance(initialCatArray))
  const theKeys = Object.keys(countCategoryAppearance(initialCatArray))
  // console.log(theKeys)


  // const AmaBlogs = data.allMarkdownRemark.edges
  const filtered = data.posts.edges.filter((post)=> post.node.frontmatter.category.includes(catFilter))
  // console.log(filtered)
  return (
  <Layout>
    <SEO
        keywords={[`software`,`blog`, `frontend`, `development`, `music`, `playlists`]}
        title="Blog posts"
        pathname="/blog"
        description='Some words.'
      />
    <section className="text-gray-200 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className='flex items-center justify-center mx-auto mb-5'>
        <span className='inline-block mx-auto text-sm'>
          <button onClick={()=> setFilter('')} className='mr-3 uppercase focus:outline-none link-colors link-transition'>All</button>
          {theKeys.map(category => (
            <button onClick={()=> setFilter(category)} 
              key={category} 
              className='mr-3 uppercase focus:outline-none link-colors link-transition'>
                {category}
              </button>
          ))}
        </span>
      </div>

    <div className='flex flex-wrap -m-4'>
      {
        (catFilter ? filtered : data.posts.edges).map(post => (
          <div key={post.node.id} className="w-full p-4 md:w-1/3">
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
}

BlogPage.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
query blogQuery {
  posts: allMarkdownRemark(filter: {frontmatter: {article: {eq: "true"}}}, sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          path
          title
          category
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
  categories: allMarkdownRemark(filter: {frontmatter: {article: {eq: "true"}}}) {
    nodes {
        frontmatter {
        category
        }
    }
    }
}

`


export default BlogPage