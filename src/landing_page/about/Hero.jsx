import React from 'react';
import Team from './Team';
import "../styles/landing.css";

function Hero() {
    return (
        <div className="container ">
           <div className="row p-5 justify-content-center">
           <div  className="col-10">
           <h1 style={{textAlign:"justify"}} >We pioneered the discount broking model in India.
           Now, we are breaking ground with our technology.</h1>
           </div>
           </div>
           <hr style={{ borderColor: "#ddd", borderWidth: "2px" }} />
         <div className="row mt-5 p-3 justify-content-center">
            <div className="col-5 ">
                <p  style={{textAlign:"justify"}} className='text-muted lh-lg'>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                <p  style={{textAlign:"justify"}} className='text-muted lh-lg'>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                <p  style={{textAlign:"justify"}} className='text-muted lh-lg'>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
            </div>
            <div className="col-5">
                <p  style={{textAlign:"justify"}} className='text-muted lh-lg'>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                <p  style={{textAlign:"justify"}} className='text-muted lh-lg'>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                <p  style={{textAlign:"justify"}} className='text-muted lh-lg'>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
            </div>
         </div>
        
        </div>
     );
}

export default Hero;