import React from 'react';
import PropTypes from 'prop-types';

const featureContainer = ({ bigHead, smallHead, children }) => (
  // console.log(data)

  <section className="w-full pb-24 border-gray-200 text-gray-870 body-font">
    <div className="flex flex-col w-full mt-24 mb-20 text-center">
      <h2 className="mb-1 text-xs font-medium tracking-widest uppercase text-custom-off-yellow-500 title-font">
        {smallHead}
      </h2>
      <h1 className="text-2xl font-medium text-gray-400 sm:text-3xl title-font">
        {bigHead}
      </h1>
    </div>

    <div
      id="cardContainer"
      className="flex flex-no-wrap overflow-x-auto scrolling-touch"
    >
      {children}
    </div>
  </section>
);

featureContainer.propTypes = {
  bigHead: PropTypes.string,
  smallHead: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default featureContainer;
