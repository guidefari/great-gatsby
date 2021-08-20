/* eslint react/prop-types: 0 */
import React from 'react';
// import portrait from '../../static/img/portrait.jpeg'
import { Link } from 'gatsby';
import GatsbyImage from 'gatsby-image';

function About({ image }) {
  // console.log(image)
  return (
    <div className="max-w-6xl p-12 m-auto">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center max-w-md md:w-1/2">
          <h2 className="text-2xl font-black text-left underline uppercase md:text-5xl font-circular-bold">
            About
          </h2>
          <div className="mt-4 text-xl text-left">
            Built by:{' '}
            <a
              rel="noopener noreferrer"
              className=" link-transition about-link"
              href="https://twitter.com/txndai"
            >
              Guide Fari
            </a>
            . That guy on the right, or the bottom🤷‍♂️
            <br />
            <br />
            Tech used:
            <ul>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="about-link link-transition"
                  href="https://www.gatsbyjs.org/"
                >
                  {' '}
                  Gatsby
                </a>
              </li>
              <strike>
                <li>
                  <a
                    rel="noopener noreferrer"
                    className="about-link link-transition"
                    href="https://vuejs.org/"
                  >
                    {' '}
                    Vue
                  </a>
                </li>
              </strike>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="about-link link-transition"
                  href="https://tailwindcss.com/"
                >
                  {' '}
                  TailwindCSS
                </a>
              </li>
              <strike>
                <li>
                  <a
                    rel="noopener noreferrer"
                    className="about-link link-transition"
                    href="https://parceljs.org/"
                  >
                    ParcelJS
                  </a>
                </li>
              </strike>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="about-link link-transition"
                  href="https://www.netlify.com/"
                >
                  Netlify
                </a>
              </li>
            </ul>{' '}
            <br />
            <br />
            <p>
              Check out the{' '}
              <Link className="about-link link-transition" to="/blog">
                &apos;not blog&apos;
              </Link>{' '}
              for extended thoughts on this & that.
            </p>
            <p>
              Most of my writing is now being captured in my{' '}
              <a
                className="about-link link-transition"
                href="https://publish.obsidian.md/guide"
                target="_blank"
                rel="noreferrer"
              >
                notebook
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline w-6 h-6 mb-1 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              .
            </p>
            <br />
            <p>
              This site is open source😎 You can find the repo{' '}
              <a
                rel="noopener noreferrer"
                className="about-link link-transition"
                href="https://github.com/txndai/great-gatsby"
              >
                here
              </a>
            </p>
          </div>
        </div>
        <div className="flex w-full -mt-5 md:justify-end md:w-1/2">
          <div className="pattern">
            <div className="z-10 max-w-md mt-6 ml-4 rounded-full shadow-2xl bg-secondary-gray-500">
              <GatsbyImage
                fluid={image}
                alt="portrait of Guide Fari"
                className="rounded-lg"
              />
              <div className="p-10 rounded-lg bg-secondary-gray-500">
                <blockquote>
                  This site was born out of necessity, mainly as a site for me
                  to practice what I learn on the Web Development journey, and
                  to serve as a central house for music related content & other
                  projects. - A digital playground.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
