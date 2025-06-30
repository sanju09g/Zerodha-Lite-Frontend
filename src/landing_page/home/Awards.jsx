import React from "react";
import "../styles/landing.css";
function Awards() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="broker image" />
        </div>
        <div className="col-6 p-5">
          <h1 className="mt-3 mb-3">Largest stock broker in India</h1>
          <p className="mb-5">
          Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                  <li><p>Future & Options</p></li>
                  <li><p>Commodity derivatives</p></li>
                  <li><p>Currency derivatives</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
              <li><p>Stocks & IPOs</p></li>
              <li><p>Direct mutual funds</p></li>
              <li><p>Bonds and Govt.Securities</p></li>
              </ul>
            </div>
          </div>
          <img className="mt-2" src="media\images\pressLogos.png" alt="press_logo" style={{width:"92%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
