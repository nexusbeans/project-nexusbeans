import React, { useEffect, useState } from "react";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import PageBread from "../../Components/PageBread/PageBread";
import { useParams } from "react-router-dom";
import { baseURL } from "../../utils/constant";
import axios from "axios";

function OurServicesDetails() {
  useEffect(() => {
    loadUsers();
  },);
  
  const [servicesData, setServicesData] = useState([]);
  const { id } = useParams();

  const loadUsers = async () => {
    try {
      const response = await axios.get(`${baseURL}/servicesData/${id}`);
      setServicesData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <MainLayout>
      <main className="ourService_details">
        <PageBread
          backgroundText={"Platforms Services"}
          mainHeading={servicesData.title}
          pageName={servicesData.link}
        />
        <section>
            <div className="services__details section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-8 lg-mb-60">
                    <div className="services__details-left">
                      <div className="services__details-left-image dark__image">
                        <img
                          src="assets/img/pages/services-details.jpg"
                          alt=""
                        />
                      </div>
                      <div className="services__details-left-content">
                        <h2>{servicesData.title}</h2>
                        <p className="mb-25">
                         {servicesData.description}
                        </p>
                        <p className="mb-25">
                          Nunc efficitur mollis nunc, ac facilisis orci viverra
                          vel. Aliquam rutrum libero sit amet justo consectetur
                          luctus. Duis dolor augue, euismod a accumsan at,
                          commodo a lorem.
                        </p>
                        <div className="services__details-left-content-list">
                          <span>
                            <i className="far fa-check" />
                            It's essential to work with business consultants who
                            have
                          </span>
                          <span>
                            <i className="far fa-check" />
                            Business consultants may charge by the project or
                            hour, or you may need to pay daily or monthly
                            retainers.
                          </span>
                          <span>
                            <i className="far fa-check" />
                            Meet with the board of directors and employees.
                          </span>
                        </div>
                        <h3 className="mb-30">Working challenge</h3>
                        <p className="mb-25">
                          Fusce ornare mauris arcu, eget placerat erat porttitor
                          at. Cras non justo consectetur, tempus lectus a,
                          tempor arcu. Proin luctus sagittis augue,
                        </p>
                        <div className="services__details-left-content-list bold">
                          <div className="row">
                            <div className="col-sm-6 sm-mb-15">
                              <span>
                                <i className="far fa-check" />
                                Accounting consulting.
                              </span>
                              <span>
                                <i className="far fa-check" />
                                Read all company materials
                              </span>
                              <span>
                                <i className="far fa-check" />
                                Financial consultants
                              </span>
                            </div>
                            <div className="col-sm-6">
                              <span>
                                <i className="far fa-check" />
                                Marketing consultants
                              </span>
                              <span>
                                <i className="far fa-check" />
                                Operations consultants
                              </span>
                              <span>
                                <i className="far fa-check" />
                                Implementation
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3>frequently asked questions</h3>
                        <div className="faq-collapse mt-35">
                          <div className="faq-collapse-item">
                            <div className="faq-collapse-item-card">
                              <div className="faq-collapse-item-card-header">
                                <h6>
                                  <span className="far fa-question-circle" />
                                  How do you manage consulting effectively?
                                </h6>
                                <i className="far fa-minus" />
                              </div>
                              <div className="faq-collapse-item-card-header-content active">
                                <p>
                                  {" "}
                                  Pellentesque eget dui tellus. Donec semper
                                  tincidunt egestas. Vivamus lectus ipsum,
                                  tempor quis mattis in, ornare ut tortor.
                                  Praesent condimentum eu turpis ut hendrerit.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="faq-collapse-item">
                            <div className="faq-collapse-item-card">
                              <div className="faq-collapse-item-card-header">
                                <h6>
                                  <span className="far fa-question-circle" />
                                  How do consultants solve problems?
                                </h6>
                                <i className="far fa-plus" />
                              </div>
                              <div className="faq-collapse-item-card-header-content display-none">
                                <p>
                                  {" "}
                                  Pellentesque eget dui tellus. Donec semper
                                  tincidunt egestas. Vivamus lectus ipsum,
                                  tempor quis mattis in, ornare ut tortor.
                                  Praesent condimentum eu turpis ut hendrerit.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="faq-collapse-item">
                            <div className="faq-collapse-item-card">
                              <div className="faq-collapse-item-card-header">
                                <h6>
                                  <span className="far fa-question-circle" />
                                  What is required of a consultant?
                                </h6>
                                <i className="far fa-plus" />
                              </div>
                              <div className="faq-collapse-item-card-header-content display-none">
                                <p>
                                  {" "}
                                  Pellentesque eget dui tellus. Donec semper
                                  tincidunt egestas. Vivamus lectus ipsum,
                                  tempor quis mattis in, ornare ut tortor.
                                  Praesent condimentum eu turpis ut hendrerit.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="all__sidebar">
                      <div className="all__sidebar-item">
                        <h4>Our Solutions</h4>
                        <div className="all__sidebar-item-solution">
                          <ul>
                            <li>
                              <a href="services-right-sidebar.html">
                                <i className="far fa-chevron-double-right" />
                                Business Consulting<span>(2)</span>
                              </a>
                            </li>
                            <li>
                              <a href="services-right-sidebar.html">
                                <i className="far fa-chevron-double-right" />
                                Human research<span>(3)</span>
                              </a>
                            </li>
                            <li>
                              <a href="services-right-sidebar.html">
                                <i className="far fa-chevron-double-right" />
                                Digital solutions<span>(4)</span>
                              </a>
                            </li>
                            <li>
                              <a href="services-right-sidebar.html">
                                <i className="far fa-chevron-double-right" />
                                strategy &amp; Research<span>(5)</span>
                              </a>
                            </li>
                            <li>
                              <a href="services-right-sidebar.html">
                                <i className="far fa-chevron-double-right" />
                                Business Model<span>(6)</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="all__sidebar-item">
                        <h4>Download</h4>
                        <div className="all__sidebar-item-download">
                          <ul>
                            <li>
                              <a href="">
                                <img src="assets/img/icon/pdf.png" alt="" />
                                Our Brochures
                                <i className="fal fa-arrow-to-bottom" />
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <img
                                  src="assets/img/icon/document.png"
                                  alt=""
                                />
                                Company Details
                                <i className="fal fa-arrow-to-bottom" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="all__sidebar-help">
                        <div className="all__sidebar-help-image">
                          <img
                            className="img__full"
                            src="assets/img/pages/help.jpg"
                            alt=""
                          />
                          <div className="all__sidebar-help-image-content">
                            <img src="assets/img/favicon-1.png" alt="" />
                            <h4>We're Always ready for help You</h4>
                            <a className="btn-one" href="contact.html">
                              Need Help
                              <i className="far fa-chevron-double-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default OurServicesDetails;
