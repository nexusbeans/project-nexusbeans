import React from "react";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import { Link } from "react-router-dom";
import PageBread from "../../Components/PageBread/PageBread";
import contactus from '../../Assets/Images/pages/contact-bg.jpg';

const ContactUs = () => {
  return (
    <>
      <MainLayout>
        <main className="contactUs_main">
          {/* Page Banner Area Start */}
          <PageBread mainHeading="Conntect With our Beans" backgroundImage={contactus}  backgroundText="Contact Us" pageName="Contact us"/>
          {/* Page Banner Area End */}

          {/* Contact Page Start */}
          <div className="contact__page section-padding pb-0">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-5 order-last order-lg-first">
                  <div className="contact__page-form">
                    <h3 className="mb-30">Contact Us</h3>
                    <form action="#">
                      <div className="row">
                        <div className="col-sm-12 mb-20">
                          <div className="contact__page-form-item conbix-contact-item">
                            <span className="fal fa-user" />
                            <input
                              type="text"
                              name="name"
                              placeholder="Full Name"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-sm-12 mb-20">
                          <div className="contact__page-form-item conbix-contact-item">
                            <span className="far fa-envelope-open" />
                            <input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                              required="required"
                            />
                          </div>
                        </div>
                        <div className="col-sm-12 mb-30">
                          <div className="contact__page-form-item conbix-contact-item">
                            <span className="far fa-comments" />
                            <textarea
                              name="message"
                              placeholder="Type your comments...."
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="contact__page-form-item">
                            <button className="btn-one" type="submit">
                              Submit Now
                              <i className="far fa-chevron-double-right" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 lg-mb-30">
                  <div className="contact__page-info">
                    <h2 className="mb-60 lg-mb-30">Get In Touch</h2>
                    {/* <div className="contact__page-info-item">
                      <h6>
                        Office Address<span>:</span>
                      </h6>
                      <span>
                        3891 Ranchview Dr. Richardson, California 62639
                      </span>
                    </div> */}
                    <div className="contact__page-info-item">
                      <h6>
                        Email Address <span>:</span>
                      </h6>
                      <span>
                        <Link to="mailto:info@nexusbeans.com">
                          info@nexusbeans.com
                        </Link>
                        <a href="mailto:nexusbeans@gmail.com">
                        nexusbeans@gmail.com
                        </a>
                      </span>
                    </div>
                    <div className="contact__page-info-item">
                      <h6>
                        Phone Number<span>:</span>
                      </h6>
                      <span>
                        <Link to="917772007660">(+91) 777-200-7660</Link>
                        <Link to="tel:14094343519">(+1) 4094343519</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Page End */}
          {/* Contact Page Map Start */}
          <div className="contact__page-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894606!2d-74.11976383964463!3d40.69766374865767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1652012644726!5m2!1sen!2sbd"
              loading="lazy"
            />
          </div>
          {/* Contact Page Map End */}
        </main>
      </MainLayout>
    </>
  );
};

export default ContactUs;
