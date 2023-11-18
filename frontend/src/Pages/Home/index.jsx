import React from 'react'
import Header from '../../Layouts/Header/Header'
import HomeBanner from './HomeBanner/HomeBanner'
import AboutCompany from './AboutCompany/AboutCompany'
import HeadingTitle from '../../Components/HeadingTitle/HeadingTitle'


function Home() {
  return (
    <>
     <HeadingTitle pageTitle="HOME" />
      <Header/>
      <main className='home_main'>
        <HomeBanner/>
        <AboutCompany/>
      </main>
    </>
  )
}

export default Home