import React from "react";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageBread from "../../Components/PageBread/PageBread";
import contactus from "../../Assets/Images/pages/contact-bg.jpg";

function PrivacyPolicy() {
  return (
    <MainLayout>
      <main className="contactUs_main">
        {/* Page Banner Area Start */}
        <PageBread
          mainHeading="Privacy Policy"
          backgroundImage={contactus}
          backgroundText="Privacy"
          pageName="Privacy"
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
                    <p>
                      <strong>Welcome to nexusbeans Privacy Policy</strong>
                    </p>
                    <p className="mb-25">
                      Our website address is: https://nexusbeans.com
                    </p>

                    <p>
                      <strong>
                        What personal data we collect and why we collect it
                        Comments
                      </strong>
                    </p>
                    <p className="mb-25">
                      When visitors leave comments on the site we collect the
                      data shown in the comments form, and also the visitor’s IP
                      address and browser user agent string to help spam
                      detection.
                    </p>

                    <p>
                      <strong>How we collect personal information</strong>
                    </p>
                    <p className="mb-25">
                      We collect personal information directly when you provide
                      it to us, automatically as you navigate through the Sites,
                      or through other people when you use services associated
                      with the Sites.
                    </p>
                    <p className="mb-25">
                      We collect your personal information when you provide it
                      to us when you complete membership registration and buy or
                      provide items or services on our Sites, subscribe to a
                      newsletter, email list, submit feedback, enter a contest,
                      fill out a survey, or send us a communication.
                    </p>

                    <p>
                      <strong>Media</strong>
                    </p>
                    <p className="mb-25">
                      If you upload images to the website, you should avoid
                      uploading images with embedded location data (EXIF GPS)
                      included. Visitors to the website can download and extract
                      any location data from images on the website.
                    </p>

                    <p>
                      <strong>Cookies</strong>
                    </p>
                    <p className="mb-25">
                      These websites may collect data about you, use cookies,
                      embed additional third-party tracking, and monitor your
                      interaction with that embedded content, including tracking
                      your interaction with the embedded content if you have an
                      account and are logged in to that website.
                    </p>
                    <p className="mb-25">
                      If you leave a comment on our site you may opt-in to
                      saving your name, email address and website in cookies.
                      These are for your convenience so that you do not have to
                      fill in your details again when you leave another comment.
                      These cookies will last for one year.
                    </p>
                    <p className="mb-25">
                      If you have an account and you log in to this site, we
                      will set a temporary cookie to determine if your browser
                      accepts cookies. This cookie contains no personal data and
                      is discarded when you close your browser.
                    </p>
                    <p className="mb-25">
                      When you log in, we will also set up several cookies to
                      save your login information and your screen display
                      choices. Login cookies last for two days, and screen
                      options cookies last for a year. If you select “Remember
                      Me”, your login will persist for two weeks. If you log out
                      of your account, the login cookies will be removed.
                    </p>
                    <p className="mb-25">
                      If you edit or publish an article, an additional cookie
                      will be saved in your browser. This cookie includes no
                      personal data and simply indicates the post ID of the
                      article you just edited. It expires after 1 day.
                    </p>
                    <p className="mb-25">
                      When you visit our Sites, there’s certain information
                      that’s recorded which is generally anonymous information
                      and does not reveal your identity. If you’re logged into
                      your account some of this information could be associated
                      with your account. We’re talking about the following kinds
                      of details:
                    </p>
                    <p>The domain name you requested;</p>
                    <p>The pages which you have accessed;</p>
                    <p>Your IP address or proxy server IP address;</p>
                    <p>
                      The number of times you access our site within any month;
                    </p>
                    <p>
                      The file URL you look at and information relating to it;
                    </p>
                    <p>The website which referred you to our Sites;</p>
                    <p>The date and time of your visit to the website;</p>
                    <p>The length of your session;</p>
                    <p>The operating system which your computer uses;</p>
                    <p>The technical capabilities of your web browser.</p>
                    <p className="mb-25">
                      The name of your internet service provider is sometimes
                      captured depending on the configuration of your ISP
                      connection;
                    </p>

                    <p>
                      <strong>Analytics</strong>
                    </p>
                    <p className="mb-25">
                      nexusbeans.com websites are using Google Analytics, a web
                      analytics service designed by Google, Inc. (“Google”).
                      Google Analytics software uses cookies to analyze users’
                      behavior. All data (i.e. your activity within Aakasa
                      Websites) is gathered by cookies and stored on Google
                      servers.
                    </p>

                    <p className="mb-25">
                      Google, in turn, uses this data to evaluate user behavior
                      in general, compile reports for site managers as well as
                      providing data to services relating to website activity
                      and Internet usage. Google may transfer various data to
                      third parties where required to do so by law, or where
                      such third parties process the information on Google’s
                      behalf.
                    </p>

                    <p>
                      <strong>
                        How we keep your personal information secure
                      </strong>
                    </p>
                    <p className="mb-25">
                      We store personal information on our service providers,
                      and occasionally hard copy files that are kept in a secure
                      location . Personal information that we store or transmit
                      is protected by security and access controls, including
                      username and password authentication, two-factor
                      authentication, and data encryption where appropriate.
                    </p>

                    <p>
                      <strong>When we need to update this policy</strong>
                    </p>
                    <p className="mb-25">
                      We will need to change this policy from time to time in
                      order to make sure it stays up to date with the latest
                      legal requirements and any changes to our privacy
                      management practices.
                    </p>
                    <p className="mb-25">
                      When we do change the policy, we’ll make sure to notify
                      you about such changes, where required. A copy of the
                      latest version of this policy will always be available on
                      this page.
                    </p>
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

export default PrivacyPolicy;
