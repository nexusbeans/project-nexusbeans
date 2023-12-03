import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HomeBanner.scss";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import banner2 from "../../../Assets/Images/banner/b2.jpg";
import banner1 from "../../../Assets/Images/banner/b1.jpg";

const HomeBanner = () => {
    useEffect(() => {


    const elements = document.querySelectorAll("[data-background]");
    elements.forEach((element) => {
      const backgroundImage = element.getAttribute("data-background");
      if (backgroundImage) {
        element.style.backgroundImage = `url(${backgroundImage})`;
      }
    });
  }, []);
  return (
    <section className="home_slider">
      {/* Banner Area Start */}
      <div className="banner__one swiper banner-one-slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          effect="fade"
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="banner__one-image swiper-slide" data-background={banner1}>
              <div className="box">
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
              </div>

              <Container>
                <Row>
                  <Col xl={12}>
                    <div className="banner__one-content style_backHead">
                      <span data-animation="fadeInUp" data-delay=".4s">
                        Welcome to NexusBeans
                      </span>
                      {/* Business consulting advice */}
                      <TypeAnimation
                        data-animation="fadeInUp"
                        data-delay=".7s"
                        sequence={[" Business consulting advice", 1000]}
                        wrapper="h1"
                        speed={10}
                        repeat={Infinity}
                      />
                      <div
                        className="banner__one-content-button"
                        data-animation="fadeInUp"
                        data-delay="1s"
                      >
                        <div className="banner__one-content-button-item">
                          <Button className="btn-one" href="about.html">
                            Read More <i className="far fa-chevron-double-right" />
                          </Button>
                        </div>
                        <div className="banner__one-content-video-icon">
                          <a className="video-popup" href="https://www.youtube.com/watch?v=0WC-tD-njcA">
                            <i className="fas fa-play" />
                          </a>
                        </div>
                      </div>
                      <div className="banner-four-pagination" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner__one-image swiper-slide" data-background={banner2}>
              <div className="box">
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
              </div>

              <Container>
                <Row>
                  <Col xl={12}>
                    <div className="banner__one-content style_backHead">
                      <span data-animation="fadeInUp" data-delay=".4s">
                        Welcome to NexusBeans2
                      </span>
                      {/* Business consulting advice */}
                      <TypeAnimation
                        data-animation="fadeInUp"
                        data-delay=".7s"
                        sequence={[" Business consulting advice", 1000]}
                        wrapper="h1"
                        speed={10}
                        repeat={Infinity}
                      />
                      <div
                        className="banner__one-content-button"
                        data-animation="fadeInUp"
                        data-delay="1s"
                      >
                        <div className="banner__one-content-button-item">
                          <Button className="btn-one" href="about.html">
                            Read More <i className="far fa-chevron-double-right" />
                          </Button>
                        </div>
                        <div className="banner__one-content-video-icon">
                          <a className="video-popup" href="https://www.youtube.com/watch?v=0WC-tD-njcA">
                            <i className="fas fa-play" />
                          </a>
                        </div>
                      </div>
                      <div className="banner-four-pagination" />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Banner Area End */}
    </section>
  );
};

export default HomeBanner;
