import React from "react";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import PageBread from "../../Components/PageBread/PageBread";

function About() {
  return (
    <MainLayout>
        <PageBread backgroundText={"About Us"} mainHeading={"About Our Beans"} pageName={"About Company"}/>
      <section className="about_section">

<div>
  {/* About Company Area Start */}
  <div className="about__company section-padding">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xxl-7 col-xl-6 xl-mb-30">
          <div className="about__company-left">
            <div className="about__company-left-image dark__image">
              <img src="assets/img/about/about-7.jpg" alt />
              <img src="assets/img/about/about-8.jpg" alt />
            </div>
            <div className="about__company-left-experience">
              <h2><span className="counter">180</span>+</h2>
              <h6>Get national Award</h6>
            </div>
          </div>
        </div>
        <div className="col-xxl-5 col-xl-6">
          <div className="about__company-right">
            <div className="about__company-right-title">							
              <span className="subtitle-one">About Our Company</span>
              <h2>Find out more about our business consulting</h2>
              <p>Fusce quis lacus laoreet, dignissim quam eu, scelerisque tortor. Cras volutpat aliquet efficitur. Quisque dignissim justo ac erat tincidunt tristique. Curabitur id tortor ipsum. Suspendisse suscipit commodo turpis eu interdum</p>
              <a className="btn-one" href="about.html">Read More<i className="far fa-chevron-double-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img className="about__one-shape-1" src="assets/img/shape/about-1.png" alt />
    <img className="about__one-shape-2" src="assets/img/shape/about-2.png" alt />
  </div>
  {/* About Company Area End */}
  {/* About Company Two Area Start */}
  <div className="company__two section-padding pt-0">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-6 col-lg-7 lg-mb-30">
          <div className="company__two-left">
            <div className="company__two-left-title">
              <span className="subtitle-one">Who we are</span>
              <h2>best company Especially in Business</h2>
              <p>Aenean ac vulputate nibh, sed fringilla metus. Pellentesque porttitor felis eu nunc feugiat, nec condimentum magna ultricies. Nam vitae est accumsan nunc</p>
            </div>
            <div className="company__two-left-skill">
              <div className="company__two-left-skill-item">
                <h2><span className="counter">89</span>k</h2>
                <h6>Project Completed Last Years</h6>
              </div>
              <div className="company__two-left-skill-item">
                <h2><span className="counter">87</span>k</h2>
                <h6>happy customer worldwide</h6>
              </div>
            </div>
            <a className="btn-two" href="about.html">Discover more<i className="far fa-chevron-double-right" /></a>
          </div>
        </div>
        <div className="col-xl-6 col-lg-5">
          <div className="company__two-right dark__image t-right">
            <img className="img__full" src="assets/img/about/about-9.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About Company Two Area End */}
  {/* About Solution Area Start */}
  <div className="about__solution" data-background="assets/img/about/about-solution.jpg">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-8">
          <div className="about__solution-left xl-t-center">
            <h2>implement solutions &amp; achieve goals.</h2>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="about__solution-right t-right xl-t-center">						
            <a className="btn-one" href="contact.html">Get Free Consultations<i className="far fa-chevron-double-right" /></a>
            <img className="about__solution-right-shape left-right-animate" src="assets/img/shape/about-solution.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About Solution Area End */}
  {/* Company History Area Start*/}
  <div className="company__history section-padding">
    <div className="container">
      <div className="row mb-70">
        <div className="col-xl-12">
          <div className="company__history-title t-center">
            <span className="subtitle-one">Our History</span>
            <h2>Our Company History</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="company__history-area dark__image">
            <div className="company__history-area-item">
              <div className="company__history-area-item-left">
                <img src="assets/img/about/history-1.jpg" alt />
              </div>
              <div className="company__history-area-item-right">
                <div className="company__history-area-item-right-content mb-50 xl-mb-30">
                  <div className="company__history-area-item-right-content-date">
                    <span>2003</span>
                    <h5>Start Company</h5>
                  </div>
                  <p>Aliquam sit amet massa quis augue porta consequat eu eu lectus. Praesent a ipsum a sem tristique</p>
                </div>
              </div>
            </div>
            <div className="company__history-area-items">
              <div className="company__history-area-items-left order-last order-lg-first">
                <div className="company__history-area-items-left-content mb-50 xl-mb-30">
                  <div className="company__history-area-items-left-content-date">
                    <span>2008</span>
                    <h5>Opening Office</h5>
                  </div>
                  <p>Aliquam sit amet massa quis augue porta consequat eu eu lectus. Praesent a ipsum a sem tristique</p>
                </div>
              </div>
              <div className="company__history-area-items-right">
                <div className="company__history-area-items-right-image">
                  <img src="assets/img/about/history-2.jpg" alt />
                </div>
              </div>
            </div>
            <div className="company__history-area-item">
              <div className="company__history-area-item-left">
                <div className="company__history-area-item-left-image">
                  <img src="assets/img/about/history-3.jpg" alt />
                </div>
              </div>
              <div className="company__history-area-item-right">
                <div className="company__history-area-item-right-content mb-50 xl-mb-30">
                  <div className="company__history-area-item-right-content-date">
                    <span>2013</span>
                    <h5>Improve Management</h5>
                  </div>
                  <p>Aliquam sit amet massa quis augue porta consequat eu eu lectus. Praesent a ipsum a sem tristique</p>
                </div>
              </div>
            </div>
            <div className="company__history-area-items">
              <div className="company__history-area-items-left order-last order-lg-first">
                <div className="company__history-area-items-left-content mb-50 xl-mb-30">
                  <div className="company__history-area-items-left-content-date">
                    <span>2018</span>
                    <h5>Open Research Team</h5>
                  </div>
                  <p>Aliquam sit amet massa quis augue porta consequat eu eu lectus. Praesent a ipsum a sem tristique</p>
                </div>
              </div>
              <div className="company__history-area-items-right">
                <div className="company__history-area-items-right-image">
                  <img src="assets/img/about/history-4.jpg" alt />
                </div>
              </div>
            </div>
            <div className="company__history-area-item">
              <div className="company__history-area-item-left">
                <div className="company__history-area-item-left-image">
                  <img src="assets/img/about/history-5.jpg" alt />
                </div>
              </div>
              <div className="company__history-area-item-right">
                <div className="company__history-area-item-right-content">
                  <div className="company__history-area-item-right-content-date">
                    <span>2023</span>
                    <h5>Winning Award</h5>
                  </div>
                  <p>Aliquam sit amet massa quis augue porta consequat eu eu lectus. Praesent a ipsum a sem tristique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Company History Area End*/}
</div>

      </section>
    </MainLayout>
  );
}

export default About;
