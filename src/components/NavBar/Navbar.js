import React, { useState } from "react";
import Cart from "../Cart/Cart"
import {Link, useNavigate} from "react-router-dom"
import image_logo from "../../assets/logo2_150x.png"
import {HiOutlineMail} from "react-icons/hi"
import {BiSearch} from "react-icons/bi"
import {BsPersonPlus} from "react-icons/bs"
import {CgShoppingBag} from "react-icons/cg"
import "./Navbar.scss"

function Navbar() {
  const nevigate=useNavigate();
  const [openCart,setOpenCart]=useState(false);
  return <div className="Navbar">
        <div className="NavContainer">
         <div className="left-nav">
            <ul>
              
              <li><Link className="ancker-tag" to="/">Home</Link></li>
              <li><Link className="ancker-tag"   to="/all-products"> Shop All </Link></li>
              <li ><Link className="ancker-tag"   to="/mens">Shop Men </Link> </li>
              <li> <Link className="ancker-tag"  to="/women">Shop Women  </Link> </li>
              <li> <Link className="ancker-tag"  to="/get-in-touch"> Get in Touch! </Link></li>
            </ul>
         </div>
         < div onClick={()=>nevigate("/")} className="middle-nav">
            
            <img src={image_logo} alt="logo" />
            
         </div>
         <div className="right-nav">
            <div className="icons">
              <HiOutlineMail  className="icons-logo"/>
              <BiSearch className="icons-logo"/>
              <BsPersonPlus onClick={()=>nevigate("/login")} className="icons-logo"/>
              <div className="nav-cart" onClick={()=>setOpenCart(!openCart)}>
              <CgShoppingBag className="icons-logo"/>
              <span className="count">6</span>
              </div>
            </div>
         </div>

        </div>

        { openCart  && <Cart  onClose={()=>setOpenCart(false)}/>}
  </div>;
} 
// 

export default Navbar;
