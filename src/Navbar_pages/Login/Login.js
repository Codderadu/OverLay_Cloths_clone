import React from "react";
import "./Login.scss"
import {Link} from "react-router-dom"

function Login() {
  return <div className="Login">              
  <h1>Login</h1>
  <p>Please enter your e-mail and password:</p>
  <div className="container">
  <form > 
      <input type="email" placeholder="E-Mail" />
      <input type="text" placeholder="PassWord" />
      <button>LOGIN</button>
  </form>
  </div>
  <div className="register"><p>New customer? <Link to={"/register"}>Create an account</Link></p>
    
  </div>
  </div>
}

export default Login;
