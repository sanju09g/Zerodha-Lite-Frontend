import React from "react";
import "../styles/landing.css";
function Universe() {
  return (
    <div className="container">
      <div className="mb-5">
        <p className="fs-4 text-center">
          Want to know more about our technology stack? Check out the{" "}
          <a className="text-decoration-none " href="#">
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
      </div>
      <div className="row mt-5 text-center">
        <div className="text-center">
          <h1  className="mb-5 mt-5 fs-4">
            The Zerodha Universe
          </h1>
          <p className="text-muted fs-5 mb-5">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="col-4 p-2">
          <img src="media/images/zerodhafund.png" alt="zerodha_fund"  style={{width:"150px"}} />
        </div>
        <div className="col-4 p-2">
          <img src="media/images/sensibullLogo.svg" alt="sensibull_logo"  style={{width:"150px"}} />
        </div>

        <div className="col-4 p-2">
          <img src="media/images/tijori.svg" alt="tijori"  style={{width:"150px"}} />
        </div>
        <div className="row mt-3">
            <div className="col-4 p-2">
            <img src="media/images/streakLogo.png" alt="streak" style={{width:"150px"}}/>
            </div>
            <div className="col-4 p-2">
            <img src="media/images/smallcaseLogo.png" alt="smallCase"  style={{width:"150px"}}/>
            </div>
            <div className="col-4 p-2 mb-5">
            <img src="media/images/dittoLogo.png" alt="ditto"  style={{width:"125px"}}/>
           
            </div>
            <button
          className="p-2 fs-5 mb-5"
          style={{
            width: "15%",
            backgroundColor: "#387ed1",
            color: "#fff",
            margin: "0 auto",
            border: "none",
            borderRadius: "2px",
          }}
        >
          Sign up for free
        </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
