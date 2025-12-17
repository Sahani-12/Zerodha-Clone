import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: () => {},
  openSellWindow: () => {},
  closeWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [type, setType] = useState(null);
  const [uid, setUid] = useState("");

  const openBuyWindow = (id) => {
    setUid(id);
    setType("BUY");
  };

  const openSellWindow = (id) => {
    setUid(id);
    setType("SELL");
  };

  const closeWindow = () => {
    setType(null);
    setUid("");
  };

  return (
    <GeneralContext.Provider
      value={{ openBuyWindow, openSellWindow, closeWindow }}
    >
      {props.children}
      {type === "BUY" && <BuyActionWindow uid={uid} />}
      {type === "SELL" && <SellActionWindow uid={uid} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
