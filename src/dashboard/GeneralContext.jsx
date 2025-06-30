import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";


// ✅ Create a new context with default empty functions.
// These are fallback values if no Provider is used.
export const GeneralContext = React.createContext({
  openBuyWindow: (uid,price) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid,price) => {},
  closeSellWindow: () => {},
});

// ✅ The context provider component that wraps part of your app
export const GeneralContextProvider = ({ children }) => {
  // State to track if the buy window is open or not
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

  // State to track which stock UID is currently selected
  const [selectedStockUID, setSelectedStockUID] = useState("");


  // ✅ Function to open the buy window and set the selected stock UID
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);      // Open the buy window
    setSelectedStockUID(uid);      // Save the UID of the selected stock
  };

  // ✅ Function to close the buy window and clear selected UID
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);     // Close the buy window
    setSelectedStockUID("");       // Clear the stock UID
  };
  
  const handleOpenSellWindow = (uid)=>{
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = (uid)=>{
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    // ✅ Provide the functions to all children components using context
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,    // Function to open the window
        closeBuyWindow: handleCloseBuyWindow, 
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow // Function to close the window
      }}
    >
      {/* ✅ Render all the child components inside the provider */}
      {children}

      {/* ✅ If buy window is open, show the BuyActionWindow component */}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};
