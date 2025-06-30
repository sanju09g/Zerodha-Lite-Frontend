import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import styles from "./styles/Dashboard.module.css"; // ✅ CSS Modules

const Dashboard = () => {


  return (
    <div className={styles["dashboard-container"]}>
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className={styles.content}>
        <Routes>
          <Route index element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
