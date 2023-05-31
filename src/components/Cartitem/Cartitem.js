import React from "react";
import "./CartItem.scss"
import {AiOutlineClose}from "react-icons/ai"
import productImg from "../../assets/Untitled-1_0119_124_jpg.webp"

function Cartitem() {
    return <div className="Cartitem">
    <div className=" item-img">
      <img src={productImg} alt="" />
    </div>
      <div className="item-info-wrapper">
    <div className="titem-info">
      <p className="title">Serpent Oversized Sweatshirt - Amber</p>
      <p className="price">₹ 1,249.00</p>
      <div className="quantity-selector">
        <span className="btn deecreament">-</span>
        <span className="quantity">2</span>
        <span className="btn increament" >+</span>
      </div>
      <p className="total-price"> ₹ 1200</p>
    </div>
    <div className="item-remove">
     <AiOutlineClose/> 
    </div>
    </div>
</div>;
}

export default Cartitem;
