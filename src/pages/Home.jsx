import React from 'react'
import HeroSection from '../components/HomeSections/HeroSection'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar s={"Kißling Architekten"} />
      <HeroSection/>
    </div>
  )
}

export default Home