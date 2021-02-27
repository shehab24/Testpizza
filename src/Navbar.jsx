import React from 'react'
import { Link } from "react-router-dom";
import Pic from "./img/menu.png";
import Pic1 from "./img/close.png";

function Navbar() {
  const menu_show=()=>{
    var ul= document.querySelector("ul");
    var img =document.querySelector(".menu_box");
     ul.classList.toggle("active");
  img.classList.toggle("active");
    }
    const removeNav=()=>{
      var ul =document.querySelector("ul");
      var menu =document.querySelector(".menu_box");
      ul.classList.remove("active");
      menu.classList.remove("active");
    }

    return (
        <>
<header >
<div className="header">
<div className="logo_box">
    <div className="logo">
    <h2  className="brand">Pizza <i className="fas fa-pizza-slice"></i></h2>
    
    </div>
    <div className="menu_box" onClick={menu_show} >
    </div>

    </div>
    <div className="navBar ">
        <ul >
            <li>
              <Link to="/Testpizza" onClick={removeNav} className="nav_link">
              Home
              </Link>
            </li>
            
            <li>
              <Link to="/Testpizza/about" onClick={removeNav} className="nav_link">
              About
              </Link>
            </li>
            
            <li>
              <Link to="/Testpizza/service" onClick={removeNav}  className="nav_link">
              Service
              </Link>
            </li>
            
            <li>
              <Link to="/Testpizza/contact" onClick={removeNav} className="nav_link">
              Contact
              </Link>
            </li>
            
        </ul>
    </div>
</div>
</header>


        </>
    )
}

export default Navbar;
