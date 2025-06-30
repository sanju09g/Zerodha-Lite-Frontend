import React from "react";
import { Link } from "react-router-dom";
import "./styles/landing.css";
function OpenAccount() {
  return (
    <div className="container p-3 mb-5 ">
      <div className="row text-center">
        <h1 className="mt-5 mb-3">Open a Zerodha account</h1>
        <p className="mb-5 fs-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link to="/signup">
        <button
          className="p-2 fs-5"
          style={{
            width: "20%",
            backgroundColor: "#387ed1",
            color: "#fff",
            margin: "0 auto",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Sign up for free
        </button>
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
