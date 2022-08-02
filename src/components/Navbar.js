import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <p>Younes</p>
      </NavLink>

      <ul className="menu">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>
            <span>About</span>
          </li>
        </NavLink>

        <NavLink
          to="/works"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>
            <span>Works</span>
          </li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <li>
            <span>Contact</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
