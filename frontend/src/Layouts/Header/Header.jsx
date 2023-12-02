import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import TopBar from "../TopBar/TopBar";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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

  return (
    <header>
      <TopBar />
      {/* Header Area Start */}
      <div className={`header__area  header__sticky ${headerStickyClass}`}>
        <div className="container custom__container">
          <div className="header__area-menubar">
            <div className="header__area-menubar-left">
              <div className="header__area-menubar-left-logo">
                <Link to="/">
                  <img
                    className="dark-n"
                    src={require("../../Assets/Images/nexus.png")}
                    alt=""
                  />
                  <img
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
                    <Link to="#">Services</Link>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <Link>Technology Services</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="services.html">React Development</Link>
                          </li>
                          <li>
                            <Link to="services-two.html">
                              Angular Development
                            </Link>
                          </li>
                          <li>
                            <Link href="services-right-sidebar.html">
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
                            <Link to="services.html">Node.js</Link>
                          </li>
                          <li>
                            <Link to="services-two.html">Express.js</Link>
                          </li>
                          <li>
                            <Link href="services-right-sidebar.html">
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
                        <Link href="#">Mobile App Development</Link>
                        <ul className="sub-menu">
                        <li>
                            <Link href="services.html">Android / IOS Apps</Link>
                          </li>
                          <li>
                            <Link href="services.html">React Native App</Link>
                          </li>
                          <li>
                            <a href="services-two.html">Ionic Application</a>
                          </li>
                          <li>
                            <a href="services-right-sidebar.html">
                              Single Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="services-left-sidebar.html">
                              Single Left Sidebar
                            </a>
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
                    <Link href="#">Project</Link>
                    <ul className="sub-menu">
                      <li>
                        <a href="project-filter.html">Project Filter</a>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">Project Grid</Link>
                        <ul className="sub-menu">
                          <li>
                            <a href="project-two.html">2 Columns</a>
                          </li>
                          <li>
                            <a href="project-three.html">3 Columns</a>
                          </li>
                          <li>
                            <a href="project-four.html">4 Columns</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="project-single.html">Project Single</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Blog</a>
                    <ul className="sub-menu">
                      <li className="menu-item-has-children">
                        <a href="#">Blog Grid</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog-grid-two.html">2 Columns</a>
                          </li>
                          <li>
                            <a href="blog-grid-three.html">3 Columns</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog Standard</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="standard-left-sidebar.html">
                              Left SideBar
                            </a>
                          </li>
                          <li>
                            <a href="standard-full-width.html">Full Width</a>
                          </li>
                          <li>
                            <a href="standard-right-sidebar.html">
                              Right SideBar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog Single</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="single-left-sidebar.html">Left SideBar</a>
                          </li>
                          <li>
                            <a href="single-full-width.html">Full Width</a>
                          </li>
                          <li>
                            <a href="single-right-sidebar.html">
                              Right SideBar
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/contact-us">Contact</Link>
                    {/* <ul className="sub-menu">
                      <li>
                        <a href="contact.html">Contact Style 01</a>
                      </li>
                      <li>
                        <a href="contact-two.html">Contact Style 02</a>
                      </li>
                      <li>
                        <a href="contact-three.html">Contact Style 03</a>
                      </li>
                      <li>
                        <a href="contact-four.html">Contact Style 04</a>
                      </li>
                    </ul> */}
                  </li>
                </ul>
              </div>
            </div>
            <div className="header__area-menubar-right">
              <div className="header__area-menubar-right-box">
                <div className="header__area-menubar-right-box-search">
                  <div className="search">
                    <span className="header__area-menubar-right-box-search-icon open">
                      <i className="fal fa-search" />
                    </span>
                  </div>
                  <div className="header__area-menubar-right-box-search-box">
                    <form>
                      <input type="search" placeholder="Search Here....." />
                      <button type="submit">
                        <i className="fal fa-search" />
                      </button>
                    </form>{" "}
                    <span className="header__area-menubar-right-box-search-box-icon">
                      <i className="fal fa-times" />
                    </span>
                  </div>
                </div>
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
                  <a className="btn-one" href="request-quote.html">
                    Request quote
                    <i className="far fa-chevron-double-right" />
                  </a>
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
                    <a href="index.html">
                      {" "}
                      <img
                        src={require("../../Assets/Images/logo-2.png")}
                        alt=""
                      />
                    </a>
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
                          <a href="tel:+917772007660">+91 7772007660</a>
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
                          <a href="tel:+14094343519">+1 4094343519</a>
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
                          <a href="mailto:info@nexusbeans.com">
                            info@nexusbeans.com
                          </a>
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
                          <Link href="#">PV3M+X68 Welshpool United Kingdom</Link>
                        </h6>
                      </div>
                    </div> */}
                  </div>
                  <div className="header__area-menubar-right-box-sidebar-popup-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-behance" />
                        </a>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`sidebar-overlay ${isPopupActive ? "show" : ""}`}
                  onClick={handlePopupToggle}
                />
                {/* sidebar Menu Start */}
              </div>
              <div className="responsive-menu" />
            </div>
          </div>
        </div>
      </div>
      {/* Header Area End */}
    </header>
  );
};

export default Header;
