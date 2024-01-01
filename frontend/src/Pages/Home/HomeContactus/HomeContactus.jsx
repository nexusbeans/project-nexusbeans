import React from "react";
import getInTouch from "../../../Assets/Images/pages/getInTouch-modified.jpg";
import getInTouchShape from "../../../Assets/Images/shape/getInTouch.png";
const HomeContactus = () => {
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
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5 lg-mb-30">
              <div className="getIn__touch-left">
                <div className="getIn__touch-left-title">
                  <span className="subtitle-one">Get In Touch</span>
                  <h2>Free Consultation</h2>
                </div>
                <div className="getIn__touch-left-form">
                  <form action="#">
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
                        <img src="assets/img/avatar/avatar-7.jpg" alt="" />
                      </li>
                      <li>
                        <img src="assets/img/avatar/avatar-5.jpg" alt="" />
                      </li>
                      <li>
                        <img src="assets/img/avatar/avatar-6.jpg" alt="" />
                      </li>
                      <li>
                        <img src="assets/img/avatar/avatar-4.jpg" alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Get In Touch Area End */}
      <>
        {/* Emargency Help Area Start */}
        <div className="container">
          <div className="row">
            <div className="col-xl-5" />
            <div className="col-xl-7">
              <div className="help__area">
                <div className="help__area-item">
                  <div className="help__area-item-icon icon-animation">
                    <i className="fal fa-phone-alt" />
                  </div>
                  <div className="help__area-item-info">
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
                  <div className="help__area-item-info">
                    <span className="text-three">Email drop Us</span>
                    <h5>
                      <a href="mailto:conbix@gmail.com">info@nexusbeans.com</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Emargency Help Area End */}
      </>
    </section>
  );
};

export default HomeContactus;
