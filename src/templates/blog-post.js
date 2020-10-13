import React from 'react'
import { graphql, } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from "../components/layout";
import SEO from '../components/seo'
// import Img from '../components/Img'


export default function Template({data}) {
    const post = data.markdownRemark
    console.log(data)
    return(
        <Layout>
          <SEO 
            title={post.frontmatter.title}
            description={post.frontmatter.summary || post.excerpt || 'nothin’'}
            // pathname={post.frontmatter.path}
            image={post.frontmatter.image.childImageSharp.fluid.src || 'nothin’'}
            />
            
          <div>
            <div className='mb-24'>
              <h5 className='text-sm text-white'>{post.frontmatter.date}</h5>
              <h5 className='text-sm text-white'>{post.frontmatter.author}</h5>
              <h1 className='mt-4 text-center underline heading'>{post.frontmatter.title}</h1>
            </div>
              {/* <Img className='w-full mb-10' image={post.frontmatter.image} alt={post.frontmatter.title} /> */}
            <div className='prose lg:prose-xl danger' dangerouslySetInnerHTML={{__html: post.html}}/>
          </div>
        </Layout>
    )
}

Template.propTypes = {
    data: PropTypes.object,
  };

export const postQuery = graphql`
query BlogPostByPath($path: String!) {
  markdownRemark(frontmatter: {path: {eq: $path}}) {
    html
    frontmatter {
      path
      title
      author
      date(formatString: "DD MMMM, YYYY")
      summary
      image {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80 ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    excerpt
  }
}

`
