import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import "../styles/landing.css";
function ProductPage() {
    return ( 
        <>
          <Hero/>
          <LeftSection imageUrl="media/images/kite.png" prodDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." title="Kite" tryDemo="Try demo" googlePlay="" learnMore="Learn more"/>
          <RightSection imageUrl="media/images/console2.png" title="Console" prodDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." learnMore="#"/>
          <LeftSection imageUrl="media/images/coin.png" title="Coin" prodDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." learnMore="Coin" googlePlay="#" appStore="#" tryDemo="Try demo"/>
          <RightSection imageUrl="media/images/kiteconnect.png" title="Kite Connect API" prodDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." learnMore="Kite Connect"/>
          <LeftSection imageUrl="media/images/varsity.png" title="Varsity mobile" prodDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." learnMore="Varsity" googlePlay="#" appStore="#" tryDemo="Try demo"/>
        
          <Universe/>
        </>
     );
}

export default ProductPage;