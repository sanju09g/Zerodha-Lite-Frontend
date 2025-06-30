import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
function HeroSection() {
  return (
    <div className="container p-3 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero images" className="mb-5"
        />


        <h1 className="mt-5 mb-3">Invest in everything</h1>
        <p className="mb-5 fs-4">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <Link to="/signup"><button className="p-2 fs-5" style={{width:"20%",backgroundColor:"#387ed1",color:"#fff",margin:"0 auto",border:"none", borderRadius:"5px"}}>Sign up for free</button></Link>
      </div>
    </div>
  );
}

export default HeroSection;
