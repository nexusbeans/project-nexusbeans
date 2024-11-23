import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import TopBar from "../TopBar/TopBar";
import { Container, Image } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import SearchElements from "../SearchElements/SearchElements";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSearchActive, setSearchActive] = useState(false);

  const handleSearchClick = () => {
    setSearchActive(!isSearchActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollDown = window.scrollY;

      if (scrollDown < 30) {
        setScrollPosition(scrollDown);
      } else {
        setScrollPosition(scrollDown);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const headerStickyClass =
    scrollPosition < 30 ? "" : "header__sticky-sticky-menu";

  const [isPopupActive, setPopupActive] = useState(false);

  const handlePopupToggle = () => {
    setPopupActive(!isPopupActive);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <TopBar />
      {/* Header Area Start */}
      <div className={`header__area  header__sticky ${headerStickyClass}`}>
        <Container className=" custom__container">
          <div className="header__area-menubar">
            <div className="header__area-menubar-left">
              <div className="header__area-menubar-left-logo">
                <Link to="/">
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
              </div>
            </div>
            <div className="header__area-menubar-center">
              <div className="header__area-menubar-center-menu menu-responsive">
                <ul id="mobilemenu">
                  <li className="menu-item-has-children">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="#">Platforms</Link>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <Link>Technology Services</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/our-services">React Development</Link>
                          </li>
                          <li>
                            <Link to="/our-services">
                              Angular Development
                            </Link>
                          </li>
                          <li>
                            <Link to="/our-services">
                              Vue.js Development
                            </Link>
                          </li>
                          <li>
                            <Link to="services-left-sidebar.html">
                              JavaScript Frontend
                            </Link>
                          </li>
                          <li>
                            <Link to="services-left-sidebar.html">
                              Tailwind
                            </Link>
                          </li>
                          <li>
                            <Link to="services-left-sidebar.html">
                              Email Development
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link>Back-End Technologiess</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/our-services">Node.js</Link>
                          </li>
                          <li>
                            <Link to="/our-services">Express.js</Link>
                          </li>
                          <li>
                            <Link to="/our-services">
                              PHP & Laravel Development
                            </Link>
                          </li>
                          <li>
                            <Link to="services-left-sidebar.html">
                              JavaScript Backend
                            </Link>
                          </li>
                          <li>
                            <Link to="services-left-sidebar.html">
                              Tailwind
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link to="#">Mobile App Development</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/our-services">Android / IOS Apps</Link>
                          </li>
                          <li>
                            <Link to="/our-services">React Native App</Link>
                          </li>
                          <li>
                            <Link to="/our-services">Ionic Application</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link>Graphic Design Services</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="services.html">Logo Designing</Link>
                          </li>
                          <li>
                            <Link to="services-two.html">Banner Designing</Link>
                          </li>
                          <li>
                            <Link to="services-right-sidebar.html">
                              Visiting Card Designing
                            </Link>
                          </li>
                          <li>
                            <Link to="services-left-sidebar.html">
                              cover design
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/about-us">Discover Us</Link>
                  </li>
                  {/* <li className="menu-item-has-children">
                    <Link to="/our-projects">Project</Link>
                  </li> */}
                  {/* <li className="menu-item-has-children">
                    <Link to="/blog-post">Blog</Link>
                  </li> */}
                  <li className="menu-item-has-children">
                    <Link to="/contact-us">Contact</Link>
                    {/* <ul className="sub-menu">
                      <li>
                        <a to="contact.html">Contact Style 01</a>
                      </li>
                      <li>
                        <a to="contact-two.html">Contact Style 02</a>
                      </li>
                      <li>
                        <a to="contact-three.html">Contact Style 03</a>
                      </li>
                      <li>
                        <a to="contact-four.html">Contact Style 04</a>
                      </li>
                    </ul> */}
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__area-menubar-right">
              <div className="header__area-menubar-right-box">
                <SearchElements />

                <div className="header__area-menubar-right-sidebar">
                  <div
                    className="header__area-menubar-right-sidebar-popup-icon"
                    onClick={handlePopupToggle}
                  >
                    <img
                      src={require("../../Assets/Images/icon/menu.png")}
                      alt=""
                    />
                  </div>
                </div>
                <div className="header__area-menubar-right-box-btn">
                  <Link to="/request-quote" className="btn-one">
                    Request quote
                    <i className="far fa-chevron-double-right" />
                  </Link>
                </div>
                {/* sidebar Menu Start */}
                <div
                  className={`header__area-menubar-right-sidebar-popup ${
                    isPopupActive ? "active" : ""
                  }`}
                >
                  <div
                    className="sidebar-close-btn"
                    onClick={handlePopupToggle}
                  >
                    <i className="fal fa-times" />
                  </div>
                  <div className="header__area-menubar-right-sidebar-popup-logo">
                    <Link to="/">
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
                  </div>
                  <p>
                    Get Start and Choose us As your Best IT Server Partner For
                    Your Business Growth! We have Expertise in WEB SERVICES
                    Perfect website develop at Affordable and lowest price.
                  </p>
                  <div className="header__area-menubar-right-box-sidebar-popup-contact">
                    <h4 className="mb-30">Get In Touch</h4>
                    <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
                      <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
                        <i className="fal fa-phone-alt icon-animation" />
                      </div>
                      <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
                        <span>Call Now IN</span>
                        <h6>
                          <Link to="tel:+917772007660">+91 7772007660</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
                      <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
                        <i className="fal fa-phone-alt icon-animation" />
                      </div>
                      <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
                        <span>Call Now US</span>
                        <h6>
                          <Link to="tel:+14094343519">+1 4094343519</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
                      <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
                        <i className="fal fa-envelope" />
                      </div>
                      <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
                        <span>Quick Email</span>
                        <h6>
                          <Link to="mailto:info@nexusbeans.com">
                            info@nexusbeans.com
                          </Link>
                        </h6>
                      </div>
                    </div>
                    {/* <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
                      <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
                        <span>Office Address</span>
                        <h6>
                          <Link to="#">PV3M+X68 Welshpool United Kingdom</Link>
                        </h6>
                      </div>
                    </div> */}
                  </div>
                  <div className="header__area-menubar-right-box-sidebar-popup-social">
                    <ul>
                      <li>
                        <Link to="#">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FaXTwitter />
                        </Link>
                      </li>

                      <li>
                        <Link
                          target="_blank"
                          to="https://www.linkedin.com/company/nexusbeans?trk=similar-pages"
                        >
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
                <div
                  className={`sidebar-overlay ${isPopupActive ? "show" : ""}`}
                  onClick={handlePopupToggle}
                />
              </div>
              <div className="responsive-menu mean-container">
                {windowWidth <= 991 && (
                  <div className="mean-bar" onClick={toggleMenu}>
                    <Link
                      className={`meanmenu-reveal ${
                        isMenuOpen ? "menu-open" : ""
                      }`}
                      to="/"
                    >
                      {isMenuOpen ? (
                        <div className="menu_open">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      ) : (
                        <>
                          <span></span>
                          <span></span>
                          <span></span>
                        </>
                      )}
                    </Link>
                    {isMenuOpen ? 
                    <>
                    <nav className="mean-nav">
  <ul id="mobilemenu" style={{}}>
    <li className="menu-item-has-children">
      <Link to="#">Home</Link>
      <ul className="sub-menu" style={{ display: "none" }}>
        <li>
          <a to="index.html">Home 01</a>
        </li>
        <li>
          <a to="index-two.html">Home 02</a>
        </li>
        <li>
          <a to="index-three.html">Home 03</a>
        </li>
      </ul>
      <a className="mean-expand" to="#" style={{ fontSize: 18 }}>
        +
      </a>
    </li>
    <li className="menu-item-has-children">
      <a to="#">Pages</a>
      <ul className="sub-menu" style={{ display: "none" }}>
        <li>
          <a to="about.html">About Us</a>
        </li>
        <li className="menu-item-has-children">
          <a to="#">Services</a>
          <ul className="sub-menu" style={{ display: "none" }}>
            <li>
              <a to="services.html">Services 01</a>
            </li>
            <li>
              <a to="services-two.html">Services 02</a>
            </li>
            <li>
              <a to="services-right-sidebar.html">Single Right Sidebar</a>
            </li>
            <li>
              <a to="services-left-sidebar.html">Single Left Sidebar</a>
            </li>
          </ul>
          <a className="mean-expand" to="#" style={{ fontSize: 18 }}>
            +
          </a>
        </li>
        <li>
          <a to="pricing.html">Price Plans</a>
        </li>
        <li>
          <a to="faq.html">FAQ's</a>
        </li>
        <li>
          <a to="testimonial.html">Testimonials</a>
        </li>
        <li className="menu-item-has-children">
          <a to="#">Teams</a>
          <ul className="sub-menu" style={{ display: "none" }}>
            <li>
              <a to="team-filter.html">Team Filter</a>
            </li>
            <li>
              <a to="team.html">Team 01</a>
            </li>
            <li>
              <a to="team-two.html">Team 02</a>
            </li>
            <li>
              <a to="team-three.html">Team 03</a>
            </li>
            <li>
              <a to="team-single.html">Team Single</a>
            </li>
          </ul>
          <a className="mean-expand" to="#" style={{ fontSize: 18 }}>
            +
          </a>
        </li>
        <li>
          <a to="request-quote.html">Request Quote</a>
        </li>
        <li>
          <a to="404-error.html">404 Page</a>
        </li>
      </ul>
      <a className="mean-expand" to="#" style={{ fontSize: 18 }}>
        +
      </a>
    </li>
    <li className="menu-item-has-children">
      <a to="#">Project</a>
      <ul className="sub-menu" style={{ display: "none" }}>
        <li>
          <a to="project-filter.html">Project Filter</a>
        </li>
        <li className="menu-item-has-children">
          <a to="#">Project Grid</a>
          <ul className="sub-menu" style={{ display: "none" }}>
            <li>
              <a to="project-two.html">2 Columns</a>
            </li>
            <li>
              <a to="project-three.html">3 Columns</a>
            </li>
            <li>
              <a to="project-four.html">4 Columns</a>
            </li>
          </ul>
          <a className="mean-expand" to="#" style={{ fontSize: 18 }}>
            +
          </a>
        </li>
        <li>
          <a to="project-single.html">Project Single</a>
        </li>
      </ul>
      <a className="mean-expand" to="#" style={{ fontSize: 18 }}>
        +
      </a>
    </li>
    <li className="menu-item-has-children">
      <a to="#">Blog</a>
      <ul className="sub-menu" style={{ display: "none" }}>
        <li className="menu-item-has-children">
          <a to="#">Blog Grid</a>
          <ul className="sub-menu" style={{ display: "none" }}>
            <li>
              <a to="blog-grid-two.html">2 Columns</a>
            </li>
            <li>
              <a to="blog-grid-three.html">3 Columns</a>
            </li>
          </ul>
          <a className="mean-expand" to="#" style={{ fontSize: 18 }}>
            +
          </a>
        </li>
        <li className="menu-item-has-children">
          <a to="#">Blog Standard</a>
          <ul className="sub-menu" style={{ display: "none" }}>
            <li>
              <a to="standard-left-sidebar.html">Left SideBar</a>
            </li>
            <li>
              <a to="standard-full-width.html">Full Width</a>
            </li>
            <li>
              <a to="standard-right-sidebar.html">Right SideBar</a>
            </li>
          </ul>
          <a className="mean-expand" to="#" style={{ fontSize: 18 }}>
            +
          </a>
        </li>
        <li className="menu-item-has-children">
          <a to="#">Blog Single</a>
          <ul className="sub-menu" style={{ display: "none" }}>
            <li>
              <a to="single-left-sidebar.html">Left SideBar</a>
            </li>
            <li>
              <a to="single-full-width.html">Full Width</a>
            </li>
            <li>
              <a to="single-right-sidebar.html">Right SideBar</a>
            </li>
          </ul>
          <a className="mean-expand" to="#" style={{ fontSize: 18 }}>
            +
          </a>
        </li>
      </ul>
      <a className="mean-expand" to="#" style={{ fontSize: 18 }}>
        +
      </a>
    </li>
    <li className="menu-item-has-children">
      <a to="#">Contact</a>
      <ul className="sub-menu" style={{ display: "none" }}>
        <li>
          <a to="contact.html">Contact Style 01</a>
        </li>
        <li>
          <a to="contact-two.html">Contact Style 02</a>
        </li>
        <li>
          <a to="contact-three.html">Contact Style 03</a>
        </li>
        <li className="mean-last">
          <a to="contact-four.html">Contact Style 04</a>
        </li>
      </ul>
      <a className="mean-expand" to="#" style={{ fontSize: 18 }}>
        +
      </a>
    </li>
  </ul>
</nav>

                    </>
                    : ""}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* Header Area End */}
    </header>
  );
};

export default Header;
