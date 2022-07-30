import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <p>Younes</p>
      </NavLink>

      <ul className="menu">
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>
            <span>About</span>
          </li>
        </NavLink>
        <NavLink
          to="/works"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>
            <span>Works</span>
          </li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
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
