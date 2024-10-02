import React from "react";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageBread from "../../Components/PageBread/PageBread";
import contactus from "../../Assets/Images/pages/contact-bg.jpg";

function TermsOfusage() {
  return (
    <MainLayout>
      <main className="contactUs_main">
        {/* Page Banner Area Start */}
        <PageBread
          mainHeading="Terms Of Usage"
          backgroundImage={contactus}
          backgroundText="Terms"
          pageName="Terms"
        />
        {/* Page Banner Area End */}

        {/* Contact Page Start */}
        <div className="contact__page section-padding pb-0">
          <div className="container">
            <div className="row">
              <div className="col-12 lg-mb-30">
                <div className="contact__page-info">
                  <div class="services__details-left-content">
                  <h2 className="mb-60 lg-mb-30">Privacy Policy</h2>
                    <p><strong>Welcome to nexusbeans Privacy Policy</strong></p>
                    <p class="mb-25">Our website address is: https://nexusbeans.com</p>

                    <p><strong>What personal data we collect and why we collect it
                    Comments</strong></p>
                    <p class="mb-25">When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
                    
                    <p><strong>How we collect personal information</strong></p>
                    <p class="mb-25">We collect personal information directly when you provide it to us, automatically as you navigate through the Sites, or through other people when you use services associated with the Sites.</p>
                    <p class="mb-25">We collect your personal information when you provide it to us when you complete membership registration and buy or provide items or services on our Sites, subscribe to a newsletter, email list, submit feedback, enter a contest, fill out a survey, or send us a communication.</p>
                    

                    <p><strong>Media</strong></p>
                    <p class="mb-25">If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
                    

                    <p><strong>Cookies</strong></p>
                    <p class="mb-25">These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
                    <p class="mb-25">If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
                    <p class="mb-25">If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
                    <p class="mb-25">When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
                    <p class="mb-25">If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>
                    <p class="mb-25">When you visit our Sites, there’s certain information that’s recorded which is generally anonymous information and does not reveal your identity. If you’re logged into your account some of this information could be associated with your account. We’re talking about the following kinds of details:</p>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

export default TermsOfusage;
