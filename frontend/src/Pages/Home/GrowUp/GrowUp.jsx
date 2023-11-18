import React from "react";
import footer from "../../../Assets/Images/shape/footer.png";
import './GrowUp.scss'

const GrowUp = () => {
  return (
    <section className="growUp__section">
        {/* Footer Top Area Start */}

  
        <div className="footer__top">
          <img className="footer__top-shape" src={footer} alt="" />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-8 lg-mb-30">
                <div className="footer__top-title lg-t-center">
                  <h2>
                    Small Business Grow faster With Our Consulting Services
                  </h2>
                </div>
              </div>
              <div className="col-xl-5 col-lg-4">
                <div className="footer__top-btn t-right lg-t-center">
                  <a className="btn-two" href="request-quote.html">
                    let's Work together
                    <i className="far fa-chevron-double-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Top Area End */}
    </section>
  );
};

export default GrowUp;
