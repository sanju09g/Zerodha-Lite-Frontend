import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GeneralContext } from "./GeneralContext";
import styles from "./BuyActionWindow.module.css"; // ✅ reuse Buy style
import axios from "axios";

function SellActionWindow({ uid }) {
  const { closeSellWindow } = useContext(GeneralContext);
  const navigate = useNavigate();

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleCancelClick = () => {
    closeSellWindow();
  };

  const handleSellClick = async () => {
    try {
      const response = await axios.post(
        "https://zerodha-lite-backend.onrender.com/sellOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "sell",
        },
        {
          withCredentials: true,
        }
      );

      const data = response.data;
      if (data.success) {
        alert("Order Sold!");
        closeSellWindow();
        navigate("/dashboard");
      } else {
        alert(data.message || "Sell order failed.");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || "Sell order failed.");
      } else {
        alert("Something went wrong!");
      }
    }
  };

  return (
    <div className={styles.container} draggable="true">
      <div className={styles["regular-order"]}>
        <div className={styles.inputs}>
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className={styles.buttons}>
        <span>Sell value ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <button
            className={`${styles.btn} ${styles["btn-red"]}`}
            onClick={handleSellClick}
          >
            Sell
          </button>
          <button
            className={`${styles.btn} ${styles["btn-grey"]}`}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default SellActionWindow;
