import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#fbfbfb", borderTop: "1px solid #eee" }}>
      <div className="container mt-5">
        <div className="row">
          {/* Column 1: Logo & Social Icons */}
          <div className="col-md-3">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "150px", marginBottom: "15px" }}
            />
            <p className="text-muted" style={{ fontSize: "13px" }}>
              &copy; 2010 - 2025, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
            {/* Social Icons - Row 1 */}
            <div className="mb-3 border-bottom pb-3">
              <a href="#" className="text-muted me-3">
                <i className="fa-brands fa-x-twitter fs-5"></i>
              </a>
              <a href="#" className="text-muted me-3">
                <i className="fa-brands fa-square-facebook fs-5"></i>
              </a>
              <a href="#" className="text-muted me-3">
                <i className="fa-brands fa-instagram fs-5"></i>
              </a>
              <a href="#" className="text-muted me-3">
                <i className="fa-brands fa-linkedin-in fs-5"></i>
              </a>
            </div>
            {/* Social Icons - Row 2 */}
            <div className="pb-3  mb-3">
              <a href="#" className="text-muted me-3">
                <i className="fa-brands fa-youtube fs-5"></i>
              </a>
              <a href="#" className="text-muted me-3">
                <i className="fa-brands fa-whatsapp fs-5"></i>
              </a>
              <a href="#" className="text-muted me-3">
                <i className="fa-brands fa-telegram fs-5"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Account */}
          <div className="col">
            <h5 className="mb-3 fw-medium text-dark fs-5">Account</h5>
            <ul className="list-unstyled" style={{ fontSize: "15px" }}>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Open demat account
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Minor demat account
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  NRI demat account
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Commodity
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Dematerialisation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Fund transfer
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  MTF
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Referral program
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="col">
            <h5 className="mb-3 fw-medium text-dark fs-5">Support</h5>
            <ul className="list-unstyled" style={{ fontSize: "15px" }}>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Contact us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Support portal
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  How to file a complaint?
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Status of your complaints
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Bulletin
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Circular
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Z-Connect blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Downloads
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="col">
            <h5 className="mb-3 fw-medium text-dark fs-5">Company</h5>
            <ul className="list-unstyled" style={{ fontSize: "15px" }}>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Philosophy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Press & media
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Zerodha Cares (CSR)
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Zerodha.tech
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Open source
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Quick Links */}
          <div className="col">
            <h5 className="mb-3 fw-medium text-dark fs-5">Quick links</h5>
            <ul className="list-unstyled" style={{ fontSize: "15px" }}>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Upcoming IPOs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Brokerage charges
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Market holidays
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Economic calendar
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Calculators
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Markets
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-muted">
                  Sectors
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-5 text-muted"
          style={{ fontSize: "11px", lineHeight: "1.6" }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to{" "}
            <a href="" className="text-primary text-decoration-none">
              complaints@zerodha.com
            </a>
            , for DP related to{" "}
            <a href="" className="text-primary text-decoration-none">
              dp@zerodha.com
            </a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on{" "}
            <a href="" className="text-primary text-decoration-none">
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <p>
            <a href="" className="text-primary text-decoration-none">
              Smart Online Dispute Resolution
            </a>{" "}
            |{" "}
            <a href="" className="text-primary text-decoration-none">
              Grievances Redressal Mechanism
            </a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please{" "}
            <a href="" className="text-primary text-decoration-none">
              create a ticket here
            </a>
            .
          </p>
        </div>

        {/* Footer Bottom Links */}
        <div
          className="d-flex justify-content-center pt-3 pb-3"
          style={{ fontSize: "13px", fontWeight: "500" }}
        >
          <a
            href="#"
            className="text-muted text-decoration-none mx-2 hover-link"
          >
            NSE
          </a>
          <a
            href="#"
            className="text-muted text-decoration-none mx-2 hover-link"
          >
            BSE
          </a>
          <a
            href="#"
            className="text-muted text-decoration-none mx-2 hover-link"
          >
            MCX
          </a>
          <a
            href="#"
            className="text-muted text-decoration-none mx-2 hover-link"
          >
            Terms & conditions
          </a>
          <a
            href="#"
            className="text-muted text-decoration-none mx-2 hover-link"
          >
            Policies & procedures
          </a>
          <a
            href="#"
            className="text-muted text-decoration-none mx-2 hover-link"
          >
            Privacy policy
          </a>
          <a
            href="#"
            className="text-muted text-decoration-none mx-2 hover-link"
          >
            Disclosure
          </a>
          <a
            href="#"
            className="text-muted text-decoration-none mx-2 hover-link"
          >
            For investor's attention
          </a>
          <a
            href="#"
            className="text-muted text-decoration-none mx-2 hover-link"
          >
            Investor charter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
