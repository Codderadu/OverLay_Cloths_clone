import React from "react";
import "./Cart.scss"
import Cartitem from "../Cartitem/Cartitem";
import {AiOutlineClose} from "react-icons/ai"
import {CgShoppingBag} from "react-icons/cg"

function Cart({onClose}) {
  return <div className="Cart">
  <div className="overlay">
    <div className="cart-containt">
      <div className="heading">
        <div className="icons-heading">
      <CgShoppingBag className="icons"/> 
        <h3> 1 item</h3></div>
      <div
      onClick={onClose} 
      className="close-btn"> 
    <AiOutlineClose/></div>
      </div>
      <div className="cart-items">
          <Cartitem/>
      </div>
      </div>
      </div>
      </div>
}

export default Cart;
