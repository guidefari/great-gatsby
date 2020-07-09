import React from "react";
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import HomeLayout from "../components/HomeLayout";
import SEO from "../components/seo";
import Hero from "../images/space.svg";
import Feature from "../templates/featureContainer";


function IndexPage({data}) {
  console.log(data)
  return (
    <HomeLayout className='overflow-x-hidden'>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <div className="inline-block max-h-screen">
          <img
            alt="Cat and human sitting on a couch"
            className="block w-1/2 mx-auto mb-8"
            src={Hero}
          />
    
          <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
            Welcome to GooseBumps Collective
          </h2>
          <br/>
          <h3 className="inline-block p-3 mb-4 text-xl font-bold bg-yellow-400"> Web Development & Music </h3>
        </div>
        <Feature
        bigHead="Featured Web Projects"
        smallHead="Portfolio"
        data={data}
        />
      </section>


      <section id="Contact" className="featured flex flex-row justify-center text-gray-870 body-font border-gray-200 mb-24">
      <div classNames="inline-block mx-auto text-center w-8 p-6 rounded-lg">
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-2">
          Let&#39;s <span className="text-yellow-600">Talk</span>
        </h1>
        <p className="pb-6 font-bold text-gray-500 text-center">Got a project or collaboration you want to get started on?<br/> Send an <a href="mailto:admin@goosebumps.co.zw"><span className="text-yellow-500 hover:text-yellow-600">e-mail</span></a> and I&#39;ll get back to you as soon as possible.</p>
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
query IndexQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/"}}) {
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
}
`