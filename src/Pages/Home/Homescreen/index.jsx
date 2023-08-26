import HeroSection from "../HeroSection";


import React from 'react'
import MySkills from "../MySkills";
import About from "../About";
import MyPortfolio from "../MyPortfolio";
import Footer from "../Footer";
import ContactMe from "../ContactMe";
import Testimonials from "../Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection/>
      {/* <MySkills/> */}
      
      <About/>
      
      <MyPortfolio/>
      <Testimonials/>
      <ContactMe/>
      <Footer/>
      
      
    </>
  )
}
