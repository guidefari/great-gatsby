import React from 'react'
import { Link } from 'gatsby';
import PropTypes from 'prop-types';



const BlogCard = ({category, title, slug, path}) => {
    // const post = data.allMarkdownRemark.edges.map()
    
    return (
        <div>
            <div className="h-full overflow-hidden border-2 border-gray-700 rounded-lg shadow-lg">
          <img className="object-cover object-center w-full lg:h-48 md:h-36" src="https://dummyimage.com/720x400" alt="blog" />
          <div className="p-6 bg-gray-600">
          <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-500 title-font">{category}</h2>
            <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">{title}</h1>
            <p className="mb-3 leading-relaxed">{slug}</p>
            <div className="flex flex-wrap items-center ">
              <Link to={path} className="inline-flex items-center text-yellow-600 md:mb-2 lg:mb-0">Read full
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
    slug: PropTypes.string,
    path: PropTypes.string,
  };

export default BlogCard
