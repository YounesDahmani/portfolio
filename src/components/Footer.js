import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="footer-text">
        <h2>Let's work together.</h2>
        <p>I'm ready for new adventures !</p>
        <NavLink to="/contact">
          <Button content="SAY HELLO" />
        </NavLink>
      </div>
      <div className="credits">
        <p>Younes Dahmani © 2022. Tous droits réservés.</p>
        <ul>
          <li>
            <a
              href="https://github.com/YounesDahmani"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/younes-dahmani-135610137/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/YounesDevJr"
              target="_blank"
              rel="noreferrer noopener"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
