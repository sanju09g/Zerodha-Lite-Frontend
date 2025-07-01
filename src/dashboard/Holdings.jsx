import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import styles from "./styles/Dashboard.module.css";
import { Link } from "react-router-dom";
const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-lite-backend.onrender.com/allHoldings", {
      withCredentials: true,
    }).then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255,99,132,0.51)",
      },
    ],
  };

  return (
    <>
     {allHoldings.length != 0? (<>
      <h3 className={styles.title}>Holdings ({allHoldings.length})</h3>

      <div className={styles["orders-table"]}>
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const currVal = stock.price * stock.qty;
              const isProfit = currVal - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? styles.profit : styles.loss;
              const dayClass = stock.isLoss ? styles.loss : styles.profit;

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toLocaleString("en-IN")}</td>
                  <td>{stock.price.toLocaleString("en-IN")}</td>
                  <td>{currVal.toLocaleString("en-IN")}</td>
                  <td className={profClass}>
                    {(currVal - stock.avg * stock.qty).toLocaleString("en-IN")}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className={styles.col}>
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className={styles.col}>
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} /></>):(<div className={styles["no-orders"]}>
          <p><b>You haven't placed any orders yet</b></p>
          <Link to="/dashboard" className={`${styles.btn} ${styles["btn-hold"]}`}>Get started</Link>
        </div>)}
    </>
  );
};

export default Holdings;
