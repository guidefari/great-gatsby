import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`, `contact`]}
        title="Contact"
        pathname="/contact"
      />
      <section className="relative section80">
    
    <div className="container px-5 py-24 mx-auto">

      <div className="flex flex-col w-full mb-12 text-center ">
        <h1 className="text-2xl underline uppercase md:text-5xl">Contact Us</h1>
        <p className="mx-auto text-base leading-relaxed text-black lg:w-2/3">Let&#39;s work together, leave a message below.</p>
      </div>

      <form className="mx-auto lg:w-1/2 md:w-2/3" name="contact" data-netlify="true" method='POST' data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="flex flex-wrap -m-2">
          <div className="w-1/2 p-2">
            <input className="w-full px-4 py-2 text-base text-gray-800 bg-gray-300 border border-gray-700 rounded focus:outline-none focus:border-yellow-200" placeholder="Name" type="text" name='name' ></input>
          </div>
          <div className="w-1/2 p-2">
            <input className="w-full px-4 py-2 text-base text-gray-800 bg-gray-300 border border-gray-700 rounded focus:outline-none focus:border-yellow-200" placeholder="Email" type="email" name='email' ></input>
          </div>
          <div className="w-full p-2">
            <textarea className="block w-full h-48 px-4 py-2 text-base text-gray-800 bg-gray-300 border border-gray-700 rounded resize-none focus:outline-none focus:border-yellow-200" placeholder="Message" name='message'></textarea>
          </div>
          <div className="w-full p-2">
            <button className="flex px-8 py-2 mx-auto text-lg font-semibold text-gray-600 bg-orange-100 border-0 rounded focus:outline-none hover:bg-gray-400" type='submit'>Submit</button>
          </div>
          <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-800">
          </div>
        </div>
      </form>

    </div>

  </section>
    </Layout>
  );
}

export default ContactPage;
