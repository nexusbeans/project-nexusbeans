import React from "react";
import "./OurServices.scss";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import PageBread from "../../Components/PageBread/PageBread";
import { Col, Container, Row } from "react-bootstrap";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    icon: "assets/img/icon/services-1.png",
    iconOne: "assets/img/icon/services-11.png",
    description:
      "Proin pulvinar eu sem eu vehicula. Integer urna libero, semper",
  },
  {
    id: 2,
    title: "Custom Web Portals",
    icon: "assets/img/icon/services-2.png",
    iconOne: "assets/img/icon/services-22.png",
    description:
      "Proin pulvinar eu sem eu vehicula. Integer urna libero, semper",
  },
  {
    id: 3,
    title: "Content Management System (CMS)",
    icon: "assets/img/icon/services-2.png",
    iconOne: "assets/img/icon/services-22.png",
    description:
      "Proin pulvinar eu sem eu vehicula. Integer urna libero, semper",
  },
  {
    id: 4,
    title: "Android Application",
    icon: "assets/img/icon/services-2.png",
    iconOne: "assets/img/icon/services-22.png",
    description:
      "Proin pulvinar eu sem eu vehicula. Integer urna libero, semper",
  },
  {
    id: 5,
    title: "CRM Solution",
    icon: "assets/img/icon/services-2.png",
    iconOne: "assets/img/icon/services-22.png",
    description:
      "Proin pulvinar eu sem eu vehicula. Integer urna libero, semper",
  },
  {
    id: 6,
    title: "E-Commerce Solution",
    icon: "assets/img/icon/services-2.png",
    iconOne: "assets/img/icon/services-22.png",
    description:
      "Proin pulvinar eu sem eu vehicula. Integer urna libero, semper",
  },
  {
    id: 7,
    title: " UI/UX Design",
    icon: "assets/img/icon/services-2.png",
    iconOne: "assets/img/icon/services-22.png",
    description:
      "Proin pulvinar eu sem eu vehicula. Integer urna libero, semper",
  },
  {
    id: 8,
    title: " Web Mail Service",
    icon: "assets/img/icon/services-2.png",
    iconOne: "assets/img/icon/services-22.png",
    description:
      "Proin pulvinar eu sem eu vehicula. Integer urna libero, semper",
  },
  {
    id: 9,
    title: "  Social Media Marketing",
    icon: "assets/img/icon/services-2.png",
    iconOne: "assets/img/icon/services-22.png",
    description:
      "Proin pulvinar eu sem eu vehicula. Integer urna libero, semper",
  },
  {
    id: 10,
    title: "Logo And Banner Designing",
    icon: "assets/img/icon/services-2.png",
    iconOne: "assets/img/icon/services-22.png",
    description:
      "Proin pulvinar eu sem eu vehicula. Integer urna libero, semper",
  },
  {
    id: 11,
    title: "Visiting Card Designing",
    icon: "assets/img/icon/services-2.png",
    iconOne: "assets/img/icon/services-22.png",
    description:
      "Proin pulvinar eu sem eu vehicula. Integer urna libero, semper",
  },
  {
    id: 12,
    title: "Hosting Solution",
    icon: "assets/img/icon/services-2.png",
    iconOne: "assets/img/icon/services-22.png",
    description:
      "Proin pulvinar eu sem eu vehicula. Integer urna libero, semper",
  },
];

function OurServices() {
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
                        <a href={`services/${service.id}`}>{service.title}</a>
                      </h4>
                      <p>{service.description}</p>
                      <a
                        className="simple-btn-2"
                        href={`services/${service.id}`}
                      >
                        Read More
                        <i className="far fa-chevron-double-right" />
                      </a>
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
