import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Image Section */}
        <div className="col-6 p-5">
          <img src={imageURL} alt="Product" />
        </div>

        {/* Right Text Section */}
        <div className="col-6 p-5 mt-5">
          <h1 className="fs-4 mb-3">{productName}</h1>
          <p className=" text-muted">{productDescription}</p>

          {/* Action Links with Icons */}
          <div className="mt-3">
            <a
              href={tryDemo}
              style={{ textDecoration: "none", color: "#387ed1" }}
            >
              Try demo <i className="fa fa-long-arrow-right"></i>
            </a>

            <a
              href={learnMore}
              className="ms-5"
              style={{ textDecoration: "none", color: "#387ed1" }}
            >
              Learn more <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>

          {/* App Store Badges */}
          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play Store"
              />
            </a>
            <a href={appStore} className="ms-3">
              <img src="media/images/appStoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
