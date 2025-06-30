import React, { useState, useContext } from "react";
import styles from "./styles/Dashboard.module.css";
import { Tooltip, Grow } from "@mui/material";
import { GeneralContext } from "./GeneralContext";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";

function WatchListItem({ stock }) {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };
  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={styles.item}>
        <p
          style={{ fontWeight: "500" }}
          className={stock.isDown ? styles.down : styles.up}
        >
          {stock.name}
        </p>
        <div className={styles.itemInfo}>
          <span className={styles.percent}>{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className={styles.down} />
          ) : (
            <KeyboardArrowUp className={styles.up} />
          )}
          <span className={styles.price}>{stock.price.toFixed(2)}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
}

const WatchListActions = ({ uid }) => {
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);

  return (
    <span className={styles.actions}>
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className={styles.buy} onClick={() => openBuyWindow(uid)}>Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className={styles.sell} onClick={() => openSellWindow(uid)}>Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className={styles.action}>
            <BarChartOutlined className={styles.icon} />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className={styles.action}>
            <MoreHoriz className={styles.icon} />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

export default WatchListItem;
