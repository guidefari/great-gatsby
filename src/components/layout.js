import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen text-gray-900 bg-gray-700">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

  <footer className="text-gray-700 body-font">
    <div className="bg-gray-200">
      <div className=" container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="bg-yellow-200 text-gray-700 text-sm text-center sm:text-left">© 2020 Goosebumps Collective—
          <a href="https://linktr.ee/goosebumps" className="text-gray-900 ml-1 hover:bg-yellow-300" target="_blank"
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
