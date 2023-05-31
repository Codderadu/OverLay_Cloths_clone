import React from "react";
import {Link} from "react-router-dom"
import "./Footer.scss"
import {FaFacebookSquare} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"

function Footer() {
 

  return <div className="Footer">
      <div className="container">

        <div className="About_us">
          <h4>ABOUT US</h4>
          <p>
          Overlays is all about bringing a change - a positive change - into people's lives.
           <br />
          <Link to="/about_us" className="anker-tag">Learn More</Link>
          </p>
        </div>

        <div className="Polices">
          <h4>POLICIES</h4>
          <div className="All-polices">
          <Link className="anker-tag">Exchange/Return Your Order</Link>
          <Link className="anker-tag">Privacy Policy</Link>
          <Link className="anker-tag">Exchange and Refund Policy</Link>
          <Link className="anker-tag">Shipping Policy</Link>
          <Link className="anker-tag">Terms and Conditions</Link>
          <Link className="anker-tag">Fraud Protection</Link>
          </div>
        </div>
        
        <div className="NEWSLETTER">
          <h4>NEWSLETTER</h4>
         <p>Sign up to stay updated with new launches and cool offers.</p>
          
        <input type="email" placeholder="Your E-mail" />
          
          </div> 

           <div className="Follow_us">
            <h4>FOLLOW US</h4>
            <p>Stay in touch!</p>
            <div className="spocial-media">

              <div className="facebook media-icons" >
                 <Link className="ancker-tag" target="_blank" to={"http://www.google.com"}>
                  <FaFacebookSquare/>
                  </Link>
                  </div>

              <div className="tweeter media-icons"><  FaTwitterSquare/></div>
              <div className="instagram media-icons"> <  FaInstagramSquare/></div>
              <div className="youtube media-icons"><  FaYoutube/></div>
            </div>
           </div>
        
      </div>
    <p>Overlays Clothing
Powered by Shopify</p>
  </div>;
}

export default Footer;

