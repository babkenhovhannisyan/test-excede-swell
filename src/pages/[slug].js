import React, { useEffect } from "react";
import { Link } from "gatsby";
import { getProduct } from "../../lib/swell/products";

const ProductPage = ({ serverData }) => {
  console.log("serverData", serverData);

  useEffect(() => {
    getProduct("product-four");
  }, []);

  return (
    <main>
      <div className="row-detail">
        <Link to="/" className="home-page">
          Back to products page
        </Link>
      </div>
      <div class="row-detail">
        <div class="row-detail__image">
          <img src="https://i.ibb.co/L8Nrb7p/1.jpg" alt="image" />
          <ul class="images-list">
            <li>
              <img src="https://i.ibb.co/L8Nrb7p/1.jpg" alt="image" />
            </li>
            <li>
              <img src="https://i.ibb.co/L8Nrb7p/1.jpg" alt="image" />
            </li>
          </ul>
        </div>
        <div class="row-detail__content">
          <h2>{"product.name"}</h2>
          <h3 class="price">$90</h3>
          <hr />
          <button>Buy Now</button>
        </div>
      </div>
    </main>
  );
};

export async function getServerData(props) {
  const {
    params: { slug },
  } = props;

  try {
    const product = await getProduct(slug);

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      props: { error: true, message: error },
    };
  }
}

export default ProductPage;

export const Head = () => <title>Product Page</title>;
