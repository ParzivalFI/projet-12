import React, { useState } from "react";
import "./header.css";

const Header = () => {
  // toggle menu
  const [Toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Ryan
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#profil" className="nav__link">
                <i className="bx bx-user nav__icon"></i> Profil
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="bx bx-home nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className="nav__link">
                <i className="bx bx-home nav__icon"></i> Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#projet" className="nav__link">
                <i className="bx bx-home nav__icon"></i> Projet
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="bx bx-home nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => setToggle(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => setToggle(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
