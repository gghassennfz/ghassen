import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./NavBar";


import "../styles/navbar.css";




const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
