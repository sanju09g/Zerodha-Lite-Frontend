import React from "react";
import styles from "./styles/Dashboard.module.css";

const Summary = () => {
  return (
    <>
      <div className={styles.username}>
        <h6>Hi, User!</h6>
        <hr className={styles.divider} />
      </div>

      <div className={styles.section}>
        <span>
          <p>Equity</p>
        </span>

        <div className={styles.data}>
          <div className={styles.first}>
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className={styles.second}>
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>
        <hr className={styles.divider} />
      </div>

      <div className={styles.section}>
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className={styles.data}>
          <div className={styles.first}>
            <h3 className={styles.profit}>
              1.55k <small>+5.20%</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className={styles.second}>
            <p>
              Current Value <span>31.43k</span>
            </p>
            <p>
              Investment <span>29.88k</span>
            </p>
          </div>
        </div>
        <hr className={styles.divider} />
      </div>
    </>
  );
};

export default Summary;
