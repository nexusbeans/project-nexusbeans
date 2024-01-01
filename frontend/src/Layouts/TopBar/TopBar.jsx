import React from 'react'
import { Link } from 'react-router-dom'
import './TopBar.scss'
import { IoIosMail } from 'react-icons/io'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <>
          {/* Top Bar Start */}
          <div className="top__bar">
        <div className="container custom__container">
          <div className="row">
            <div className="col-xl-5 col-md-6">
              <div className="top__bar-left d-flex align-items-center">
                <i className="far fa-phone text-white" />
                <div className="phone_inner">
                <Link to="tel:917772007660">
                  IN +91 7772007660, 
                </Link>
                <Link to="tel:14094343519">
                    US +1 4094343519
                </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-md-6">
              <div className="top__bar-right">
                <Link to="mail:info@nexusbeans.com">
                  <i className="fas fa-envelope" />
                  info@nexusbeans.com
                </Link>
                <div className="top__bar-right-social">
                  <ul>
                    <li>
                      <Link to="#">
                      <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                      <FaXTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/company/nexusbeans?trk=similar-pages" target='_blank'>
                      <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link to="mailto:info@nexusbeans.com">
                      <IoIosMail />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Bar End */}
    </>
  )
}

export default TopBar