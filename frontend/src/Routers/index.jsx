import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/'
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import ContactUs from '../Pages/ContactUs/ContactUs';
import About from '../Pages/About/About';
import OurServices from '../Pages/OurServices/OurServices';

function PrivateRouters() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About/>} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="our-services" element={<OurServices />} />
        
        <Route path="*" element={<ErrorPage />} />
      </Route> 
    </Routes>
  </BrowserRouter>
  )
} 

export default PrivateRouters