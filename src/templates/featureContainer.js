import React from 'react'
import PropTypes from "prop-types";
import PortfolioCard from "../components/featuredItems/portfolioCard";

const featureContainer = ({bigHead, smallHead, data}) => (
    <section className="pb-24 text-gray-870 body-font border-gray-200 w-full ">
        <div className="flex flex-col mt-24 text-center w-full mb-20">
            <h2 className="text-xs text-orange-400 tracking-widest font-medium title-font mb-1 uppercase">{smallHead}</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">{bigHead}</h1>
        </div>
        
        <div id="cardContainer" className="flex flex-no-wrap  overflow-x-auto scrolling-touch">
            <div className="p-4 min-w-full flex md:min-w-3xl ">
                <PortfolioCard data={ data.allMarkdownRemark.edges }/> 
            </div>
        </div>
    </section>
    )

featureContainer.propTypes = {
        bigHead: PropTypes.string,
        smallHead: PropTypes.string,
        data: PropTypes.array,
      };

export default featureContainer


