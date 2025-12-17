import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 border-top">
        <h1 className="fs-3 text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
      >
        <div className="col-lg-6 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-lg-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="/" className="text-decoration-none">
              Homepage
            </a>{" "}
            /{" "}
            <a href="/" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="/" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>

      <div className="row p-5">
        <div className="col-lg-4 text-center mb-5">
          <img
            src="media/images/Nikhil.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Nikhil Kamath"
          />
          <h4 className="mt-5">Nikhil Kamath</h4>
          <h6 className="text-muted">Co-founder & CFO</h6>
          <p className="mt-3 text-muted" style={{ cursor: "pointer" }}>
            Bio{" "}
            <i
              className="fa-solid fa-chevron-down"
              style={{ fontSize: "0.8rem" }}
            ></i>
          </p>
        </div>

        <div className="col-lg-4 text-center mb-5">
          <img
            src="media/images/Kailash.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Kailash Nadh"
          />
          <h4 className="mt-5">Dr. Kailash Nadh</h4>
          <h6 className="text-muted">CTO</h6>
          <p className="mt-3 text-muted" style={{ cursor: "pointer" }}>
            Bio{" "}
            <i
              className="fa-solid fa-chevron-down"
              style={{ fontSize: "0.8rem" }}
            ></i>
          </p>
        </div>

        <div className="col-lg-4 text-center mb-5">
          <img
            src="media/images/Venu.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Venu Madhav"
          />
          <h4 className="mt-5">Venu Madhav</h4>
          <h6 className="text-muted">COO</h6>
          <p className="mt-3 text-muted" style={{ cursor: "pointer" }}>
            Bio{" "}
            <i
              className="fa-solid fa-chevron-down"
              style={{ fontSize: "0.8rem" }}
            ></i>
          </p>
        </div>

        <div className="col-lg-4 text-center mb-5">
          <img
            src="media/images/Hanan.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Hanan Delvi"
          />
          <h4 className="mt-5">Hanan Delvi</h4>
          <h6 className="text-muted">CCO</h6>
          <p className="mt-3 text-muted" style={{ cursor: "pointer" }}>
            Bio{" "}
            <i
              className="fa-solid fa-chevron-down"
              style={{ fontSize: "0.8rem" }}
            ></i>
          </p>
        </div>

        <div className="col-lg-4 text-center mb-5">
          <img
            src="media/images/Seema.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Seema Patil"
          />
          <h4 className="mt-5">Seema Patil</h4>
          <h6 className="text-muted">Director</h6>
          <p className="mt-3 text-muted" style={{ cursor: "pointer" }}>
            Bio{" "}
            <i
              className="fa-solid fa-chevron-down"
              style={{ fontSize: "0.8rem" }}
            ></i>
          </p>
        </div>

        <div className="col-lg-4 text-center mb-5">
          <img
            src="media/images/karthik.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
            alt="Karthik Rangappa"
          />
          <h4 className="mt-5">Karthik Rangappa</h4>
          <h6 className="text-muted">Chief of Education</h6>
          <p className="mt-3 text-muted" style={{ cursor: "pointer" }}>
            Bio{" "}
            <i
              className="fa-solid fa-chevron-down"
              style={{ fontSize: "0.8rem" }}
            ></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
