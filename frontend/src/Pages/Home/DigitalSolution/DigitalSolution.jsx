import React from "react";
import './DigitalSolution.scss'

const DigitalSolution = () => {
  return (
    <section>
      {/* Digital Solution Area Start */}
      <div
        className="solution__area section-padding"
        data-background="assets/img/pages/solution.jpg"
      >
        <div class="slider-thumb"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-9">
              <div className="solution__area-title">
                <span className="subtitle-one">Digital Solution</span>
                <h1>Good business planning ensure success.</h1>
                <a className="btn-one" href="request-quote.html">
                  Request Quote
                  <i className="far fa-chevron-double-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="solution__area-right">
                <div className="solution__area-right-video">
                  <div className="solution__area-right-icon video video-pulse">
                    <a
                      className="video-popup"
                      href="https://www.youtube.com/watch?v=0WC-tD-njcA"
                    >
                      <i className="fal fa-play" />
                    </a>
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
