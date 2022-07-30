import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="footer-text">
        <h2>Let's work together.</h2>
        <p>I'm ready for new adventures !</p>

        <Button content="SAY HELLO" />
      </div>
      <div className="credits">
        <p>Younes Dahmani © 2022. Tous droits réservés.</p>
        <ul>
          <li>
            <i class="fa-brands fa-github"></i>
          </li>
          <li>
            <i class="fa-brands fa-linkedin"></i>
          </li>
          <li>
            <i class="fa-brands fa-twitter"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
