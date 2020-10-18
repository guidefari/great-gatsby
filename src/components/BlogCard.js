import React from 'react'
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image'



const BlogCard = ({category, title, summary, path, image}) => {
    // const post = data.allMarkdownRemark.edges.map()
    
    return (
                <Link to={path} >
        <div className='flex flex-col justify-between h-full'>
          <div className="h-full overflow-hidden rounded-lg shadow-lg ">
            <Img className='md:min-h-48 ' fluid={image} />
            <div className="flex flex-col justify-start h-full p-6 bg-custom-gray-seconday min-h-10 max-h-xs">
              <div>
                {category.map((cat) => ( <span key={cat} className="mb-1 mr-2 text-xs font-medium tracking-widest title-font">{cat}</span> ) )}
                <h1 className="mb-3 overflow-y-auto text-xl font-semibold text-custom-olive-500 title-font">{title}</h1>
                <p className="mb-3 leading-relaxed text-gray-400">{summary}</p>
              </div>
            </div>
          </div>
        </div>
                </Link>
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
