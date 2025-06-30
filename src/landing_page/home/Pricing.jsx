import React from 'react';
import "../styles/landing.css";
function Pricing() {
    return (
        <div className='container p-4 mt-5 '>
        <div className="row">
            <div className="col-4">
                <h1 className='mb-4 fs-2'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href="" className='text-decoration-none'>See Pricing <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="col-2"></div>
            <div className="col-6 mb-5">
                <div className="row border text-center">
                    <div className="col border p-4"> <h1 className='mb-4'>₹0</h1>
                    <p>Free equity delivery and direct mutual funds</p></div>
                    <div className="col border p-4"> <h1 className='mb-4'>₹20</h1>
                    <p>Intraday and F&O</p></div>
                </div>
            </div>
        </div>
      </div>
     );
}

export default Pricing;