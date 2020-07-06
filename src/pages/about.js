import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";


const AboutPage = () => 
   (
    <Layout >
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

     

     <div className="m-auto max-w-6xl p-12">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 max-w-md flex flex-col justify-center">
                <div className="md:text-5xl text-2xl uppercase font-black underline">About</div>
                <div className="text-xl mt-4">Built by: <a className="bg-yellow-300 hover:bg-yellow-400" href="https://twitter.com/txndai">GT Fari</a>. <br></br><br></br>
                    Built using: 
                    <ul>
                        <li><a className="bg-yellow-300 hover:bg-yellow-400" href="https://vuejs.org/"> Vue</a></li>
                        <li><a className="bg-yellow-300 hover:bg-yellow-400" href="https://tailwindcss.com/"> TailwindCSS</a></li>
                        <li><a className="bg-yellow-300 hover:bg-yellow-400" href="https://webpack.js.org/"> WebPack</a></li>
                        <strike><li><a className="bg-yellow-300 hover:bg-yellow-400" href="https://parceljs.org/">ParcelJS</a></li></strike>
                        <li><a className="bg-yellow-300 hover:bg-yellow-400" href="https://www.netlify.com/">Netlify</a></li>
                    </ul> <br></br><br></br>
                    <p>Don&#39;t be shy to say hi or shoot through any suggestions right <a className="bg-yellow-300 hover:bg-yellow-400" href="https://linktr.ee/goosebumps">here</a>😁</p>
                    <p>Check out the blog <a className="bg-yellow-300 hover:bg-yellow-400" to="soon">here</a> to learn more about what we do.</p>

                </div>
            </div>
            <div className="flex md:justify-end w-full md:w-1/2 -mt-5">
                <div className="pattern">
                    <div className="bg-white shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                        <img alt="card img" className="rounded-lg" src="https://source.unsplash.com/random"></img>
                        <div className="rounded-lg text-2xl p-10 bg-white">
                          
                            This site was born out of necessity, mainly as a site for me to practice what I learn on the
                            Web Development journey, and to serve as a central house for music related content & other
                            projects. - A digital playground, so to say.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </Layout>
  )


export default AboutPage;
