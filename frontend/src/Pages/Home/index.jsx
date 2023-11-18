import React from 'react'
import Header from '../../Layouts/Header/Header'
import HomeBanner from './HomeBanner/HomeBanner'
import AboutCompany from './AboutCompany/AboutCompany'
import HeadingTitle from '../../Components/HeadingTitle/HeadingTitle'
import OurSolution from './OurSolution/OurSolution'
import DigitalSolution from './DigitalSolution/DigitalSolution'
import Footer from '../../Layouts/Footer/Footer'


function Home() {
  return (
    <>
     <HeadingTitle pageTitle="HOME" />
      <Header/>
      <main className='home_main'>
        <HomeBanner/>
        <AboutCompany/>
        <OurSolution/>
        <DigitalSolution/>
        <Footer/>

      </main>
    </>
  )
}

export default Home