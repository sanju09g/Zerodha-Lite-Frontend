import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div
      className="container-fluid p-5"
      style={{ backgroundColor: "#387ed1", color: "#fff" }}
    >
      <div className="row justify-content-center p-4">
        <div className="col-8">
          <div className=" d-flex justify-content-between">
            <div>
              <h3 className="fs-4 mb-5">Support Portal</h3>
            </div>
            <div>
              <a className="support-a" style={{ color: "#fff", fontSize: "20px" }} href="#">
                Track tickets
              </a>
            </div>
          </div>
          <div className="row">
         <div className="col">
         <h2 className='fs-3 mb-4 fs-4 fw-normal'>Search for an anser or browse help topics to create a ticket</h2>
         <input id="search" className='mb-4' placeholder='Eg. how do i activate F&O, why is my order getting rejected'/>
         <span className="inp-box "><i className="fa-solid fa-magnifying-glass"></i></span>
         <br />
         <a className="support-a"  href="#" >Track account opening</a>
         <a  href="#" className="mx-3 support-a">Track account opening</a>
         <a href="#" className="mx-3 support-a">Intraday margins</a>
         <br /><br />
         <a className="support-a" href="#" >Kite user manual</a>
         </div>
         <div className="col">
            <h4>Featured</h4>
            <ol type="1">
                <li><a className="support-a" href="#">Surveillance measure on scrips - June 2025</a></li>
                <li><a className="support-a" href="#">Rights Entitlements listing in June 2025</a></li>
            </ol>
         </div>
      </div>
        </div>
        
      </div>
     
    </div>
  );
}

export default Hero;
