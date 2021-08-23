import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import abductionIllustration from '../images/abduction-illustration.svg';

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" pathname="/404" />
      <div>
        <img
          alt="Ghost getting abducted by aliens"
          className="block w-1/2 mx-auto"
          src={abductionIllustration}
        />
        <div className="container flex justify-center">
          <h2 className="inline-block p-3 my-8 text-2xl font-bold text-black bg-yellow-400">
            Looks like this page is a ghost that got abducted by a goose...
          </h2>
        </div>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
