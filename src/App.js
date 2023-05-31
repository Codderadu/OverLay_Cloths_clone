
import {Route,Routes}from "react-router-dom" 
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Navbar_pages/Home/Home";
import ShopAll from "./Navbar_pages/shop_all/Shop_all";
import ShopMen from "./Navbar_pages/shop_men/Shop_men";
import ShopWomen from "./Navbar_pages/shop_women/Shop_women";
import GetInTouch from "./Navbar_pages/Get_in_touch/Get_in_touch";
import Productpromise from "./components/ProductPromise/Productpromise";
import Login from "./Navbar_pages/Login/Login";
import Singup from "./Navbar_pages/Singup/Singup";

function App() {
  return (
   <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/all-products" element={<ShopAll/>}/>
        <Route path="/mens" element={<ShopMen/>}/>
        <Route path="/women" element={<ShopWomen/>}/>
        <Route path="/get-in-touch" element={<GetInTouch/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Singup/>}/>
      </Routes>
      <Productpromise/>
    <Footer/>
    </>
  );
}

export default App;
