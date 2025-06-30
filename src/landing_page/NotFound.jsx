import React from 'react';
import { Link } from 'react-router-dom';
import "./styles/landing.css";
import Footer from './Footer';
import Navbar from './Navbar';

function NotFound() {
    return ( 
       <>
       <Navbar/>
        <div className="container p-5 mb-5 mt-5">
      <div className="row ">
       <div className="col-5 d-flex flex-column justify-content-center align-items-center">
       <h1 className="mt-5 mb-3 ">404</h1>
        <h1>Kiaan couldn’t find that page</h1>
        <p className="mb-5 fs-4">
        We couldn’t find the page you were looking for. Visit <Link className='text-decoration-none' to='/'>Zerodha’s home page</Link>.
        </p>
       </div>
       <div className="col">
        <img src="media/images/kiaan404.jpg" alt="404" />
       </div>
      
      </div>
    </div>
    <Footer/>
       </>
     );
}

export default NotFound;