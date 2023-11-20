import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HomeBanner.scss";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import banner2 from "../../../Assets/Images/banner/b2.jpg";
import banner1 from "../../../Assets/Images/banner/b1.jpg";
import { TypeAnimation } from "react-type-animation";

const HomeBanner = () => {
  const divStyle = {
    // backgroundImage: 'url("../../../Assets/Images/banner/banner-1.jpg")',
    backgroundColor: "black",
  };

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
            <div
              className="banner__one-image swiper-slide"
              data-background={banner1}
              style={divStyle}
            >
              <div class="box">
                <div class="wave -one"></div>
                <div class="wave -two"></div>
                <div class="wave -three"></div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="banner__one-content style_backHead">
                      <span data-animation="fadeInUp" data-delay=".4s">
                        Welcome to NexusBeans
                      </span>
                        {/* Business consulting advice */}
                        <TypeAnimation data-animation="fadeInUp" data-delay=".7s"
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
                          <a className="btn-one" href="about.html">
                            Read More
                            <i className="far fa-chevron-double-right" />
                          </a>
                        </div>
                        <div className="banner__one-content-video-icon">
                          <a
                            className="video-popup"
                            href="https://www.youtube.com/watch?v=0WC-tD-njcA"
                          >
                            <i className="fas fa-play" />
                          </a>
                        </div>
                      </div>
                      <div className="banner-four-pagination" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="banner__one-image swiper-slide"
              data-background={banner2}
              style={divStyle}
            >
              <div class="box">
                <div class="wave -one"></div>
                <div class="wave -two"></div>
                <div class="wave -three"></div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="banner__one-content style_backHead">
                      <span data-animation="fadeInUp" data-delay=".4s">
                        Welcome to NexusBeans
                      </span>
                
                      <TypeAnimation data-animation="fadeInUp" data-delay=".7s"
                          sequence={[" Inspire experience program", 1000]}
                          wrapper="h1"
                          speed={50}
                          repeat={Infinity}
                        />
                      
                      <div
                        className="banner__one-content-button"
                        data-animation="fadeInUp"
                        data-delay="1s"
                      >
                        <div className="banner__one-content-button-item">
                          <a className="btn-one" href="about.html">
                            Read More
                            <i className="far fa-chevron-double-right" />
                          </a>
                        </div>
                        <div className="banner__one-content-video-icon">
                          <a
                            className="video-popup"
                            href="https://www.youtube.com/watch?v=0WC-tD-njcA"
                          >
                            <i className="fas fa-play" />
                          </a>
                        </div>
                      </div>
                      <div className="banner-four-pagination" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Banner Area End */}
    </section>
  );
};

export default HomeBanner;
