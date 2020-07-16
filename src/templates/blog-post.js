import React from 'react'
import { graphql, } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from "../components/layout";
import SEO from '../components/seo'

export default function Template({data}) {
    const post = data.markdownRemark

    return(
        <Layout>
          <SEO title={post.frontmatter.title}
            description={post.frontmatter.slug || post.excerpt || 'nothin’'}
            pathname={post.frontmatter.path}
            article />
            
          <div className='text-gray-900 prose lg:prose-xl'>
          {/* <GlobalStyle /> */}
              {/* <Link to="/webdev">Go Back</Link>
              <hr/> */}
              <h1 className=''>{post.frontmatter.title}</h1>
              <div className='danger ' dangerouslySetInnerHTML={{__html: post.html}}/>
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
      date
      description
      slug
    }
    excerpt
  }
}

`