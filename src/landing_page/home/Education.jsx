import React from 'react';
import "../styles/landing.css";

function Education() {
    return (  
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" alt="" />
                </div>
            <div className="col-6">
                <h1 className='mb-4 fs-2'>Free and open market education</h1>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="" className='text-decoration-none'>Varsity <i className="fa-solid fa-arrow-right"></i></a>
                 <br /><br />
                <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="" className='text-decoration-none'>TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                
            </div>
            </div>
        </div>
     );
}

export default Education;