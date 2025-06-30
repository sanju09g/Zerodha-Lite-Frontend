import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { createRoot } from 'react-dom/client';
import LandingLayout from "./layouts/LandingLayout";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/SignUp";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from './landing_page/NotFound';
import Home from "./dashboard/Home";
import Login from "./landing_page/signup/Login";
import { UserProvider } from "./dashboard/UserContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <UserProvider>
    <BrowserRouter>
   
      <Routes>
        {/* All frontend pages go inside LandingLayout */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Route>

        {/* Dashboard route is kept separate without landing layout */}
        <Route path="/dashboard/*" element={<Home />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    
    </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
