import React, { useState } from "react";
import "./../Styles/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
// import { Button } from "react-scroll";

const About = () => {

  const [DynamicClassNameExp,setDynamicClassNameExp] = useState("more");
  const [DynamicClassNameBE,setDynamicClassNameBE] = useState("more");
  const [DynamicClassNameXII,setDynamicClassNameXII] = useState("more");
  const [DynamicClassNameX,setDynamicClassNameX] = useState("more");

  const changeClassNameExp = ()=>{
    setDynamicClassNameExp("moreDisplay");
    let button = document.getElementsByClassName("more-trigger");
    button[0].style.display = 'none';
  }
  const changeClassNameBE = ()=>{
    setDynamicClassNameBE("moreDisplay");
    let button = document.getElementsByClassName("more-trigger");
    button[1].style.display = 'none';
  }
  const changeClassNameXII = ()=>{
    setDynamicClassNameXII("moreDisplay");
    let button = document.getElementsByClassName("more-trigger");
    button[2].style.display = 'none';
  }
  const changeClassNameX = ()=>{
    setDynamicClassNameX("moreDisplay");
    let button = document.getElementsByClassName("more-trigger");
    button[3].style.display = 'none';
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
              <button onClick={changeClassNameExp} className="more-trigger">
                <FontAwesomeIcon icon="faSolid fa-chevron-down" />
              </button>
              <h2>Associate</h2>
              {/* <span class="text-muted">React JS Specialist</span> */}
              <div className={DynamicClassNameExp}>
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
        <div class=" timeline-container ">
          <h3 className="about__content-title">Education</h3>
          <div class="timeliner timeline-block">
            <div class="timeline-icon">
               <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
            </div>
            <div class="timeline-content">
              <button onClick={changeClassNameBE} className="more-trigger">
                <i class="fa fa-chevron-down"></i>
                <FontAwesomeIcon icon="faSolid fa-chevron-down" />
              </button>
              <h2>BE in CSE</h2>
              {/* <span class="text-muted">React JS Specialist</span> */}
              <div className={DynamicClassNameBE}>
                <p>
                  <ul>
                    <li>I've completed my gratuation from <b>Amritvahini College of Engineering</b> in year 2020</li>
                    <li>with firstClass 7.59/10 CGPA </li>
                    <li>I've complete my BE in Computer Science Engineering</li>
                  </ul>
                </p>
              </div>
              <span class="cd-date">Jul 2016 - May 2020</span>
            </div>
          
          
            <div class="timeline-icon position">
              <FontAwesomeIcon icon="fa-solid fa-school" />
            </div>
            <div class="timeline-content">
              <button onClick={changeClassNameXII} className="more-trigger">
                <FontAwesomeIcon icon="faSolid fa-chevron-down" />
              </button>
              <h2>HSC (XII)</h2>
              {/* <span class="text-muted">React JS Specialist</span> */}
              <div className={DynamicClassNameXII}>
                <p>
                  <ul>
                    <li>I've completed my Higher Secondary school from <b>Rayreshwar Seconday and Higher Secondary School</b> in year 2016</li>
                    <li>with firstClass 68.30% </li>
                  </ul>
                </p>
              </div>
              <span class="cd-date">Jul 2015 - May 2016</span>
            </div>
          
          
            <div class="timeline-icon position">
              <FontAwesomeIcon icon="fa-solid fa-school" />
            </div>
            <div class="timeline-content">
              <button onClick={changeClassNameX} className="more-trigger">
                <FontAwesomeIcon icon="faSolid fa-chevron-down" />
              </button>
              <h2>SSC (X)</h2>
              {/* <span class="text-muted">React JS Specialist</span> */}
              <div className={DynamicClassNameX}>
                <p>
                  <ul>
                    <li>I've completed my Secondary school from <b>Rayreshwar Seconday and Higher Secondary School</b> in year 2014</li>
                    <li>with Distinction 89.60% </li>
                  </ul>
                </p>
              </div>
              <span class="cd-date">Jul 2013 - May 2014</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
