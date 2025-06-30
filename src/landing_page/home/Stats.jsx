import React from 'react';
import "../styles/landing.css";
function Stats() {
    return ( 
       <div className="container p-4">
        <div className="row ">
            <div className="col-6 p-5">
                <h1 className='fs-2'>Trust with confidence</h1>
                <h2 className='mt-5 fs-4'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
               
                <h2 className='fs-4'>No spam or gimmicks</h2>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                <a className='text-decoration-none fw-semibold' href="#">Our philosophies.</a>
                <br /><br />
                <h2 className='fs-4'>The Zerodha Universe</h2>
                
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
              
                <h2 className='fs-4'>Do better with money</h2>
                <p className='text-muted'>With initiatives like <a className='text-decoration-none fw-semibold' href="#">Nudge</a> and <a className='text-decoration-none fw-semibold' href="#">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>

            </div>
            <div className="col-6 p-5">
      <img src="media/images/ecosystem.png" alt="eco_image" style={{width:"100%"}} />
      <div className='text-center'>
        <a  className='mx-5 text-decoration-none' href="">Explore our products <i className="fa-solid fa-arrow-right"></i></a>
        <a href="" className='text-decoration-none'>Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
      </div>
            </div>
        </div>
       </div>
     );
}

export default Stats;