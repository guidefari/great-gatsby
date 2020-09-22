import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen text-gray-300 bg-custom-gray-bg">
      <Header />

      <main className="flex items-center justify-center w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer className="text-gray-700 body-font">
    <div className="bg-custom-gray-seconday">
      <div className="container flex flex-col-reverse px-5 py-4 mx-auto justify-evenly sm:flex-row">
          <a href="https://linktr.ee/goosebumps" className="ml-1 text-gray-100 hover:bg-yellow-300 hover:text-custom-gray-bg" target="_blank"
            rel="noopener noreferrer">Social Links</a>
      </div>
      
    </div>
  </footer>

    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
