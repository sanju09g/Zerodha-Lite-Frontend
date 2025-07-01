import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GeneralContext } from "./GeneralContext";
import styles from "./BuyActionWindow.module.css"; // ✅ CSS Module import
import axios from "axios";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const navigate = useNavigate();

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  const handleBuyClick = async () => {
    try {
      const response = await axios.post(
        "https://zerodha-lite-backend.onrender.com/buyOrder", // 🔧 Adjust this to your actual endpoint
        {
          name:uid,
          qty: stockQuantity,
          price: stockPrice,
          mode:"buy"
        },
        {
          withCredentials: true,
        }
      );

      const data = response.data;

      if (data.success) {
       closeBuyWindow();
        alert("Order placed!");
        navigate("/dashboard");
      } else {
        alert(data.message || "Order failed.");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || "Order failed.");
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
        <span>
          Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}
        </span>
        <div>
          <Link className={`${styles.btn} ${styles["btn-blue"]}`} onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className={`${styles.btn} ${styles["btn-grey"]}`} onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
