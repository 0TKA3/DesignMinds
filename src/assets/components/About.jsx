import React from "react";
import aboutMainImage from '../images/work.png'

export default function About() {
  return (
    <div className="about">
      <div className="about__left-side">
        <h1>ABOUT</h1>
        <h2>
          A GLOBAL DIGITAL DESIGN STUDIO TRANSFORMING THE WAY PEOPLE ENGAGE WITH
          BRANDS.
        </h2>
      </div>
      <div className="about__right-side">
        <h3>
          We are a close-knit group of inquisitive individuals who produce work
          that fills us with pride for clients and brands we deeply admire.
          Fostering collaboration as the cornerstone of our endeavors, we
          discern the essential skills needed for each project and assemble a
          remarkable team to craft something truly exceptional. By integrating
          strategy, branding, web design, and development, we construct digital
          encounters that revolutionize the manner in which individuals connect
          and engage with brands.
        </h3>
        <button className="about__right-side__button">ABOUT US</button>
      </div>
      <div className="about__main-image">
        <img src={aboutMainImage} alt="#" />
      </div>
    </div>
  );
}
