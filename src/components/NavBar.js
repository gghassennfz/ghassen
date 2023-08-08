import React, { useState, useEffect } from "react";
import logo from "../images/covid.png";
import flag from "../images/flag.png";
import { Link } from "react-router-dom";



function Navbar() {
  const [activeLink, setActiveLink] = useState("/");

  // useEffect to update the active link when the route changes
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);


  return (
    <nav className="nav">
      <div className="logo">
        <img className="logoimg" src={logo} alt="Logo" />
        <h1 className="title">Gestion
        </h1>
      </div>
      
      <div className="navLinks">
        <ul>
          <li>
            <Link
              to="/"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => setActiveLink("/")}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={activeLink === "/about" ? "active" : ""}
              onClick={() => setActiveLink("/about")}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={activeLink === "/services" ? "active" : ""}
              onClick={() => setActiveLink("/services")}
            >
              SERVICES
            
            </Link>
          </li>
        </ul>
        
      </div>
      <div className="login-flag-container">
        <div className="login-sign-container">
          <div className="login-link">
            <Link to="/login">LOGIN</Link>
          </div>
          
        </div>
        <div className="flag-container">
          <img src={flag} alt="flag" className="flag" />
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
