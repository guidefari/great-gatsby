import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from 'gatsby';
// import img from '../images/gb.png'

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername: author
      }
    }
  }
`;

const SEO = ({ description, lang, meta, keywords, title, image, article }) => {
  // const { pathname } = useLocation()
  const { site } = useStaticQuery(query);

  const {
    // defaultTitle,
    // titleTemplate,
    // defaultDescription,
    siteUrl,
    defaultImage,
    // twitterUsername,
  } = site.siteMetadata;

  console.log(defaultImage);

  // const seo = {
  //   title: title || defaultTitle,
  //   description: description || defaultDescription,
  //   image: `${siteUrl}${image || defaultImage}`,
  //   url: `${siteUrl}${pathname}`,
  // }

  const metaDescription = description || site.siteMetadata.description;
  const seoImage = `${siteUrl}${image || defaultImage}`;

  return (
    <Helmet
      article={article}
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          property: `og:title`,
          content: title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: seoImage,
        },
        {
          property: `og:image`,
          content: seoImage,
        },
        {
          name: `twitter:image`,
          content: seoImage,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.defaultTitle}`}
    />
  );
};

export default SEO;

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  meta: [],
  article: false,
};
