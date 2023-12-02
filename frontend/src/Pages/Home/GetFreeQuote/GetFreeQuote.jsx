import React from "react";
import './GetFreeQuote.scss'

const GetFreeQuote = () => {
  return (
    <section>
      {/* Cta Area Start */}
      <div className="cta__area">
        <div className="container">
          <div className="row cta__area-bg align-items-center">
            <div className="col-xxl-5 col-xl-4">
              <div className="cta__area-title">
                <h2>Inside NexusBeans</h2>
                <span className="text-two">
                  Perfect solution for your company.
                </span>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-8 pr-0">
              <div className="cta__area-form">
                <form>
                  <div className="cta__area-form-item md-mb-30">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="cta__area-form-item md-mb-30">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="cta__area-form-item">
                    <button className="btn-four" type="submit">
                      Get Quote
                      <i className="far fa-chevron-double-right" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cta Area End */}
    </section>
  );
};

export default GetFreeQuote;
