const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Goosebumps Collective`,
    titleTemplate: "%s · Goosebumps Collective",
    description: `Freelance Web Development & Curated Music`,
    url: "https://goosebumps.co.zw",
    image: "/images/orange.jpg",
    author: `@txndai`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-external-links`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 620,
            },
          },
        ],
      },
    },
    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
            plugins: [`gatsby-remark-responsive-iframe`, `gatsby-remark-prismjs`,],
        
      },
    },
    //posts
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Goosebumps Collective`,
        short_name: `Goosebumps`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.gray["700"],
        display: `minimal-ui`,
        icon: `src/images/gb.png`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Circular", "Circular-Bold"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-175474036-1",
      },
    },
  ],
};
