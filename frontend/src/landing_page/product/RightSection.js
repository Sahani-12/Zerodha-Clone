import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Text Section (Left Column) */}
        <div className="col-6 p-5 mt-5">
          <h1 className="fs-4 mb-3">{productName}</h1>
          <p
            className="lead text-muted"
            style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
          >
            {productDescription}
          </p>

          {/* Link Section */}
          <div className="mt-3">
            <a
              href={learnMore}
              style={{ textDecoration: "none", color: "#387ed1" }}
            >
              Learn more <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Image Section (Right Column) */}
        <div className="col-6 p-5">
          <img src={imageURL} alt="Product" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
