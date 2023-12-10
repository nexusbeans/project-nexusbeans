import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "../../Layouts/Footer/Footer";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import PageBread from "../../Components/PageBread/PageBread";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <MainLayout>
      <main className="error_page">
        {/* Page Banner Area Start */}
        <PageBread backgroundText={"Error"} mainHeading={"Page not found"} pageName={"404"}/>
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
                  <Link className="btn-one" to="/">
                    Back to Home <i className="far fa-chevron-double-right" />
                  </Link>
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
