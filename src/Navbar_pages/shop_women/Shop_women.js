import React from "react";
import product_img from "../../assets/DSC01002.webp"
import "./Shop_women.scss"

function Shop_women() {
  return <div className="Shop_women">              
          <h1>Women's</h1>
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

export default Shop_women;
