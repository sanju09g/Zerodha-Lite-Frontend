import React from 'react';
import "../styles/landing.css";
function Team() {
    return ( 
    <div className="container">
        <div className="row mt-5 justify-content-center mb-5">
            <h2 className='text-center mb-5'>People</h2>
            <div className="col-5 text-center">
                  <img src="media/images/sanjit.png" alt="owner" style={{borderRadius:"50%",width:"20rem"}}/>
                  <span className='d-block fw-normal  fs-4 mt-3'>Sanjit Singh</span>
                  <span className='text-muted d-block  mt-2'>Founder, CEO</span>
            </div>
            <div className="col-5">
                 <p style={{textAlign:"justify"}}>Sanjit bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                 <p  style={{textAlign:"justify"}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                 <p  style={{textAlign:"justify"}}>Playing basketball is his zen.</p>
                 <p  style={{textAlign:"justify"}}>Connect on <a className='text-decoration-none' href="#" >Homepage</a> / <a href="#" className='text-decoration-none'>TradingQnA</a> / <a href="#" className='text-decoration-none'>Twitter</a></p>
               
            </div>
         </div>
    </div> );
}

export default Team;