import React from "react";
import { getProducts } from "../../lib/swell/products";
import "./style.css";

//execute in server-side only
export async function getStaticProps() {
  const products = await getProducts();

  return {
    products,
  };
}

const IndexPage = ({ pageContext }) => {
  const products = pageContext?.products.results || [];

  console.log("products", products);

  return (
    <main>
      <h1>Products list</h1>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="card" key={product.id}>
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
                <span>$130</span>
                <button>Buy Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
