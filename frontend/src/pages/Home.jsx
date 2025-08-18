import React from 'react'
import Navbar from '../shared/Navbar'
import HeroSection from '../src/components/HeroSection'
import Specialities from '../src/components/Specialities '
import Footer from '../src/components/Footer'
import Catagorycomponent from '../src/components/Catagorycomponent'

const Home = () => {
  return (
     <>
     <Navbar/>
     <HeroSection/>
     <Specialities/>
     <Catagorycomponent/>
     <Footer/>
     </>
  )
}

export default Home
