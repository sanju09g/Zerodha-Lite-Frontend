import React from 'react';
import "../styles/landing.css";
function Brokerage() {
    return ( 
        <div className='container'>
        <div className='row p-5 mt-5 text-center border-top'>
      
          <div className='col-8 p-5'>
            <a href='' style={{ textDecoration: "none", lineHeight: "2" }} className='fs-3'>
              Brokerage Calculator
            </a>
            <ul className='text-muted mt-3' style={{ textAlign: "left", lineHeight: "2.5", fontSize: "14px" }}>
              <li>Enter your buy and sell price for the trade.</li>
              <li>Choose the segment: Equity Delivery, Intraday, F&O, Currency, or Commodity.</li>
              <li>Specify the quantity of shares or contracts traded.</li>
              <li>The calculator will show brokerage, taxes (like STT, GST), and net profit/loss.</li>
              <li>Helps estimate total charges before placing a trade.</li>
            </ul>
          </div>
      
          <div className='col-4 p-5'>
            <a href='' style={{ textDecoration: "none" }} className='fs-3 '>
              List of Charges
            </a>
            <ul className='text-muted mt-3' style={{ textAlign: "left", lineHeight: "2.5", fontSize: "14px" }}>
              <li>Brokerage: ₹0 on delivery, flat ₹20/trade for Intraday & F&O</li>
              <li>STT (Securities Transaction Tax)</li>
              <li>Exchange Transaction Charges</li>
              <li>SEBI Turnover Fees</li>
              <li>GST: 18% on brokerage + transaction charges</li>
              <li>Stamp Duty (as per state law)</li>
            </ul>
          </div>
      
        </div>
      </div>
      );
}

export default Brokerage;