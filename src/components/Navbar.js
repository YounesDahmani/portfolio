import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <NavLink to="/">
        <p>Younes</p>
      </NavLink>

      <ul className={`menu ${showLinks ? "show-nav" : "hide-nav"}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li className="navbar-item">
            <span>Home</span>
          </li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li className="navbar-item">
            <span>About</span>
          </li>
        </NavLink>

        <NavLink
          to="/works"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li className="navbar-item">
            <span>Works</span>
          </li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li className="navbar-item">
            <span>Contact</span>
          </li>
        </NavLink>
      </ul>
      <button className="navbar-burger" onClick={handleShowLinks}>
        <span
          className={`burger-bar ${showLinks ? "cross-burger" : "hide-nav"} `}
        ></span>
      </button>
    </div>
  );
};

export default Navbar;
