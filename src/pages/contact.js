import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`, `contact`]}
        title="Contact"
      />
      <section className="section80 relative">
    
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="md:text-5xl text-2xl uppercase font-black underline text-black">Contact Us</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">Let&#39;s work together, leave a message below.</p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <input className="w-full bg-gray-300 rounded border border-gray-700 text-gray-800 focus:outline-none focus:border-yellow-200 text-base px-4 py-2" placeholder="Name" type="text" ></input>
          </div>
          <div className="p-2 w-1/2">
            <input className="w-full bg-gray-300 rounded border border-gray-700 text-gray-800 focus:outline-none focus:border-yellow-200 text-base px-4 py-2" placeholder="Email" type="email" ></input>
          </div>
          <div className="p-2 w-full">
            <textarea className="w-full bg-gray-300 rounded border border-gray-700 text-gray-800 focus:outline-none h-48 focus:border-yellow-200 text-base px-4 py-2 resize-none block" placeholder="Message"></textarea>
          </div>
          <div className="p-2 w-full">
            <button className="bg-orange-100 text-gray-600 font-semibold  flex mx-auto  border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg">Submit</button>
          </div>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
            
            
          </div>
        </div>
      </div>
    </div>

  </section>
    </Layout>
  );
}

export default ContactPage;
