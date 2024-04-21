import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        <img src={logo} alt="Logo" className="logo" />
      </NavLink>
      <h1>Annagy's Recipes</h1>
    </nav>
  );
}

export default Navbar;
