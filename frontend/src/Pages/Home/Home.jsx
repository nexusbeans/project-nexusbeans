import React from 'react'
import Header from '../../Layouts/Header/Header'
import HomeBanner from './HomeBanner/HomeBanner'


function Home() {
  return (
    <>
      <Header/>
      <main className='home_main'>
        <HomeBanner/>
      </main>
    </>
  )
}

export default Home