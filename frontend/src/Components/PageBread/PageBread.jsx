import React from 'react'
import './PageBread.scss'
import { Link } from 'react-router-dom'

const PageBread = ({backgroundText,mainHeading,backgroundImage,pageName}) => {
  return (
    <section>
      {/* Page Banner Area Start */}
      <div
        className="page__banner"
        data-background={backgroundImage}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-content">
                <span>{backgroundText}</span>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                    <span>|</span>
                  </li>
                  <li>{pageName}</li>
                </ul>
                <h1>{mainHeading}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Banner Area End */}
    </section>
  )
}

export default PageBread