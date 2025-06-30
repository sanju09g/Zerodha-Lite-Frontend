import React from 'react';
import HeroSection from './HeroSection';
import Awards from './Awards';
import Pricing from './Pricing';
import Education from './Education';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import "../styles/landing.css";

function HomePage() {
    return ( 
        <>
        
          <HeroSection/>
          <Awards/>
          <Stats/>
          <Pricing/>
          <Education/>
          <OpenAccount/>
          
         </>
     );
}

export default HomePage;