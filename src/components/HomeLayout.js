import PropTypes from "prop-types";
import React from "react";

import Header from "./header";


function HomeLayout({ children }) {
  return (
    <div className="flex flex-col font-circular-black text-gray-900 bg-gray-700 min-h-screen">
      <Header />

      <main className="flex-1 w-full max-w-full py-8 mx-auto md:py-16">
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

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
