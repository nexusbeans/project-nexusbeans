import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/'

function PrivateRouters() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        {/* <Route index element={<Home />} /> */}

        {/* <Route path="*" element={<NoPage />} /> */}
      </Route> 
    </Routes>
  </BrowserRouter>
  )
} 

export default PrivateRouters