import React from "react";
import "./Shop_men.scss"
import product_img from "../../assets/Untitled-1_0119_124_jpg.webp"

function Shop_men() {
  return <div className="Shop_men">              
          <h1>Men's</h1>
          <div className="container">
            <div className="filter-section">
              <h2>Filters  </h2>
              <hr />
              <h3>Prices</h3>
              <hr />
              <h3>Product types</h3>
              <hr />
              <h3>size</h3>
                   

            </div>

            <div className="right-side">
            
            <div className="filter">
                <p>44 products</p>
                <p>Sort by Featured</p>
              </div>
           
            <div className="all-products">
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
          </div>
          </div>
    
  </div>;
}

export default Shop_men;
