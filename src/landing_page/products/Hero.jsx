import React from 'react';
import "../styles/landing.css";

function Hero() {
    return ( 
      <div className="container mb-5 p-4 border-bottom">
        <div className="row text-center p-4 ">
          <h1 className=''>Zerodha Products</h1>
          <h3 className='text-muted fs-4 mt-3'>Sleek, modern, and intuitive trading platforms</h3>
          <p className=' mt-3 '>Check out our <a href="" className='text-decoration-none'>investment offerings  <i className="fa-solid fa-arrow-right"></i></a> </p>
        </div>

      </div>
    );
}

export default Hero;