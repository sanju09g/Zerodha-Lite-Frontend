import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles/Dashboard.module.css";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-lite-backend.onrender.com/allPositions", {
      withCredentials: true,
    }).then((res) => {
      
      setAllPositions(res.data);
    });
  }, []);

  return (
    <>
      {allPositions.length !== 0 ? (
        <>
          <h3 className={styles.title}>Positions ({allPositions.length})</h3>

          <div className={styles["order-table"]}>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg.</th>
                  <th>LTP</th>
                  <th>P&L</th>
                  <th>Chg.</th>
                </tr>
              </thead>
              <tbody>
                {allPositions.map((stock, index) => {
                  const currVal = stock.price * stock.qty;
                  const isProfit = currVal - stock.avg * stock.qty >= 0.0;
                  const profClass = isProfit ? styles.profit : styles.loss;
                  const dayClass = stock.isLoss ? styles.loss : styles.profit;

                  return (
                    <tr key={index}>
                      <td>{stock.product}</td>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td className={profClass}>
                        {(currVal - stock.avg * stock.qty).toFixed(2)}
                      </td>
                      <td className={dayClass}>{stock.day}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className={styles["no-orders"]}>
          <p><b>You don’t have any open positions</b></p>
          <Link to="/dashboard" className={`${styles.btn} ${styles["btn-pos"]}`}>
            Get started
          </Link>
        </div>
      )}
    </>
  );
};

export default Positions;
