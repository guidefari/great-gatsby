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
          <a 
            className="inline-block ml-6 text-lg text-center no-underline hover:text-custom-yellow-500 link-transition"
            href="https://publish.obsidian.md/guide"
            target='_blank'
            rel='noreferrer'
            >
            notes 
            <svg xmlns="http://www.w3.org/2000/svg" className="inline w-6 h-6 mb-1 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
