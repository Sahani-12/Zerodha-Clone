import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);

  useEffect(() => {
    axios
      .get("https://zerodha-d3n3.onrender.com/allPositions", {
        withCredentials: true,
      })
      .then((res) => {
        setAllPositions(res.data);
      });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg</th>
              <th>LTP</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg}</td>
                <td>{stock.price}</td>

                <td style={{ position: "relative", zIndex: 9999 }}>
                  <button
                    className="btn btn-blue"
                    onClick={() => openBuyWindow(stock.name)}
                  >
                    Buy
                  </button>

                  <button
                    className="btn btn-red"
                    style={{ marginLeft: "6px" }}
                    onClick={() => openSellWindow(stock.name)}
                  >
                    Sell
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
