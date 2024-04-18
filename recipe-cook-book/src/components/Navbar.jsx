import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Annagy's Recipes</h1>
    </nav>
  );
}

export default Navbar;
