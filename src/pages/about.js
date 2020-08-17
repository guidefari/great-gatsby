import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import portrait from '../../static/img/portrait.jpeg'


const AboutPage = () => 
   (
    <Layout >
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
        pathname="/about"
      />

     

     <div className="max-w-6xl p-12 m-auto">
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col justify-center max-w-md md:w-1/2">
                <div className="text-2xl font-black underline uppercase md:text-5xl font-circular-bold">About</div>
                <div className="mt-4 text-xl">Built by: <a className=" link-transition about-link" href="https://twitter.com/txndai">GT Fari</a>. <br></br><br></br>
                    Built using: 
                    <ul>
                        <li><a className="about-link link-transition" href="https://www.gatsbyjs.org/"> Gatsby</a></li>
                        <strike><li><a className="about-link link-transition" href="https://vuejs.org/"> Vue</a></li></strike>
                        <li><a className="about-link link-transition" href="https://tailwindcss.com/"> TailwindCSS</a></li>
                        <li><a className="about-link link-transition" href="https://webpack.js.org/"> WebPack</a></li>
                        <strike><li><a className="about-link link-transition" href="https://parceljs.org/">ParcelJS</a></li></strike>
                        <li><a className="about-link link-transition" href="https://www.netlify.com/">Netlify</a></li>
                    </ul> <br></br><br></br>
                    <p>Don&#39;t be shy to say hi or shoot through any suggestions right <a className="about-link link-transition" href="https://linktr.ee/goosebumps">here</a>😁</p>
                    <p>Check out the <Link className="about-link link-transition" to="/blog"> blog</Link> for extended thoughts on this & that.</p><br/>
                    <p>Did I mention that this site is open source? You can find the repo <a className="about-link link-transition" href='https://github.com/txndai/great-gatsby'>here</a></p>
                </div>
            </div>
            <div className="flex w-full -mt-5 md:justify-end md:w-1/2">
                <div className="pattern">
                    <div className="z-10 max-w-md mt-6 ml-4 rounded-full shadow-2xl bg-secondary-gray-500">
                        <img alt="Guide Fari" className="rounded-lg" src={portrait}></img>
                        <div className="p-10 text-xl rounded-lg bg-secondary-gray-500">
                          <blockquote>
                            This site was born out of necessity, mainly as a site for me to practice what I learn on the
                            Web Development journey, and to serve as a central house for music related content & other
                            projects. - A digital playground, so to say.
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </Layout>
  )


export default AboutPage;
