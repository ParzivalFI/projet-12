import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__social">
          <a
            href="https://github.com/ParzivalFI"
            className="home__social-icon"
            target="_blank"
          >
            <i class="uil uil-github"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; © 2025 Ryan, Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
