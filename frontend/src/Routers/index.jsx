import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/'
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import AboutCompany from '../Pages/Home/AboutCompany/AboutCompany';

function PrivateRouters() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutCompany />} />
        <Route path="*" element={<ErrorPage />} />
      </Route> 
    </Routes>
  </BrowserRouter>
  )
} 

export default PrivateRouters