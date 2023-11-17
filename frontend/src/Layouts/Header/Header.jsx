import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <>
    <>
  {/* Top Bar Start */}
  <div className="top__bar">
    <div className="container custom__container">
      <div className="row">
        <div className="col-xl-5 col-md-6">
          <div className="top__bar-left">
            <a href="#">
              <i className="far fa-map-marker-alt" />
              8502 Preston Rd. Inglewood, Maine 98380
            </a>
          </div>
        </div>
        <div className="col-xl-7 col-md-6">
          <div className="top__bar-right">
            <a href="mailto:conbix@gmail.com">
              <i className="fas fa-envelope" />
              conbix@gmail.com
            </a>
            <div className="top__bar-right-social">
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
    </div>
  </div>
  {/* Top Bar End */}
  {/* Header Area Start */}
  <div className="header__area header__sticky">
    <div className="container custom__container">
      <div className="header__area-menubar">
        <div className="header__area-menubar-left">
          <div className="header__area-menubar-left-logo">
            <a href="index.html">
              <img className="dark-n" src="assets/img/logo-1.png" alt="" />
              <img className="light-n" src="assets/img/logo-2.png" alt="" />
            </a>
          </div>
        </div>
        <div className="header__area-menubar-center">
          <div className="header__area-menubar-center-menu menu-responsive">
            <ul id="mobilemenu">
              <li className="menu-item-has-children">
                <a href="#">Home</a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Home 01</a>
                  </li>
                  <li>
                    <a href="index-two.html">Home 02</a>
                  </li>
                  <li>
                    <a href="index-three.html">Home 03</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Services</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="services.html">Services 01</a>
                      </li>
                      <li>
                        <a href="services-two.html">Services 02</a>
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
                  <li>
                    <a href="pricing.html">Price Plans</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ's</a>
                  </li>
                  <li>
                    <a href="testimonial.html">Testimonials</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Teams</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="team-filter.html">Team Filter</a>
                      </li>
                      <li>
                        <a href="team.html">Team 01</a>
                      </li>
                      <li>
                        <a href="team-two.html">Team 02</a>
                      </li>
                      <li>
                        <a href="team-three.html">Team 03</a>
                      </li>
                      <li>
                        <a href="team-single.html">Team Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="request-quote.html">Request Quote</a>
                  </li>
                  <li>
                    <a href="404-error.html">404 Page</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Project</a>
                <ul className="sub-menu">
                  <li>
                    <a href="project-filter.html">Project Filter</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Project Grid</a>
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
                        <a href="standard-left-sidebar.html">Left SideBar</a>
                      </li>
                      <li>
                        <a href="standard-full-width.html">Full Width</a>
                      </li>
                      <li>
                        <a href="standard-right-sidebar.html">Right SideBar</a>
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
                        <a href="single-right-sidebar.html">Right SideBar</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Contact</a>
                <ul className="sub-menu">
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
                </ul>
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
              <div className="header__area-menubar-right-sidebar-popup-icon">
                <img src="assets/img/icon/menu.png" alt="" />
              </div>
            </div>
            <div className="header__area-menubar-right-box-btn">
              <a className="btn-one" href="request-quote.html">
                Request quote
                <i className="far fa-chevron-double-right" />
              </a>
            </div>
            {/* sidebar Menu Start */}
            <div className="header__area-menubar-right-sidebar-popup">
              <div className="sidebar-close-btn">
                <i className="fal fa-times" />
              </div>
              <div className="header__area-menubar-right-sidebar-popup-logo">
                <a href="index.html">
                  {" "}
                  <img src="assets/img/logo-2.png" alt="" />{" "}
                </a>
              </div>
              <p>
                Morbi et tellus imperdiet, aliquam nulla sed, dapibus erat.
                Aenean dapibus sem non purus venenatis vulputate. Donec accumsan
                eleifend blandit. Nullam auctor ligula
              </p>
              <div className="header__area-menubar-right-box-sidebar-popup-contact">
                <h4 className="mb-30">Get In Touch</h4>
                <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
                  <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
                    <i className="fal fa-phone-alt icon-animation" />
                  </div>
                  <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
                    <span>Call Now</span>
                    <h6>
                      <a href="tel:+125(895)658568">+125 (895) 658 568</a>
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
                      <a href="mailto:info.help@gmail.com">
                        info.help@gmail.com
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
                  <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
                    <span>Office Address</span>
                    <h6>
                      <a href="#">PV3M+X68 Welshpool United Kingdom</a>
                    </h6>
                  </div>
                </div>
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
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-overlay" />
            {/* sidebar Menu Start */}
          </div>
          <div className="responsive-menu" />
        </div>
      </div>
    </div>
  </div>
  {/* Header Area End */}
</>

    </>
  )
}

export default Header