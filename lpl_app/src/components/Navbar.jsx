import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <div className="navbar-logo">
        <img src="./LOGO.PNG" alt="LPL Financial Logo" />
      </div>

      {/* Right-side navigation links */}
      <ul className="navbar-links">
        <li><a href="#advisors">Advisors</a></li>
        <li><a href="#institutions">Institutions</a></li>
        <li><a href="#investors">Investors</a></li>
        <li><a href="#about">About LPL</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
