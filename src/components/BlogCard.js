import React from 'react'
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image'



const BlogCard = ({category, title, summary, path, image}) => {
    // const post = data.allMarkdownRemark.edges.map()
    
    return (
        <div className='flex flex-col justify-between h-full'>
          <div className="h-full overflow-hidden rounded-lg shadow-lg ">
            <Img className='md:min-h-48 lg:min-h-72' fluid={image} />
            <div className="flex flex-col justify-between p-6 bg-custom-gray-seconday min-h-sm lg:min-h-xs max-h-xs">
              <div>
                <h2 className="mb-1 text-xs font-medium tracking-widest title-font">{category}</h2>
                <h1 className="mb-3 text-xl font-semibold text-custom-olive-500 lg:h-12 title-font">{title}</h1>
                <p className="mb-3 leading-relaxed text-gray-400">{summary}</p>
              </div>
              <div className="flex flex-wrap items-center ">
                <Link to={path} className="inline-flex items-center link-transition link-colors md:mb-2 lg:mb-0">Read full
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
    )
}

BlogCard.propTypes = {
    category: PropTypes.string,
    title: PropTypes.string,
    summary: PropTypes.string,
    path: PropTypes.string,
    image: PropTypes.string,
  };

export default BlogCard
