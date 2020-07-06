import React from "react";

import HomeLayout from "../components/HomeLayout";
import SEO from "../components/seo";
import Hero from "../images/space.svg";
import Feature from "../templates/featureContainer";

function IndexPage() {
  return (
    <HomeLayout>
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
        />
      </section>
    </HomeLayout>
  );
}

export default IndexPage;
