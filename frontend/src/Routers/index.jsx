import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/'
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import ContactUs from '../Pages/ContactUs/ContactUs';
import About from '../Pages/About/About';
import OurServices from '../Pages/OurServices/OurServices';
import OurServicesDetails from '../Pages/OurServicesDetails/OurServicesDetails';
import RequestQuote from '../Pages/RequestQuote/RequestQuote';
import Faq from '../Pages/Faq/Faq';
import ProjectPage from '../Pages/ProjectPage/ProjectPage';
import BlogPost from '../Pages/BlogPost/BlogPost';
import PrivacyPolicy from '../Pages/PolicyPages/PrivacyPolicy';
import TermsOfusage from '../Pages/PolicyPages/TermsOfusage';

function PrivateRouters() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About/>} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="our-services" element={<OurServices />} />
        <Route path="our-services/services-details/:id" element={<OurServicesDetails />} />
        <Route path="request-quote" element={<RequestQuote />} />
        <Route path="faq" element={<Faq />} />
        <Route path="our-projects" element={<ProjectPage />} />
        <Route path="blog-post" element={<BlogPost />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-usage" element={<TermsOfusage />} />
        
        <Route path="*" element={<ErrorPage />} />
      </Route> 
    </Routes>
  </BrowserRouter>
  )
} 

export default PrivateRouters