/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Test Excede Products`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-static-props"],
};
