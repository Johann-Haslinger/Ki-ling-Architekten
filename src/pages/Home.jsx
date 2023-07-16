import React from 'react'
import HeroSection from '../components/HomeSections/HeroSection'
import Navbar from '../components/Navbar'
import ValueSection from '../components/HomeSections/ValueSection'

const Home = () => {
  return (
    <div className='pb-40'>
      <Navbar s={"Kißling Architekten"} />
      <HeroSection/>
      <ValueSection/>
    </div>
  )
}

export default Home