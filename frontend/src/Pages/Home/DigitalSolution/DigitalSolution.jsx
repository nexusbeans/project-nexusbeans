import React from "react";
import './DigitalSolution.scss'

import imagePlan from "../../../Assets/Images/pages/aiGirl.jpg";
import { Link } from "react-router-dom";

const DigitalSolution = () => {
  return (
    <section>
      {/* Digital Solution Area Start */}
      <div
        className="solution__area section-padding"
        data-background={imagePlan}
      >
        <div class="slider-thumb"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-9">
              <div className="solution__area-title">
                <span className="subtitle-one">Digital Solution</span>
                <h1>Good business planning ensure success.</h1>
                <Link className="btn-one" to="/contact-us">
                  Request Quote
                  <i className="far fa-chevron-double-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3"  >
              <div className="solution__area-right">
                <div className="solution__area-right-video">
                  <div className="solution__area-right-icon video video-pulse">
                    <Link
                      className="video-popup"
                      to="/about-us"
                    >
                      <i className="fal fa-play" />
                    </Link>
                  </div>
                  <h6>Watch The Consulting Video</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Digital Solution Area End */}
    </section>
  );
};

export default DigitalSolution;
