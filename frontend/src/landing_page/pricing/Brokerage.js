import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-10 offset-lg-1 p-4">
          <div className="d-flex border-bottom mb-4">
            <h3
              className="fs-5 p-3 mb-0 text-center"
              style={{
                color: "#424242",
                borderBottom: "3px solid #387ed1",
                cursor: "pointer",
                width: "20%",
              }}
            >
              Equity
            </h3>
            <h3
              className="fs-5 p-3 mb-0 text-center"
              style={{ color: "#387ed1", cursor: "pointer", width: "20%" }}
            >
              Currency
            </h3>
            <h3
              className="fs-5 p-3 mb-0 text-center"
              style={{ color: "#387ed1", cursor: "pointer", width: "20%" }}
            >
              Commodity
            </h3>
          </div>

          <div className="border rounded">
            <table
              className="table table-striped mb-0"
              style={{ fontSize: "13px" }}
            >
              <thead>
                <tr className="border-bottom bg-white">
                  <th className="p-3 text-muted fw-normal text-center"></th>
                  <th className="p-3 text-muted fw-normal text-center fs-5">
                    Equity delivery
                  </th>
                  <th className="p-3 text-muted fw-normal text-center fs-5">
                    Equity intraday
                  </th>
                  <th className="p-3 text-muted fw-normal text-center fs-5">
                    F&O - Futures
                  </th>
                  <th className="p-3 text-muted fw-normal text-center fs-5">
                    F&O - Options
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 text-muted">Brokerage</td>
                  <td className="p-3 text-muted">Zero Brokerage</td>
                  <td className="p-3 text-muted">
                    0.03% or Rs. 20/executed order whichever is lower
                  </td>
                  <td className="p-3 text-muted">
                    0.03% or Rs. 20/executed order whichever is lower
                  </td>
                  <td className="p-3 text-muted">
                    Flat Rs. 20 per executed order
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-muted">STT/CTT</td>
                  <td className="p-3 text-muted">0.1% on buy & sell</td>
                  <td className="p-3 text-muted">0.025% on the sell side</td>
                  <td className="p-3 text-muted">0.02% on the sell side</td>
                  <td className="p-3 text-muted">
                    <ul className="list-unstyled mb-0">
                      <li>
                        0.125% of the intrinsic value on options that are bought
                        and exercised
                      </li>
                      <li>0.1% on sell side (on premium)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-muted">Transaction charges</td>
                  <td className="p-3 text-muted">
                    NSE: 0.00297%
                    <br />
                    BSE: 0.00375%
                  </td>
                  <td className="p-3 text-muted">
                    NSE: 0.00297%
                    <br />
                    BSE: 0.00375%
                  </td>
                  <td className="p-3 text-muted">
                    NSE: 0.00173%
                    <br />
                    BSE: 0
                  </td>
                  <td className="p-3 text-muted">
                    NSE: 0.03503% (on premium)
                    <br />
                    BSE: 0.0325% (on premium)
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-muted">GST</td>
                  <td className="p-3 text-muted">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td className="p-3 text-muted">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td className="p-3 text-muted">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td className="p-3 text-muted">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-muted">SEBI charges</td>
                  <td className="p-3 text-muted">₹10 / crore</td>
                  <td className="p-3 text-muted">₹10 / crore</td>
                  <td className="p-3 text-muted">₹10 / crore</td>
                  <td className="p-3 text-muted">₹10 / crore</td>
                </tr>
                <tr>
                  <td className="p-3 text-muted">Stamp charges</td>
                  <td className="p-3 text-muted">
                    0.015% or ₹1500 / crore on buy side
                  </td>
                  <td className="p-3 text-muted">
                    0.003% or ₹300 / crore on buy side
                  </td>
                  <td className="p-3 text-muted">
                    0.002% or ₹200 / crore on buy side
                  </td>
                  <td className="p-3 text-muted">
                    0.003% or ₹300 / crore on buy side
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-5 mb-5">
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "#387ed1",
                fontSize: "1.1rem",
              }}
            >
              Calculate your costs upfront
            </a>
            <span className="text-muted ms-2" style={{ fontSize: "1.1rem" }}>
              using our brokerage calculator
            </span>
          </div>

          {/* --- Section 2: Account Opening Charges --- */}
          <h3 className="fs-4 mb-4 mt-5 text-muted">
            Charges for account opening
          </h3>
          <div className="border rounded">
            <table className="table mb-0" style={{ fontSize: "14px" }}>
              <thead>
                <tr className="border-bottom bg-white">
                  <th className="p-3 text-muted fw-normal">Type of account</th>
                  <th className="p-3 text-muted fw-normal">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-bottom">
                  <td className="p-3 text-muted">Online account</td>
                  <td className="p-3">
                    <span className="badge bg-success text-uppercase">
                      Free
                    </span>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <td className="p-3 text-muted">Offline account</td>
                  <td className="p-3">
                    <span className="badge bg-success text-uppercase">
                      Free
                    </span>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <td className="p-3 text-muted">NRI account (offline only)</td>
                  <td className="p-3 text-muted">₹ 500</td>
                </tr>
                <tr>
                  <td className="p-3 text-muted">
                    Partnership, LLP, HUF, or Corporate accounts (offline only)
                  </td>
                  <td className="p-3 text-muted">₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* --- Section 3: Demat AMC --- */}
          <h3 className="fs-4 mb-4 mt-5 text-muted">
            Demat AMC (Annual Maintenance Charge)
          </h3>
          <div className="border rounded">
            <table className="table mb-0" style={{ fontSize: "14px" }}>
              <thead>
                <tr className="border-bottom bg-white">
                  <th className="p-3 text-muted fw-normal">
                    Value of holdings
                  </th>
                  <th className="p-3 text-muted fw-normal">AMC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-bottom">
                  <td className="p-3 text-muted">Up to ₹4 lakh</td>
                  <td className="p-3">
                    <span className="badge bg-success text-uppercase">
                      Free
                    </span>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <td className="p-3 text-muted">₹4 lakh - ₹10 lakh</td>
                  <td className="p-3 text-muted">
                    ₹ 100 per year, charged quarterly
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-muted">Above ₹10 lakh</td>
                  <td className="p-3 text-muted">
                    ₹ 300 per year, charged quarterly
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* --- Section 4: Detailed Charges  --- */}
          <div className="mt-5 text-muted">
            <h3 className="fs-4 mb-5">Charges explained</h3>

            <div className="row fs-6" style={{ lineHeight: "1.8" }}>
              {/* --- Left Column --- */}
              <div className="col-lg-6">
                <h5 className="fs-6 fw-bold">
                  Securities/Commodities Transaction Tax
                </h5>
                <p className="small">
                  Tax by the government when transacting on the exchanges.
                  Charged as above on both buy and sell sides when trading
                  equity delivery. Charged only on selling side when trading
                  intraday or on F&O.
                </p>
                <p className="small">
                  When trading at Zerodha, STT/CTT can be a lot more than the
                  brokerage we charge. Important to keep a tab.
                </p>

                <h5 className="fs-6 fw-bold mt-4">
                  Transaction/Turnover Charges
                </h5>
                <p className="small">
                  Charged by exchanges (NSE, BSE, MCX) on the value of your
                  transactions.
                </p>
                <p className="small">
                  BSE has revised transaction charges in XC, XD, XT, Z and ZP
                  groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD
                  groups have been merged into a new group X w.e.f 01.12.2017)
                </p>
                <p className="small">
                  BSE has revised transaction charges in SS and ST groups to
                  ₹1,00,000 per crore of gross turnover.
                </p>

                <h5 className="fs-6 fw-bold mt-4">GST</h5>
                <p className="small">
                  Tax levied by the government on the services rendered. 18% of
                  ( brokerage + SEBI charges + transaction charges).
                </p>

                <h5 className="fs-6 fw-bold mt-4">SEBI Charges</h5>
                <p className="small">
                  Charged at ₹10 per crore + GST by Securities and Exchange
                  Board of India for regulating the markets.
                </p>

                {/* NEW: IPFT Charges */}
                <h5 className="fs-6 fw-bold mt-4">
                  Charges for Investor's Protection Fund Trust (IPFT) by NSE
                </h5>
                <ul className="small text-muted ps-3">
                  <li>
                    Equity and Futures - ₹10 per crore + GST of the traded
                    value.
                  </li>
                  <li>
                    Options - ₹50 per crore + GST traded value (premium value).
                  </li>
                  <li>
                    Currency - ₹0.05 per lakh + GST of turnover for Futures and
                    ₹2 per lakh + GST of premium for Options.
                  </li>
                </ul>

                {/* NEW: MTF */}
                <h5 className="fs-6 fw-bold mt-4">
                  Margin Trading Facility (MTF)
                </h5>
                <ul className="small text-muted ps-3">
                  <li>
                    MTF Interest: 0.04% per day (₹40 per lakh) on the funded
                    amount. The interest is applied from T+1 day until the day
                    MTF stocks are sold.
                  </li>
                  <li>
                    MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                    lower.
                  </li>
                  <li>
                    MTF pledge charge: ₹15 + GST per pledge and unpledge request
                    per ISIN.
                  </li>
                </ul>
              </div>

              {/* --- Right Column --- */}
              <div className="col-lg-6">
                <h5 className="fs-6 text-muted fw-bold">Stamp charges</h5>
                <p className="small">
                  Stamp charges by the Government of India as per the Indian
                  Stamp Act of 1899 for transacting in instruments on the stock
                  exchanges and depositories.
                </p>

                <h5 className="fs-6 text-muted fw-bold mt-4">
                  Pledging charges
                </h5>
                <p className="small">₹30 + GST per pledge request.</p>

                <h5 className="fs-6 text-muted fw-bold mt-4">
                  AMC (Account maintenance charges)
                </h5>
                <p className="small">
                  For BSDA demat account: Zero charges if the holding value is
                  less than ₹4 lakhs. To learn more about BSDA,{" "}
                  <a href="/" className="text-decoration-none">
                    click here
                  </a>
                </p>
                <p className="small">
                  For non-BSDA demat accounts: ₹300/year + 18% GST charged
                  quarterly (90 days). To learn more about AMC,{" "}
                  <a href="/" className="text-decoration-none">
                    click here
                  </a>
                </p>

                <h5 className="fs-6 text-muted fw-bold mt-4">
                  Off-market transfer charges
                </h5>
                <p className="small">₹25 per transaction.</p>

                <h5 className="fs-6 text-muted fw-bold mt-4">
                  Physical CMR request
                </h5>
                <p className="small">
                  First CMR request is free. ₹20 + ₹100 (courier charge) + 18%
                  GST for subsequent requests.
                </p>

                <h5 className="fs-6 text-muted fw-bold mt-4">
                  Payment gateway charges
                </h5>
                <p className="small">
                  ₹9 + GST (Not levied on transfers done via UPI)
                </p>

                {/* NEW: Delayed Payment */}
                <h5 className="fs-6 text-muted fw-bold mt-4">
                  Delayed Payment Charges
                </h5>
                <p className="small">
                  Interest is levied at 18% a year or 0.05% per day on the debit
                  balance in your trading account.{" "}
                  <a href="/" className="text-decoration-none">
                    Learn more.
                  </a>
                </p>

                {/* NEW: 3-in-1 Account */}
                <h5 className="fs-6 text-muted fw-bold mt-4">
                  Trading using 3-in-1 account with block functionality
                </h5>
                <ul className="small text-muted ps-3">
                  <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                  <li>Intraday Brokerage: 0.05% per executed order.</li>
                </ul>
              </div>
            </div>

            {/* --- Disclaimer Section --- */}
            <div className="mt-5 text-muted text-small">
              <h5 className="fs-6 text-muted fw-bold">Disclaimer</h5>
              <p className="small" style={{ lineHeight: "1.6" }}>
                For Delivery based trades, a minimum of ₹0.01 will be charged
                per contract note. Clients who opt to receive physical contract
                notes will be charged ₹20 per contract note plus courier
                charges. Brokerage will not exceed the rates specified by SEBI
                and the exchanges. All statutory and regulatory charges will be
                levied at actuals. Brokerage is also charged on expired,
                exercised, and assigned options contracts. Free investments are
                available only for our retail individual clients. Companies,
                Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
                (whichever is less) as delivery brokerage. A brokerage of 0.25%
                of the contract value will be charged for contracts where
                physical delivery happens. For netted off positions in
                physically settled contracts, a brokerage of 0.1% will be
                charged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
