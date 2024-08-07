import React from "react";
import services11 from "../../../Assets/Images/icon/services-11.png";
import services1 from "../../../Assets/Images/icon/services-1.png";
import services22 from "../../../Assets/Images/icon/services-22.png";
import services2 from "../../../Assets/Images/icon/services-2.png"
import services44 from "../../../Assets/Images/icon/services-44.png";
import services4 from "../../../Assets/Images/icon/services-4.png";
import { Link } from "react-router-dom";
import styles from './OurSolution.module.scss'


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
                <Link to='/our-services' className="btn-one" href="services-two.html">
                  All Services
                  <i className="far fa-chevron-double-right" />
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 xl-mb-30" data-aos="fade-up">
                <div className="services__one-item">
                  <div className="services__one-item-icon">
                  <img src={services1} alt="" />
                    <div className="services__one-item-icon-one">
                      <img src={services11} alt="" />
                    </div>
                  </div>
                  <h4>
                    <Link href="our-services/services-details/1">Website Development</Link>
                  </h4>
                  <p>
                  Platform Is a one of the best way, create easy to use website, yet active and adaptive to engage your customers and deliver your desired bottom line.
                  </p>
                  <Link
                    className="simple-btn-2"
                    to="our-services/services-details/1"
                  >
                    Read More
                    <i className="far fa-chevron-double-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30" data-aos="fade-up">
                <div className="services__one-item">
                  <div className="services__one-item-icon">
                  <img src={services2} alt="" />
                    <div className="services__one-item-icon-one">
                      <img src={services22} alt="" />
                    </div>
                  </div>
                  <h4>
                    <Link to="our-services/services-details/4">Mobile App Development</Link>
                  </h4>
                  <p>
                   Application Development and Services are provide by US, we make  premium looking android application for our premium customers.
                  </p>
                  <Link
                    className="simple-btn-2"
                    to="our-services/services-details/4"
                  >
                    Read More
                    <i className="far fa-chevron-double-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="services__one-item">
                  <div className="services__one-item-icon">
                  <img src={services4} alt="" />
                    <div className="services__one-item-icon-one">
                    <img src={services44} alt="" />
                    </div>
                  </div>
                  <h4>
                    <Link to="our-services/services-details/7">UI UX Designing</Link>
                  </h4>
                  <p>
                  If your website needs help, for your old website UI , looking for re-design old website we are happy to help you and redesign your website at very low cost.
                  </p>
                  <Link
                    className="simple-btn-2"
                    to="our-services/services-details/7"
                  >
                    Read More
                    <i className="far fa-chevron-double-right" />
                  </Link>
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
