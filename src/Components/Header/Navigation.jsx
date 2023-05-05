import React from "react";
import "./../Styles/Navigation.css";
import logo from "./../Assets/logo.jpeg";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div>
      <header className="header">
        <div className="header__content">
          <div className="header__logo-container">
            <div className="header__logo-img-cont">
              <img
                src={logo}
                alt="Rushikesh Kote"
                className="header__logo-img"
              />
            </div>
            <span className="header__logo-sub">Rushikesh Kote</span>
          </div>
          <div class="header__main">
            <ul class="header__links">
              <li class="header__link-wrapper">
              <Link
                  activeClass="active"
                  className="header__link"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                HOME
                </Link>
              </li>
              <li class="header__link-wrapper">
                {/* <a href="./#about" class="header__link">
                  About
                </a> */}
                {/* <Link to="./about" /> */}
                <Link
                  activeClass="active"
                  className="header__link"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  about
                </Link>
              </li>
              <li class="header__link-wrapper">
              <Link
                  activeClass="active"
                  className="header__link"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  projects
                </Link>
              </li>
              <li class="header__link-wrapper">
                <a href="./#contact" class="header__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
