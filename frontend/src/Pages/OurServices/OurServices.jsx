import React, { useEffect, useState } from "react";
import "./OurServices.scss";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import PageBread from "../../Components/PageBread/PageBread";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../utils/constant";



function OurServices() {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);
  
  const loadUsers = async () => {
    const response =await axios.get(`${baseURL}/servicesData`);
    // setServicesData(response.data.reverse());
    setServicesData(response.data);
  };
  
  return (
    <MainLayout>
      <main className="our_serviesMain">
        <PageBread
          backgroundText={"Platforms"}
          mainHeading={"Our Best Platforms "}
          pageName={"Platforms"}
        />
        <section className="section_multiData">
          <div className="services__page section-padding">
            <Container>
              <Row>
                {servicesData.map((service) => (
                  <Col lg={4} md={6}
                    key={service.id}
                    className=" mb-30"
                  >
                    <div className="services__one-item">
                      <div className="services__one-item-icon">
                        <img src={service.icon} alt="" />
                        <div className="services__one-item-icon-one">
                          <img src={service.iconOne} alt="" />
                        </div>
                      </div>
                      <h4>
                        <Link href={`services-details/${service.id}`}>{service.title}</Link>
                      </h4>
                      <p>{service.description}</p>
                      <Link to={`services-details/${service.id}`}
                        className="simple-btn-2"
                      >
                        Read More
                        <i className="far fa-chevron-double-right" />
                      </Link>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default OurServices;
