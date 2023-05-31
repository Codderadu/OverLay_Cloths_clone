
import {BrowserRouter,Route,Routes}from "react-router-dom" 
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Navbar_pages/Home/Home";
import Shop_all from "./Navbar_pages/shop_all/Shop_all";
import Shop_men from "./Navbar_pages/shop_men/Shop_men";
import Shop_women from "./Navbar_pages/shop_women/Shop_women";
import Get_in_touch from "./Navbar_pages/Get_in_touch/Get_in_touch";
import Productpromise from "./components/ProductPromise/Productpromise";
import Login from "./Navbar_pages/Login/Login";
import Singup from "./Navbar_pages/Singup/Singup";

function App() {
  return (
   <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/all-products" element={<Shop_all/>}/>
        <Route path="/mens" element={<Shop_men/>}/>
        <Route path="/women" element={<Shop_women/>}/>
        <Route path="/get-in-touch" element={<Get_in_touch/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Singup/>}/>
      </Routes>
      <Productpromise/>
    <Footer/>
    </>
  );
}

export default App;
