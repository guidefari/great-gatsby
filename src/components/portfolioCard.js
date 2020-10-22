/* eslint react/prop-types: 0 */
import React from 'react'
import PropTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';


const  portfolioCard = ({ external, image, tech, title, html }) => {
    // console.log(data)
    return (
      <div  className="flex px-4 mb-4 ">
        <div className="flex flex-col-reverse justify-between w-full h-full p-4 mx-6 rounded-lg shadow-lg bg-custom-gray-seconday card md:min-w-3xl md:flex-row md:max-w-3xl md:p-12">
        <div className="flex flex-col justify-between px-5 mx-auto text-center portfolioText md:text-left md:w-8/12">
          
          <h1 className="mb-2 text-2xl font-bold md:text-3xl text-custom-olive-500">{ title }</h1>
          <div className="mt-4 text-gray-400">
          <div className='' dangerouslySetInnerHTML={{__html: html}}/>
          </div>
          <div className="flex flex-row flex-wrap justify-center w-full mx-auto mt-8 md:justify-start">
              {tech.map((tech, i) =>(
                  <span key={i} className="px-5 py-2 mb-3 mr-4 font-semibold rounded bg-primary-gray-500">{tech}</span>
              ))}
            </div>
        </div>
        <div className="flex flex-col justify-center w-48 h-56 m-auto align-middle md:w-4/12 md:h-auto">
          <a target='_blank' rel="noopener noreferrer" href={external}>
            <GatsbyImage alt={title} fluid={image} className="m-auto max-h-xs md:w-auto"  />
          </a>
        </div>
      </div>
      </div>
    )
  }

portfolioCard.propTypes = {
  data: PropTypes.object,
};

export default portfolioCard

