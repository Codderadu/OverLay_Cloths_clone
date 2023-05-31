import React from "react";
import hero_img1 from "../../assets/summer152kjbk.webp"
import "./Hero.scss"

function Hero() {
  return <div className="Hero">
         <div className="hero-container">
           <img src={hero_img1} alt="" />
         </div>
  </div>;
}

export default Hero;
