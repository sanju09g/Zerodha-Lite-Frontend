import React from "react";
import { Link } from "react-router-dom";
import "./styles/landing.css";
function Navbar() {
  return (

      <nav className="navbar navbar-expand-lg border-bottom sticky-top " style={{backgroundColor:"#fff",height:"65px"}}>
        <div className="container p-2">

      
        <Link className="navbar-brand" to='/'>
         <img src="media/images/logo.svg" style={{width:"28%"}} alt="logo" />
        </Link>
      
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link active" to='/signup'>
                Signup <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='/about'>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='/product'>
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='/pricing'>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to='/support'>
                Support
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
         
          </form>
         
        </div>
       
        </div>
       <Link className="nav-link active" to='/login' style={{color:"rgb(56, 126, 209)", fontWeight:"700", marginRight:"1rem"}}>Login</Link>
      </nav>
   
  );
}

export default Navbar;
