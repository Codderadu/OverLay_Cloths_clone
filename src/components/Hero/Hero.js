import React from "react";
import hero_img1 from "../../assets/summer152kjbk.webp"
import hero_img2 from "../../assets/Overlays_web_Banner_unleash_1.webp"
import hero_img3 from "../../assets/Overlays_web_Banner_summer_1.webp"
import "./Hero.scss"

function Hero() {
  return <div className="Hero">
         <div className="hero-container">
           <img src={hero_img1} alt="" />
         </div>
  </div>;
}

export default Hero;
