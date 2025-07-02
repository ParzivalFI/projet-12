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
              <a href="#home" className="nav__link active-link">
                <i className="bx bx-home nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="bx bx-user nav__icon"></i> Profil
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="bx bx-home nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="bx bx-home nav__icon"></i> Portfolio
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
            onclick={() => setToggle(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onclick={() => setToggle(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
