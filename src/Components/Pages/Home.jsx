import React from "react";
import "./../Styles/Home.css";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <>
      <section className="home-hero" id="hero">
        <div class="home-hero__content">
          <h1 class="heading-primary">Hey, I'm Rushikesh kote</h1>
          <div class="home-hero__info">
            <p class="text-primary">
              A Fullstack focused Web Developer building the Frontend and
              Backend of Websites and Web Applications that leads to the success
              of the overall product
            </p>
          </div>
          <div class="home-hero__cta">
            <Link
                  activeClass="active"
                  className="btn btn--bg hover"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
            </Link>
          </div>
        </div>
        <div class="home-hero__socials">
          <div class="home-hero__social">
            <a
              href="https://linkedin.com/in/rushi-kote"
              class="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
                alt="Ram Maheshwari Linkedin Profile"
                class="home-hero__social-icon"
              />
            </a>
          </div>
          <div class="home-hero__social">
            <a
              href="https://github.com/rushi-kote"
              class="home-hero__social-icon-link"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
                alt="RammCodes Github Profile"
                class="home-hero__social-icon"
              />
            </a>
          </div>
        </div>
        <div className="home-hero__mouse-scroll-cont">
          <div className="mouse"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
