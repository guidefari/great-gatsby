import React from 'react'
import PropTypes from 'prop-types';

const mixCard = ({data}) => {
    return (
        <div className=" flex mb-4 px-4">
            {data.map(item => (
                <div key={item.node.id} className="card mx-6 flex rounded-lg h-full w-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3 h-24">
                  <div
                    className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-400 text-white flex-shrink-0">
                    <img src="/goose.png" alt=""/>
                  </div>
                  <div className="flex justify-between w-full">
                    <h2 className="text-gray-900 text-lg title-font font-medium">{item.node.frontmatter.title}</h2>
                    <h3 className="text-right text-gray-700">Mixed by <br/>{item.node.frontmatter.DJ} </h3>
                  </div>
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <p className="leading-relaxed text-base">
                    <em>{item.node.frontmatter.description}</em>
                    <br/><br/>
                  </p>
                  <div> 
                   <span className="text-center w-full"><strong v-if="card.tracklist"> Tracklist:</strong></span>
                     <ol>
                       <span dangerouslySetInnerHTML={{__html: item.node.html}}></span>
                     </ol>
                  </div>
                  <a href={item.node.frontmatter.external} target="_blank" rel="noreferrer" className="w-auto mt-3 hover:text-gray-900 text-yellow-700 inline-flex items-center">Stream
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
        </div>
    )
}

mixCard.propTypes = {
    data: PropTypes.object,
  };

export default mixCard
