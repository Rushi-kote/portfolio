import React, { useState } from "react";
import "./../Styles/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
// import { Button } from "react-scroll";

const About = () => {

  const [DynamicClassName,setDynamicClassName] = useState("more");

  const changeClassName = ()=>{
    setDynamicClassName("moreDisplay");
    let button = document.getElementsByClassName("more-trigger");
    button[0].style.display = 'none';
  }

  return (
    <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main">About Me</span>
          <span class="heading-sec__sub">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title">Get to know me!</h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                I'm a <strong>Fullstack Web Developer</strong> building the
                Front-end and Back-end of Websites and Web Applications that
                leads to the success of the overall product. Check out some of
                my work in the
                <strong>Projects</strong> section.
              </p>

              <p class="about__content-details-para">
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to
                <strong>contact</strong> me.
              </p>
            </div>
            <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr">
              Contact
            </a>
          </div>
          <div class="about__content-skills">
            <h3 class="about__content-title">My Skills</h3>
            <div class="skills">
              <div class="skills__skill">HTML</div>
              <div class="skills__skill">CSS</div>
              <div class="skills__skill">JavaScript</div>
              <div class="skills__skill">NodeJS</div>
              <div class="skills__skill">ExpressJS</div>
              <div class="skills__skill">ReactJs</div>
              <div class="skills__skill">GIT</div>
              <div class="skills__skill">Core Java</div>
            </div>
          </div>
        </div>
        <div class=" timeline-container">
          <h3 className="about__content-title">Experience</h3>
          <div class="timeliner timeline-block">
            <div class="timeline-icon">
              <FontAwesomeIcon className="Icon" icon={faBriefcase} />
            </div>

            <div class="timeline-content">
              <button onClick={changeClassName} className="more-trigger">
                <i class="fa fa-chevron-down"></i>
              </button>
              <h2>Associate</h2>
              {/* <span class="text-muted">React JS Specialist</span> */}
              <div className={DynamicClassName}>
                <p>
                  <ul>
                    <li>1 year of work experience in ReactJS, NodeJs</li>
                    <li>In frontend, Resolved bugs, Added features to the existing</li>
                    <li>Used databases like MongoDB, MySql</li>
                    <li>Work experience on Planning tool like Rapid Response.</li>
                    <li>Created and run the unit and user acceptance tests cases.</li>
                    <li>Resolved critical bugs.</li>
                    <li>Maintained the functional specification documents.</li>
                  </ul>
                </p>
              </div>
              <span class="cd-date">Jan 2021 - Present</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
