import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-700">
      <Header />

      <main className="flex items-center justify-center w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

  <footer className="text-gray-700 body-font">
    <div className="bg-gray-200">
      <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
        <p className="text-sm text-center text-gray-700 bg-yellow-200 sm:text-left">© 2020 Goosebumps Collective—
          <a href="https://linktr.ee/goosebumps" className="ml-1 text-gray-900 hover:bg-yellow-300" target="_blank"
            rel="noopener noreferrer">Social Links</a>
        </p>
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
