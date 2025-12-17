import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);
  const { closeWindow } = useContext(GeneralContext);

  const handleSellClick = async () => {
    if (qty <= 0 || price <= 0) {
      alert("Invalid qty / price");
      return;
    }

    await axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: Number(qty),
      price: Number(price),
      mode: "SELL",
    });

    closeWindow();
  };

  return (
    <div className="sell-container">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty</legend>
            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <button className="sell-btn" onClick={handleSellClick}>
          Sell
        </button>
        <button className="cancel-btn" onClick={closeWindow}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SellActionWindow;
