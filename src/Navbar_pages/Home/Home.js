import React from "react";
import "./Home.scss"
import Hero from "../../components/Hero/Hero";
import product_img from "../../assets/CopyofDSC01257.webp"
import product_img2 from "../../assets/DSC01990_2.webp"
import { useNavigate } from "react-router-dom";
import Hero2 from "../../components/Hero2/Hero2";
import Hero3 from "../../components/Hero3/Hero3";
function Home() {
  const negate =useNavigate();
  return <div className="Home">
    <Hero/>
      <div className="home-product">
          <div className="container">
              <div className="image-detail">
                <img src={product_img} alt="" />
                <div className="detail"> 
                <p>Regular Fit Free Spirit Raglan Tshirt- Dark Grey</p>
                <p>₹ 799.00</p>
                </div>
              </div>

              <div className="image-detail">
                <img src={product_img} alt="" />
                <div className="detail"> 
                <p>Regular Fit Free Spirit Raglan Tshirt- Dark Grey</p>
                <p>₹ 799.00</p>
                </div>
              </div>

              <div className="image-detail">
                <img src={product_img} alt="" />
                <div className="detail"> 
                <p>Regular Fit Free Spirit Raglan Tshirt- Dark Grey</p>
                <p>₹ 799.00</p>
                </div>
              </div>

              <div className="image-detail">
                <img src={product_img} alt="" />
                <div className="detail"> 
                <p>Regular Fit Free Spirit Raglan Tshirt- Dark Grey</p>
                <p>₹ 799.00</p>
                </div>
              </div>


          </div>
                 
                 <div className="shop-more-button">
                  <button onClick={()=>negate("/all-products")}>SHOW MORE</button>
                 </div>
        </div> 
     <Hero2/>

     <div className="home-product">
          <div className="container">
              <div className="image-detail">
                <img src={product_img2} alt="" />
                <div className="detail"> 
                <p>Regular Fit Free Spirit Raglan Tshirt- Dark Grey</p>
                <p>₹ 799.00</p>
                </div>
              </div>

              <div className="image-detail">
                <img src={product_img2} alt="" />
                <div className="detail"> 
                <p>Regular Fit Free Spirit Raglan Tshirt- Dark Grey</p>
                <p>₹ 799.00</p>
                </div>
              </div>

              <div className="image-detail">
                <img src={product_img2} alt="" />
                <div className="detail"> 
                <p>Regular Fit Free Spirit Raglan Tshirt- Dark Grey</p>
                <p>₹ 799.00</p>
                </div>
              </div>

              <div className="image-detail">
                <img src={product_img2} alt="" />
                <div className="detail"> 
                <p>Regular Fit Free Spirit Raglan Tshirt- Dark Grey</p>
                <p>₹ 799.00</p>
                </div>
              </div>

              <div className="image-detail">
                <img src={product_img2} alt="" />
                <div className="detail"> 
                <p>Regular Fit Free Spirit Raglan Tshirt- Dark Grey</p>
                <p>₹ 799.00</p>
                </div>
              </div>

              <div className="image-detail">
                <img src={product_img2} alt="" />
                <div className="detail"> 
                <p>Regular Fit Free Spirit Raglan Tshirt- Dark Grey</p>
                <p>₹ 799.00</p>
                </div>
              </div>
              </div>
              </div>

              <Hero3/>

  </div>;
}

export default Home;
