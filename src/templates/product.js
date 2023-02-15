import React, { useState } from "react";
import { Link } from "gatsby";

const ProductPage = ({ pageContext }) => {
  const [selectedImage, setSelectedImage] = useState(
    pageContext?.data?.images[0]
  );

  return (
    <main>
      <div className="row-detail">
        <Link to="/" className="home-page">
          Back to products page
        </Link>
      </div>
      <div class="row-detail">
        <div class="row-detail__image">
          <img src={selectedImage?.file?.url} alt={pageContext?.data?.name} />
          <ul class="images-list">
            {(pageContext?.data?.images || []).map((image) => {
              return (
                <li
                  key={image.id}
                  className={image.id === selectedImage.id ? "selected" : ""}
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image.file.url} alt={pageContext?.data?.name} />
                </li>
              );
            })}
          </ul>
        </div>
        <div class="row-detail__content">
          <h2>{pageContext?.data?.name}</h2>
          <h3 class="price">
            {pageContext?.data?.price} {pageContext?.data?.currency}
          </h3>
          <hr />
          <button>Buy Now</button>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;

export const Head = ({ pageContext }) => (
  <title>{pageContext?.data?.name || "Product page"}</title>
);
