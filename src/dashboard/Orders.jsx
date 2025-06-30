import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Dashboard.module.css";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/orders", {
      withCredentials: true,
    })
    .then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <div className={styles["orders-table"]}>
      {allOrders.length !== 0 ? (
        <>
          <h3 className={styles.title}>Orders ({allOrders.length})</h3>
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Cur. val</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td className={order.mode === "buy" ? styles.profit : styles.loss}>{order.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className={styles["no-orders"]}>
          <p><b>You haven't placed any orders today</b></p>
          <Link to="/dashboard" className={styles.btn}>Get started</Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
