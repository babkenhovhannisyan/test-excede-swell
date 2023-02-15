const path = require(`path`);
const swell = require("swell-js");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  // Initialize the Swell SDK with API keys
  swell.init(
    process.env.GATSBY_PUBLIC_SWELL_STORE_ID,
    process.env.GATSBY_PUBLIC_SWELL_PUBLIC_KEY
  );

  // Fetch products data from REST API
  const products = await swell.products.list();
  const productTemplate = path.resolve(`src/templates/product.js`);

  // Create a page for each product with its slug
  products.results.forEach((product) => {
    const slug = product.slug;
    createPage({
      path: `/products/${slug}`,
      component: productTemplate,
      context: { slug, data: product },
    });
  });
};
