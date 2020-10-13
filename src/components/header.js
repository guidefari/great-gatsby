import { Link } from "gatsby";
import React from "react";
import gbLogo from "../images/gb.png"

function Header() {
  return (
    <header className="bg-transparent text-secondary-gray-50">
      <div className="flex flex-wrap items-center max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">
          <div className="flex items-center mb-0 no-underline">
          <img alt="Goosebumps Collective's logo" className="w-8 mr-2" src={gbLogo}/>
          </div>
        </Link>

        <nav className='items-center block w-auto'>
          {[
            {
              route: `/blog`,
              title: `not blog`,
            },
          ].map((link) => (
            <Link key={link.title} to={link.route} className="inline-block ml-6 text-lg text-center no-underline hover:text-custom-yellow-500 link-transition" >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
