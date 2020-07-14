import React from 'react'
import { graphql, } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from "../components/layout";
// import styled from 'styled-components';
// import  GlobalStyle  from '../styles/GlobalStyle.js';

// import '../css/style.css'

// import '../css/newone.css'

// const StyledPostContent = styled.div`
//   margin-bottom: 100px;
//   h1, h2, h3 {
//     margin: 0 0 0.35em;
// }

// h1 {
//   font-size: 40px;
// }

// h2 {
//   font-size: 28px;
// }

// h3 {
//   font-size: 20px;
// }

//   p {
//     margin: 0 0 1.15em;
//     line-height: 1.5;
//     color: white;
//     };
  
//   p + h2 {
//     margin-top: 1.5em;
//   }
  
//   blockquote {
//     color: #2c3e50;
//     font-size: 20px;
//     line-height: 100%;
//     position: relative;
//     font-family: Georgia, serif;
//     width: 75%;
//     margin: 10% auto;
//   }
 
//`

export default function Template({data}) {
    const post = data.markdownRemark

    return(
        <Layout>
        <div>
        {/* <GlobalStyle /> */}
            {/* <Link to="/webdev">Go Back</Link>
            <hr/> */}
            <h1 className='text-3xl mb-5'>{post.frontmatter.title}</h1>
            <div className='danger prose lg:prose-xl' dangerouslySetInnerHTML={{__html: post.html}}/>
        </div>
        </Layout>
    )
}

Template.propTypes = {
    data: PropTypes.object,
  };

export const postQuery = graphql`
  query BlogPostByPath($path: String!){
      markdownRemark(frontmatter: {path: {eq: $path}}){
        html
        frontmatter {
            path
            title
            author
            date
        }
        
      }
  }
`