import React from 'react'
import './Footer.scss'
import footerbg from "../../Assets/Images/shape/footer-bg.png";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
  {/* Footer One Area Start */}
  <div className="footer__one">
    <img
      className="footer__one-shape"
      src={footerbg}
      alt=""
    />
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-md-6 col-sm-7 xl-mb-30">
          <div className="footer__one-widget">
            <div className="footer__one-widget-about">
              <a href="#">
                <img src="assets/img/logo-2.png" alt="" />
              </a>
              <p>
                Donec quis viverra enim. Integer mi felis, auctor eget magna
              </p>
              <div className="footer__one-widget-about-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-5 sm-mb-30">
          <div className="footer__one-widget border-one">
            <h4>Our Solution</h4>
            <div className="footer__one-widget-solution">
              <ul>
                <li>
                  <a href="services-right-sidebar.html">
                    <i className="far fa-chevron-double-right" />
                    Business Consulting
                  </a>
                </li>
                <li>
                  <a href="services-right-sidebar.html">
                    <i className="far fa-chevron-double-right" />
                    human resource
                  </a>
                </li>
                <li>
                  <a href="services-right-sidebar.html">
                    <i className="far fa-chevron-double-right" />
                    Digital Solution
                  </a>
                </li>
                <li>
                  <a href="services-right-sidebar.html">
                    <i className="far fa-chevron-double-right" />
                    strategy &amp; research
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-6 sm-mb-30">
          <div className="footer__one-widget border-one">
            <h4>Head Office</h4>
            <div className="footer__one-widget-location">
              <div className="footer__one-widget-location-item">
                <div className="footer__one-widget-location-item-icon">
                  <i className="far fa-map-marker-alt" />
                </div>
                <div className="footer__one-widget-location-item-info">
                  <a href="#">2972 Westheimer Rd. Santa Ana, Illinois 85486</a>
                </div>
              </div>
              <h6>Branch Office</h6>
              <div className="footer__one-widget-location-item">
                <div className="footer__one-widget-location-item-icon">
                  <i className="far fa-map-marker-alt" />
                </div>
                <div className="footer__one-widget-location-item-info">
                  <a href="#">8502 Preston Rd. Inglewood, Maine 98380</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 col-sm-6">
          <div className="footer__one-widget border-one tow">
            <h4>Subscribe</h4>
            <div className="footer__one-widget-subscribe">
              <p>
                Join over <span>68,000</span> people getting our emails
              </p>
              <form action="#">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  required=""
                />
                <button type="submit">
                  <i className="fas fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright__one">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <p>
            © Copyright 2024 <Link to="/">Nexusbeans</Link> - All Rights
              Reserved{" "}

            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer One Area End */}

    </footer>
  )
}

export default Footer