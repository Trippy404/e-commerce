import React from "react";
import "./nav.css";
import { NavLink,Link } from "react-router";


export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="nav-list">
          <Link className="link" to="/home">
            <li>HOME</li>
          </Link>
          <Link className="link" to="/">
            <li>STORE</li>
          </Link>
          <Link className="link" to="/about">
            <li>ABOUT</li>
          </Link>
        </ul>
        <button className="btn">
          CART <span>0</span>
        </button>
      </nav>
    </div>
  );
}
