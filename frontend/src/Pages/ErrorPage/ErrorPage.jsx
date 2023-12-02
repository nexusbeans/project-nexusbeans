import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "../../Layouts/Footer/Footer";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Header from "../../Layouts/Header/Header";

function ErrorPage() {
  return (
    <MainLayout>
      <main className="error_page">
        {/* Page Banner Area Start */}
        <div
          className="page__banner"
          style={{ backgroundImage: 'url("assets/img/pages/page-banner.jpg")' }}
        >
          <Container>
            <Row>
              <Col xl={12}>
                <div className="page__banner-content">
                  <span>Error</span>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                      <span>|</span>
                    </li>
                    <li>404</li>
                  </ul>
                  <h1>Page not found</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Page Banner Area End */}
        {/* Error Page Start */}
        <div className="error section-padding">
          <Container>
            <Row>
              <Col xl={12}>
                <div className="error-page">
                  <img className="dark-n" src="assets/img/pages/404.png" alt="" />
                  <img className="light-n" src="assets/img/pages/404-dark.png" alt="" />
                  <h2>Oops! Page not found.</h2>
                  <p>
                    The page you are looking for is not available or doesn’t
                    belong to this website!
                  </p>
                  <Button className="btn-one" href="index.html">
                    Back to Home <i className="far fa-chevron-double-right" />
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Error Page End */}
      </main>
      <Footer />
    </MainLayout>
  );
}

export default ErrorPage;
