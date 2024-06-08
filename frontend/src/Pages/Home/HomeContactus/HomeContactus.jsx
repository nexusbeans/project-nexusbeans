import React, { useState } from "react";
import getInTouch from "../../../Assets/Images/pages/getInTouch-modified.jpg";
import getInTouchShape from "../../../Assets/Images/shape/getInTouch.png";
import { useForm, ValidationError } from '@formspree/react';
import av1 from "../../../Assets/Images/pages/pexels-kampus-5920775.jpg";
import av2 from "../../../Assets/Images/pages/pexels-olly-3801703.jpg";
import av3 from "../../../Assets/Images/pages/cl1.JPG";
import av4 from "../../../Assets/Images/pages/cl2.JPG";
import { Container, Row } from "react-bootstrap";
import ThankYouSuccess from "../../../Components/ThankYouSuccess/ThankYouSuccess";
import './HomeContactus.scss'

const HomeContactus = () => {
  const [state, handleSubmit] = useForm("xnqedadw");
  if (state.succeeded) {
      return <ThankYouSuccess/>;
  }
  return (
    <section className="get_inTouchHome pb_section">
      {/* Get In Touch Start End */}
      <div
        className="getIn__touch section-padding"
        data-background={getInTouch}
      >
        <img
          className="getIn__touch-shape left-right-animate2"
          src={getInTouchShape}
          alt=""
        />
        <Container>
          <Row>
            <div className="col-xl-6 col-lg-5 lg-mb-30">
              <div className="getIn__touch-left">
                <div className="getIn__touch-left-title">
                  <span className="subtitle-one">Get In Touch</span>
                  <h2>Free Consultation</h2>
                </div>
                <div className="getIn__touch-left-form">
                  <form onSubmit={handleSubmit}>
                    <div className="mt-25">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required="required"
                      />
                    </div>
                    <div className="mt-25">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required="required"
                      />
                    </div>
                    <div className="mt-25">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required="required"
                      />
                    </div>
                    <div className="mt-25">
                      <button className="btn-one" type="submit">
                        Free Consulting
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="getIn__touch-right">
                <div className="getIn__touch-right-title">
                  <h2>Are you ready for a better and more ?</h2>
                  <p>
                    Stop worrying about technology problems. Focus on your
                    business. Let us provide the support you deserve.
                  </p>
                </div>
                <div className="getIn__touch-right-bottom">
                  <div className="getIn__touch-right-bottom-text">
                    <h4>client satisfaction in the globaly</h4>
                  </div>
                  <div className="getIn__touch-right-bottom-shape">
                    <img src="assets/img/icon/getInTouch.png" alt="" />
                  </div>
                  <div className="getIn__touch-right-bottom-image">
                    <ul>
                      <li>
                        <img src={av1} alt="" />
                      </li>
                      <li>
                      <img src={av2} alt="" />
                      </li>
                      <li>
                      <img src={av3} alt="" />
                      </li>
                      <li>
                      <img src={av4} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      {/* Get In Touch Area End */}
      <>
        {/* Emargency Help Area Start */}
        <Container>
          <Row >
            <div className="col-xl-5" />
            <div className="col-xl-7">
              <div className="help__area">
                <div className="help__area-item">
                  <div className="help__area-item-icon icon-animation">
                    <i className="fal fa-phone-alt" />
                  </div>
                  <div className="help__area-item-info Set_info">
                    <span className="text-three">Support Us</span>
                    <h5>
                      <a href="tel:+012652689523">+91 7772007660</a>
                    </h5>
                  </div>
                </div>
                <div className="help__area-item">
                  <div className="help__area-item-icon">
                    <i className="fal fa-envelope-open-text" />
                  </div>
                  <div className="help__area-item-info Set_info">
                    <span className="text-three">Email drop Us</span>
                    <h5>
                      <a href="mailto:conbix@gmail.com">info@nexusbeans.com</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
        {/* Emargency Help Area End */}
      </>
    </section>
  );
};

export default HomeContactus;
