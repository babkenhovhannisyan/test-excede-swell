import React from "react";
import { Link } from "gatsby";
import { getProducts } from "../../lib/swell/products";

//execute in server-side only
export async function getStaticProps() {
  const products = await getProducts();

  return {
    products,
  };
}

const IndexPage = ({ pageContext }) => {
  const products = pageContext?.products?.results || [];

  return (
    <main>
      <h1>Products list</h1>
      <div className="row">
        {products.map((product) => {
          return (
            <Link
              to={`/products/${product.slug}`}
              className="card"
              key={product.id}
            >
              <div className="card__image">
                <img src={product.images[0]["file"]["url"]} alt="image" />
              </div>
              <div className="card__content">
                <h3 className="product-title" key={product.id}>
                  {product.name}
                </h3>
              </div>
              <hr />
              <div className="info">
                <span>
                  {product.price} {product.currency}
                </span>
                <button>Buy Now</button>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
