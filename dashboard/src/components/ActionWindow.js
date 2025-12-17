import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const ActionWindow = ({ uid, mode }) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);
  const { closeWindow } = useContext(GeneralContext);

  const handleSubmit = async () => {
    if (qty <= 0 || price <= 0) {
      alert("Enter valid quantity & price");
      return;
    }

    await axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: Number(qty),
      price: Number(price),
      mode, 
    });

    closeWindow();
  };

  return (
    <div className={`container ${mode === "SELL" ? "sell" : ""}`}>
      <div className="regular-order">
        <h3 style={{ marginBottom: "10px" }}>
          {mode} — {uid}
        </h3>

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
        <button
          className={`btn ${mode === "SELL" ? "btn-red" : "btn-blue"}`}
          onClick={handleSubmit}
        >
          {mode}
        </button>

        <button className="btn btn-grey" onClick={closeWindow}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ActionWindow;
