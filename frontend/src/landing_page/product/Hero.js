import React from "react";

function Hero() {
  return (
    <div className="container  border-bottom" style={{ height: "250px" }}>
      <div className="text-center mt-5 p-3">
        <h1 className="fs-3 text-muted">Zerodha Products</h1>
        <h3 className="text-muted mt-3 fs-5">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
