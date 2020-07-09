/* eslint react/prop-types: 0 */
import React from 'react'
// import {  graphql } from 'gatsby';
import PropTypes from 'prop-types';

const  portfolioCard = ({ data }) =>
    (
      <div>
      {data.allMarkdownRemark.edges.map(item => (
        <div key={item.node.id} className="h-full w-full md:min-w-2xl p-4 flex flex-col-reverse justify-between md:flex-row bg-gray-600 md:max-w-3xl bg-white rounded-lg md:p-12 shadow-lg">
        <div className="portfolioText flex flex-col justify-between text-center md:text-left md:w-8/12 mx-auto px-5">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{ item.node.title }</h1>
          <p className="mt-4 h-40 text-gray-400">  { item.nodeDescription }  <br/><br/>
            <span > 
              Read more about this project <a href={item.External} className="text-yellow-600">here</a>
            </span>
            {/* <span v-else>
              Check out the website<a :href="card.Link" className="text-yellow-600">here</a>
            </span> */}
          </p>
          <div className="mt-8 w-full flex flex-row flex-wrap md:justify-start justify-center mx-auto">
            <span v-for="tag in card.Tags" className="bg-gray-900 text-gray-100 px-5 mb-3 mr-4 py-2 font-semibold rounded">
              {item.node.tech }
              </span>
          </div>
        </div>
        <div className="md:w-4/12 m-auto w-48 h-56 md:h-auto flex flex-col justify-center align-middle">
          <a href="#">
            <img className="m-auto max-h-xs md:w-auto"  />
          </a>
        </div>
      </div>
      ))}
      </div>
    )
  

portfolioCard.propTypes = {
  data: PropTypes.object,
};

export default portfolioCard

