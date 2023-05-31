import React from "react";
import "./Singup.scss"
import {Link} from "react-router-dom"

function Singup() {
    return <div className="Singup">              
    <h1>Register</h1>
    <p>Please fill in the fields below:</p>
    <div className="container">
    <form > 
        <input type="name" placeholder="First name" />
        <input type="name" placeholder="Last name" />
        <input type="email" placeholder="E-Mail" />
        <input type="text" placeholder="PassWord" />
        <button>LOGIN</button>
    </form>
    </div>
    <div className="register"><p>Already have an account? <Link to={"/login"}>Login</Link></p>
      
    </div>
    </div>
}

export default Singup;
