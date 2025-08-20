import React from 'react'
import Navbar from '../shared/Navbar'
import HeroSection from '../components/HeroSection'
import Specialities from '../components/Specialities '
import Footer from '../components/Footer'
import Catagorycomponent from '../components/Catagorycomponent'
import CatagoryCorouscomponent from '../components/CatagoryCorouscomponent'

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
