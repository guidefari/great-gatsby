import React from "react";
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import HomeLayout from "../components/HomeLayout";
import SEO from "../components/seo";
import Feature from "../components/featureContainer";
import PortfolioCard from "../components/portfolioCard";
import PlaylistCard from "../components/playlistCard";
import MixCard from "../components/mixCard";
import seoImage from '../images/orange.jpg'
import About from "../components/about";


function IndexPage({data}) {
  console.log(data.portrait.childImageSharp)
  return (
    <HomeLayout className='overflow-x-hidden'>
      {/* Index page SEO component & its props */}
      <SEO
        keywords={[`freelance`,`music`,`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
        image={seoImage}
        url='https://goosebumps.co.zw/'
        description='Freelance Web Development and Curated music'
      />

      <section className="text-center">
        <div className="inline-block max-h-screen">
          <h1 className="inline-block p-3 mb-4 text-6xl font-bold text-white rounded-md">
            Welcome to GooseBumps Collective
          </h1>
          <br/>
          <h3 className="inline-block p-3 mb-4 text-xl font-semibold text-white rounded-md"> Web Development, Music & everything between</h3>
        </div>
        <Feature bigHead="Featured Web Projects" smallHead="Portfolio">
            {data.portfolio.edges.map(port => (
              <PortfolioCard
                key={port.node.id}
                external={port.node.frontmatter.external}
                image={port.node.frontmatter.image.childImageSharp.fluid}
                tech={port.node.frontmatter.tech}
                title={port.node.frontmatter.title}
                html={port.node.html}
              />))}
        </Feature>
        <About image={data.portrait.childImageSharp.fluid}/>
        <Feature bigHead="Featured Playlists" smallHead="Curated tunes">
            <PlaylistCard  data={data.playlists.edges}/> 
        </Feature>
        <Feature bigHead="Featured Mixes" smallHead="Curated tunes">
            <MixCard data={data.mixes.edges}/> 
        </Feature>
      </section>


      <section id="Contact" className="flex flex-row justify-center mb-24 border-gray-200 featured body-font">
      <div classNames="inline-block mx-auto text-center w-8 p-6 rounded-lg">
        <h1 className="mb-2 text-2xl font-bold text-center md:text-3xl">
          Hire <span className="text-yellow-600">Me</span>
        </h1>
        <p className="pb-6 text-center ">I am available for freelance/contract work, & full time work.<br/> Send an <a href="mailto:admin@goosebumps.co.zw"><span className="text-yellow-500 hover:text-yellow-600">e-mail</span></a> and I&#39;ll get back to you within a day or two.</p>
        <p className="pb-6 text-center ">If you prefer to use a contact form, <Link to='/contact' className="text-yellow-500 hover:text-yellow-600">here it is</Link>.</p>
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
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
  portrait: file(relativePath: {eq: "portrait.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  goose: file(relativePath: {eq: "goose.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`