import React from 'react'
import PropTypes from 'prop-types';
import LilGoose from './icons/lilGoose';

const playlistCard = ({data}) => {
    console.log(data)
    return (
        <div  className="flex px-4 mb-4">
        {data.map(item => (
        <div key={item.node.id} className="flex flex-col w-full h-full p-8 mx-4 rounded-lg bg-custom-gray-seconday card">
        <div className="flex items-center mb-3">
          <div
            className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 text-white bg-yellow-400 rounded-full">
              <LilGoose/>
          </div>
          <h2 className="text-lg font-medium text-custom-olive-500 title-font">{item.node.frontmatter.title}</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow ">
          <span className="leading-relaxed text-left" dangerouslySetInnerHTML={{__html: item.node.html}}/>
          <a rel="noopener noreferrer" href={item.node.frontmatter.external} className="relative bottom-0 inline-flex items-center mt-3 link-colors link-transition">Stream
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      ))}
      </div>
    )
}

playlistCard.propTypes = {
    data: PropTypes.object,
  };

export default playlistCard