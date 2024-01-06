import React from "react";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import PageBread from "../../Components/PageBread/PageBread";

function ProjectPage() {
  return (
    <MainLayout>
      <main>
        <PageBread backgroundText="case study" mainHeading="Our Projects" pageName="Projects"/>
        <section>
          <div className="project__area section-padding">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-md-6 mb-30">
                  <div className="project__area-item">
                    <img src="assets/img/portfolio/project-1.jpg" alt="" />
                    <div className="project__area-item-content">
                      <h4>
                        <a href="project-single.html">Digital Solutions</a>
                      </h4>
                      <span>Conbix Agency</span>
                    </div>
                    <div className="project__area-item-icon">
                      <a href="project-single.html">
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 md-mb-30">
                  <div className="project__area-item">
                    <img src="assets/img/portfolio/project-2.jpg" alt="" />
                    <div className="project__area-item-content">
                      <h4>
                        <a href="project-single.html">Strategic planning</a>
                      </h4>
                      <span>Conbix Agency</span>
                    </div>
                    <div className="project__area-item-icon">
                      <a href="project-single.html">
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 md-mb-30">
                  <div className="project__area-item">
                    <img src="assets/img/portfolio/project-3.jpg" alt="" />
                    <div className="project__area-item-content">
                      <h4>
                        <a href="project-single.html">Business Consulting</a>
                      </h4>
                      <span>Conbix Agency</span>
                    </div>
                    <div className="project__area-item-icon">
                      <a href="project-single.html">
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 mb-30">
                  <div className="project__area-item">
                    <img src="assets/img/portfolio/project-4.jpg" alt="" />
                    <div className="project__area-item-content">
                      <h4>
                        <a href="project-single.html">Business analytics</a>
                      </h4>
                      <span>Conbix Agency</span>
                    </div>
                    <div className="project__area-item-icon">
                      <a href="project-single.html">
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 xl-mb-30">
                  <div className="project__area-item">
                    <img src="assets/img/portfolio/project-5.jpg" alt="" />
                    <div className="project__area-item-content">
                      <h4>
                        <a href="project-single.html">Human research</a>
                      </h4>
                      <span>Conbix Agency</span>
                    </div>
                    <div className="project__area-item-icon">
                      <a href="project-single.html">
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 md-mb-30">
                  <div className="project__area-item">
                    <img src="assets/img/portfolio/project-6.jpg" alt="" />
                    <div className="project__area-item-content">
                      <h4>
                        <a href="project-single.html">financial advice</a>
                      </h4>
                      <span>Conbix Agency</span>
                    </div>
                    <div className="project__area-item-icon">
                      <a href="project-single.html">
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 xl-mb-30">
                  <div className="project__area-item">
                    <img src="assets/img/portfolio/project-7.jpg" alt="" />
                    <div className="project__area-item-content">
                      <h4>
                        <a href="project-single.html">Business Intelligence</a>
                      </h4>
                      <span>Conbix Agency</span>
                    </div>
                    <div className="project__area-item-icon">
                      <a href="project-single.html">
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 md-mb-30">
                  <div className="project__area-item">
                    <img src="assets/img/portfolio/project-8.jpg" alt="" />
                    <div className="project__area-item-content">
                      <h4>
                        <a href="project-single.html">audit marketing</a>
                      </h4>
                      <span>Conbix Agency</span>
                    </div>
                    <div className="project__area-item-icon">
                      <a href="project-single.html">
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="project__area-item">
                    <img src="assets/img/portfolio/project-9.jpg" alt="" />
                    <div className="project__area-item-content">
                      <h4>
                        <a href="project-single.html">Machine Learning</a>
                      </h4>
                      <span>Conbix Agency</span>
                    </div>
                    <div className="project__area-item-icon">
                      <a href="project-single.html">
                        <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-70">
                <div className="col-xl-12 t-center">
                  <a className="btn-one" href="#">
                    Read More
                    <i className="far fa-chevron-double-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default ProjectPage;
