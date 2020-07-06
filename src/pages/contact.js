import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
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
            
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-4 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-4 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-4 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>

  </section>
    </Layout>
  );
}

export default ContactPage;
