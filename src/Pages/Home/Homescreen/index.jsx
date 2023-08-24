import HeroSection from "../HeroSection";


import React from 'react'
import MySkills from "../MySkills";
import About from "../About";
import MyPortfolio from "../MyPortfolio";
import Footer from "../Footer";
import ContactMe from "../ContactMe";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <MySkills/>
      <About/>
      <MyPortfolio/>
      <ContactMe/>
      <Footer/>
      
    </>
  )
}
