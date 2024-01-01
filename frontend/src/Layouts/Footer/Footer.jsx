import React, { useEffect, useState } from 'react'
import './Footer.scss'
import footerbg from "../../Assets/Images/shape/footer-bg.png";
import { Link } from 'react-router-dom'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    }, 1000 * 60 * 60);

    return () => clearInterval(intervalId);
  }, [currentYear]);
  
  return (
    <footer>
  {/* Footer One Area Start */}
  <div className="footer__one">
    <img
      className="footer__one-shape"
      src={footerbg}
      alt=""
    />
    <Container>
      <Row>
        <Col xl={3} md={6} sm={7} className="xl-mb-30">
          <div className="footer__one-widget">
            <div className="footer__one-widget-about">
              <Link href="#">
              <Image
                    className="dark-n"
                    src={require("../../Assets/Images/nexus.png")}
                    alt=""
                  />
                      <Image
                    className="light-n"
                    src={require("../../Assets/Images/nexus.png")}
                    alt=""
                  />
              </Link>
              <p>
              Allows your business to increase productivity.
              </p>
              <div className="footer__one-widget-about-social">
                <ul>
                  <li>
                    <Link href="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" to="https://www.linkedin.com/company/nexusbeans?trk=similar-pages">
                    <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:info@nexusbeans.com">
                    <IoIosMail />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
        <div className="col-xl-3 col-md-6 col-sm-5 sm-mb-30">
          <div className="footer__one-widget border-one">
            <h4>Our Solution</h4>
            <div className="footer__one-widget-solution">
              <ul>
                <li>
                  <Link to="/contact-us">
                    <i className="far fa-chevron-double-right" />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/about-us">
                    <i className="far fa-chevron-double-right" />
                   About Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq">
                    <i className="far fa-chevron-double-right" />
                    FAQ's
                  </Link>
                </li>
                <li>
                  <Link to="services-right-sidebar.html">
                    <i className="far fa-chevron-double-right" />
                    strategy &amp; research
                  </Link>
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
      </Row>
    </Container>
    <div className="copyright__one">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <p>
            © Copyright {currentYear} <Link to="/">Nexusbeans</Link> - All Rights
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