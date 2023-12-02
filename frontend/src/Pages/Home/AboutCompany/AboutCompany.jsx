import React, { useEffect } from 'react'
import './AboutCompany.scss'
import about1 from '../../../Assets/Images/about/about-1.jpg';
import about2 from '../../../Assets/Images/about/pcimage.jpg';
import aboutOut1 from '../../../Assets/Images/shape/about-1.png';
import aboutOut2 from '../../../Assets/Images/shape/about-2.png';

const AboutCompany = () => {
    return (
        <section className='about_section'>
            {/* About Area Start */}
            <div className="about__one dark__image section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 lg-mb-30"  data-aos="fade-left">
                            <div className="about__one-left">
                                <div className="about__one-left-image">
                                    <img className="one" src={about1} alt="" />
                                    <img className="two" src={about2} alt="" />
                                </div>
                                <div className="about__one-left-experience">
                                    <h1>
                                        <span className="counter">5</span>+
                                    </h1>
                                    <h6>Years Experience Our Company</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6"  data-aos="fade-right">
                            <div className="about__one-right">
                                <div className="about__one-right-title">
                                    <span className="subtitle-one">About Company</span>
                                    <h2>Get your professional with Us.</h2>
                                    <p>
                                    Get Start and Choose us As your Best IT Server Partner For Your Business Growth! We have Expertise in WEB SERVICES (Start Up Your Business, E Commerce Portal etc , Dynamic website etc) | Payment Gateway | Perfect website develop at Affordable and lowest price.
                                    </p>
                                </div>
                                <div className="about__one-right-btn">
                                    <div>
                                        <a className="btn-one" href="about.html">
                                            Discover More
                                            <i className="far fa-chevron-double-right" />
                                        </a>
                                    </div>
                                    {/* <div className="about__one-right-btn-author">
                                        <div className="about__one-right-btn-author-avatar">
                                            <img src="assets/img/avatar/avatar-1.jpg" alt="" />
                                        </div>
                                        <div className="about__one-right-btn-author-name">
                                            <span className="text-one">Nguyen, Shane</span>
                                            <h6>Founder CEO</h6>
                                        </div>
                                    </div> */}
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
                        </div>
                    </div>
                </div>
                <img
                    className="about__one-shape-1 dark-n"
                    src={aboutOut1}
                    alt=""
                />
                <img
                    className="about__one-shape-1 light-n"
                    src="assets/img/shape/about-1-dark.png"
                    alt=""
                />
                <img
                    className="about__one-shape-2 dark-n"
                    src={aboutOut2}
                    alt=""
                />
                <img
                    className="about__one-shape-2 light-n"
                    src="assets/img/shape/about-2-dark.png"
                    alt=""
                />
            </div>
            {/* About Area End */}
        </section>
    )
}

export default AboutCompany
