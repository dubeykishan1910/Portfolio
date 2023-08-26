import React from 'react'
import data from "../../data/index.json";

export default function HeroSection() {
  
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Kishan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Web </span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Looking for an entry-level position in an
          organization where my knowledge and skills will
          be utilized for achieving the company’s goals
          while also ensuring my personal growth
          </p>
        </div>
        


        {/* making download link */}


        {
        data?.resum?.map((item, index) => (
          <div key={index}>
          

        <a href={item.href } download={item.download} target='_blank' ><button className="btn btn-primary">DOWNLOAD CV</button></a>
        
        </div>
        
        ))}
        



      </div>
      <div className="hero--section--img">
        <img src="./img/g1.png" alt="Hero Section" />
      </div>
    </section>
  )
}
