import React from "react";
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import HomeLayout from "../components/HomeLayout";
import SEO from "../components/seo";
import Hero from "../images/space2.svg";
import Feature from "../components/featureContainer";
import PortfolioCard from "../components/portfolioCard";
import PlaylistCard from "../components/playlistCard";
import MixCard from "../components/mixCard";
import seoImage from '../../static/goose.png'


function IndexPage({data}) {
  console.log(data)
  return (
    <HomeLayout className='overflow-x-hidden'>
      {/* Index page SEO component & its props */}
      <SEO
        keywords={[`freelance`,`music`,`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
        image={seoImage}
        url='https://goosebumps.co.zw/'
        pathname=""
      />

      <section className="text-center">
        <div className="inline-block max-h-screen">
          <img
            alt="Man with headphones in space"
            className="block w-full mx-auto mb-8 md:max-w-eighty"
            src={Hero}
          />
    
          <h2 className="inline-block p-3 mb-4 text-2xl font-bold rounded-md bg-custom-yellow-500 text-custom-gray-bg">
            Welcome to GooseBumps Collective
          </h2>
          <br/>
          <h3 className="inline-block p-3 mb-4 text-xl font-bold rounded-md bg-custom-yellow-500 text-custom-gray-bg"> Web Development & Music </h3>
        </div>
        <Feature bigHead="Featured Web Projects" smallHead="Portfolio">
            <PortfolioCard data={data.portfolio.edges}/> 
        </Feature>
        <Feature bigHead="Featured Playlists" smallHead="Curated tunes">
            <PlaylistCard data={data.playlists.edges}/> 
        </Feature>
        <Feature bigHead="Featured Mixes" smallHead="Curated tunes">
            <MixCard data={data.mixes.edges}/> 
        </Feature>
      </section>


      <section id="Contact" className="flex flex-row justify-center mb-24 border-gray-200 featured body-font">
      <div classNames="inline-block mx-auto text-center w-8 p-6 rounded-lg">
        <h1 className="mb-2 text-2xl font-bold text-center md:text-3xl">
          Let&#39;s <span className="text-yellow-600">Talk</span>
        </h1>
        <p className="pb-6 font-bold text-center ">Got a project or collaboration you want to get started on?<br/> Send an <a href="mailto:admin@goosebumps.co.zw"><span className="text-yellow-500 hover:text-yellow-600">e-mail</span></a> and I&#39;ll get back to you as soon as possible.</p>
      </div>
    </section>
    </HomeLayout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;

export const Query = graphql`
{
  portfolio: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/Portfolio/"}, frontmatter: {showInProjects: {eq: true}}}) {
    edges {
      node {
        id
        html
        frontmatter {
          path
          title
          logo
          external
          showInProjects
          tech
        }
      }
    }
  }
  playlists: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/Playlists/"}}) {
    edges {
      node {
        id
        html
        frontmatter {
          title
          external
        }
      }
    }
  }
  mixes: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/Mixes/"}}) {
    edges {
      node {
        id
        html
        frontmatter {
          title
          description
          external
          DJ
        }
      }
    }
  }
}
`