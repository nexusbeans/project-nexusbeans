import React from "react";
import services11 from "../../../Assets/Images/icon/services-11.png";
import services1 from "../../../Assets/Images/icon/services-1.png";

import services22 from "../../../Assets/Images/icon/services-22.png";
import services2 from "../../../Assets/Images/icon/services-1.png";


import services33 from "../../../Assets/Images/icon/services-33.png";
import services3 from "../../../Assets/Images/icon/services-3.png";

import services44 from "../../../Assets/Images/icon/services-44.png";
import services4 from "../../../Assets/Images/icon/services-4.png";

const OurSolution = () => {
  return (
    <section className="our_solution__section">
        {/* Services Area Start */}
        <div className="services__one section-padding pt-0">
          <div className="container">
            <div className="row align-items-end mb-70">
              <div className="col-xl-7 col-lg-8 lg-mb-30">
                <div className="services__one-title lg-t-center">
                  <span className="subtitle-one">Our Solutions</span>
                  <h2>We offer Customization</h2>
                </div>
              </div>
              <div className="col-xl-5 col-lg-4 t-right lg-t-center">
                <a className="btn-one" href="services-two.html">
                  All Services
                  <i className="far fa-chevron-double-right" />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 xl-mb-30">
                <div className="services__one-item">
                  <div className="services__one-item-icon">
                  <img src={services1} alt="" />
                    <div className="services__one-item-icon-one">
                      <img src={services11} alt="" />
                    </div>
                  </div>
                  <h4>
                    <a href="services-right-sidebar.html">Website Development</a>
                  </h4>
                  <p>
                    Proin pulvinar eu sem eu vehicula. Integer urna libero,
                    semper
                  </p>
                  <a
                    className="simple-btn-2"
                    href="services-right-sidebar.html"
                  >
                    Read More
                    <i className="far fa-chevron-double-right" />
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 md-mb-30">
                <div className="services__one-item">
                  <div className="services__one-item-icon">
                  <img src={services2} alt="" />
                    <div className="services__one-item-icon-one">
                      <img src={services22} alt="" />
                    </div>
                  </div>
                  <h4>
                    <a href="services-right-sidebar.html">Mobile App Development</a>
                  </h4>
                  <p>
                    Proin pulvinar eu sem eu vehicula. Integer urna libero,
                    semper
                  </p>
                  <a
                    className="simple-btn-2"
                    href="services-right-sidebar.html"
                  >
                    Read More
                    <i className="far fa-chevron-double-right" />
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 md-mb-30">
                <div className="services__one-item">
                  <div className="services__one-item-icon">
                  <img src={services3} alt="" />
                    <div className="services__one-item-icon-one">
                    <img src={services33} alt="" />
                    </div>
                  </div>
                  <h4>
                    <a href="services-right-sidebar.html">Cloud Solution</a>
                  </h4>
                  <p>
                    Proin pulvinar eu sem eu vehicula. Integer urna libero,
                    semper
                  </p>
                  <a
                    className="simple-btn-2"
                    href="services-right-sidebar.html"
                  >
                    Read More
                    <i className="far fa-chevron-double-right" />
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="services__one-item">
                  <div className="services__one-item-icon">
                  <img src={services4} alt="" />
                    <div className="services__one-item-icon-one">
                    <img src={services44} alt="" />
                    </div>
                  </div>
                  <h4>
                    <a href="services-right-sidebar.html">UI UX Designing</a>
                  </h4>
                  <p>
                    Proin pulvinar eu sem eu vehicula. Integer urna libero,
                    semper
                  </p>
                  <a
                    className="simple-btn-2"
                    href="services-right-sidebar.html"
                  >
                    Read More
                    <i className="far fa-chevron-double-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Services Area End */}
    </section>
  );
};

export default OurSolution;
