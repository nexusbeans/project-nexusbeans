import React from 'react'
import arrow1 from '../../../Assets/Images/icon/arrow-1.png'
import arrow1dark from '../../../Assets/Images/icon/arrow-1-dark.png'
import arrow2 from '../../../Assets/Images/icon/arrow-2.png'
import arrow2dark from '../../../Assets/Images/icon/arrow-2-dark.png'
import './OurProcess.scss'


const OurProcess = () => {
  return (
<section className=' process_section'>
  {/* Wark Area Start */}
  <div class="wrapper">
  <div class="box">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
  <div className="work__area section-padding">
    <div className="container">
      <div className="row mb-70">
        <div className="col-xl-12">
          <div className="work__area-title t-center">
            <span className="subtitle-one">Work Process</span>
            <h2>Our Solution Process</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-sm-6 sm-mb-30"  data-aos="fade-up">
          <div className="work__area-item">
            <span>01</span>
            <h6>Explore Your Vision</h6>
            <p>Unveiling Possibilities for Your Online Presence</p>
            <img
              className="work__area-item-arrow sm-display-n dark-n"
              src={arrow1}
              alt=""
            />
            <img
              className="work__area-item-arrow sm-display-n light-n"
              src={arrow1dark}
              alt=""
            />
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 sm-mb-30"  data-aos="fade-up">
          <div className="work__area-item">
            <span>02</span>
            <h6>Design Your Digital Space</h6>
            <p>Crafting a Unique Online Identity</p>
            <img
              className="work__area-item-arrow xl-display-n dark-n"
              src={arrow2}
              alt=""
            />
            <img
              className="work__area-item-arrow xl-display-n light-n"
              src={arrow2dark}
              alt=""
            />
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 sm-mb-30"  data-aos="fade-up"> 
          <div className="work__area-item">
            <span>03</span>
            <h6>Develop with Precision</h6>
            <p>Turning Vision into Functionality</p>
            <img
              className="work__area-item-arrow xl-display-n dark-n"
              src={arrow1}
              alt=""
            />
            <img
              className="work__area-item-arrow xl-display-n light-n"
              src={arrow1dark}
              alt=""
            />
            <img
              className="work__area-item-arrow display-n xl-display-b sm-display-n dark-n"
              src="assets/img/icon/arrow-2.png"
              alt=""
            />
            <img
              className="work__area-item-arrow display-n xl-display-b sm-display-n light-n"
              src="assets/img/icon/arrow-2-dark.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 sm-mb-30" data-aos="fade-up">
          <div className="work__area-item">
            <span>04</span>
            <h6>Launch and Beyond</h6>
            <p>Unveiling Your Digital Presence</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Wark Area End */}
</section>

  )
}

export default OurProcess