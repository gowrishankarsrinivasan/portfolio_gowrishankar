import React from "react";
import "../CssComponent/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">
        <span style={{color:"#64ffda"}}>G</span>owri Shankar
      </a>
      <div className="navbar-menu">
        <a href="#" className="navbar-item">
          Home
        </a>
        <a href="#" className="navbar-item">
          About
        </a>
        <a href="#" className="navbar-item">
          Skills
        </a>
        <a href="#" className="navbar-item">
          Project
        </a>
        <a href="#" className="navbar-item">
          GitHub
        </a>
        <a href="#" className="navbar-item">
          Contact
        </a>
      </div>
      <div >
        <button className="button">Resume</button>
      </div>
    </nav>
  );
};

export default Navbar;
