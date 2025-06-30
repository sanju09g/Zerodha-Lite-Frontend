import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Dashboard.module.css";

const Funds = () => {
  return (
    <>
      <div className={styles.funds}>
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className={`${styles.btn} ${styles["btn-green"]}`}>Add funds</Link>
        <Link className={`${styles.btn} ${styles["btn-blue"]}`}>Withdraw</Link>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <span>
            <p>Equity</p>
          </span>

          <div className={styles.table}>
            <div className={styles.data}>
              <p>Available margin</p>
              <p className={`${styles.imp} ${styles.colored}`}>4,043.10</p>
            </div>
            <div className={styles.data}>
              <p>Used margin</p>
              <p className={styles.imp}>3,757.30</p>
            </div>
            <div className={styles.data}>
              <p>Available cash</p>
              <p className={styles.imp}>4,043.10</p>
            </div>
            <hr />
            <div className={styles.data}>
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className={styles.data}>
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className={styles.data}>
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className={styles.data}>
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className={styles.data}>
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className={styles.data}>
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className={styles.data}>
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className={styles.data}>
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className={styles.data}>
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className={styles.data}>
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles.commodity}>
            <p>You don't have a commodity account</p>
            <Link className={`${styles.btn} ${styles["btn-blue"]}`}>Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
