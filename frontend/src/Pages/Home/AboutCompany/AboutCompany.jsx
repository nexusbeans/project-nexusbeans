import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './AboutCompany.scss';
import about1 from '../../../Assets/Images/about/about-1.jpg';
import about2 from '../../../Assets/Images/about/pcimage.jpg';
import aboutOut1 from '../../../Assets/Images/shape/about-1.png';
import aboutOut2 from '../../../Assets/Images/shape/about-2.png';
import { Link } from 'react-router-dom';

const AboutCompany = () => {
  return (
    <section className="about_section">
      {/* About Area Start */}
      <div className="about__one dark__image section-padding">
        <Container>
          <Row className="align-items-center">
            <Col xl={6} lg={6} className="lg-mb-30" data-aos="fade-left">
              <div className="about__one-left">
                <div className="about__one-left-image">
                  <Image className="one" src={about1} alt="..." />
                  <Image className="two" src={about2} alt="..." />
                </div>
                <div className="about__one-left-experience">
                  <h1>
                    <span className="counter">5</span>+
                  </h1>
                  <h6>Years Experience Our Company</h6>
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} data-aos="fade-right">
              <div className="about__one-right">
                <div className="about__one-right-title">
                  <span className="subtitle-one">About Company</span>
                  <h2>Get your professional with Us.</h2>
                  <p>
                    Get Start and Choose us As your Best IT Server Partner For Your Business Growth! We have Expertise in WEB SERVICES (Start Up Your Business, E Commerce Portal etc, Dynamic website etc) | Payment Gateway | Perfect website develop at Affordable and lowest price.
                  </p>
                </div>
                <div className="about__one-right-btn">
                  <div>
                    <Link to='/about-us' className="btn-one" >
                      Discover More
                      <i className="far fa-chevron-double-right" />
                    </Link>
                  </div>
                </div>
                <div className="about__one-right-bottom">
                  <div className="about__one-right-bottom-list">
                    <span>
                      <i className="far fa-check" />
                      Performing market research.
                    </span>
                    <span>
                      <i className="far fa-check" />
                      Providing information to a client.
                    </span>
                    <span>
                      <i className="far fa-check" />
                      Strategic planning.
                    </span>
                  </div>
                  <div className="about__one-right-bottom-experience">
                    <h3>
                      <span className="counter">1</span>+
                    </h3>
                    <h6>Expert Team members</h6>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Image className="about__one-shape-1 dark-n" src={aboutOut1} alt="" />
        <Image className="about__one-shape-1 light-n" src="assets/img/shape/about-1-dark.png" alt="" />
        <Image className="about__one-shape-2 dark-n" src={aboutOut2} alt="" />
        <Image className="about__one-shape-2 light-n" src="assets/img/shape/about-2-dark.png" alt="" />
      </div>
      {/* About Area End */}
    </section>
  );
};

export default AboutCompany;
