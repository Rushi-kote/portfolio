import React from 'react';
import EcommersImage from "./../Assets/EcommersProject.png";
import BlogAppImage from "../Assets/BlogApp.png";
import TodoListImage from "../Assets/ToDoList.png"
import "../Styles/Project.css";

const Project = () => {
  return (
<section id="projects" class="projects sec-pad">
    <div class="main-container">
      <h2 class="heading heading-sec heading-sec__mb-bg">
        <span class="heading-sec__main">Projects</span>
        <span class="heading-sec__sub">
          Here you will find some of the personal projects that I
          created for learning purpose.
        </span>
      </h2>
      <div class="projects__content">
        <div class="projects__row">
          <div class="projects__row-img-cont">
            <img src={EcommersImage} alt="Software Screenshot" class="projects__row-img" loading="lazy" />
          </div>
          <div class="projects__row-content">
            <h3 class="projects__row-content-title">IShop</h3>
            <p class="projects__row-content-desc">
              Ishop is an E-commers app where users can create their own profile and add item to cart or buy items online by doing payments online via any UPI apps.
            </p>
            <a class="btn btn--med btn--theme dynamicBgClr" rel="noreferrer" href="https://e-commers-react.netlify.app/" target="_blank">Open Link</a>
          </div>
        </div>
        <div class="projects__row">
          <div class="projects__row-img-cont">
            <img src={BlogAppImage} alt="Software Screenshot" class="projects__row-img" loading="lazy" />
          </div>
          <div class="projects__row-content">
            <h3 class="projects__row-content-title">Shiren</h3>
            <p class="projects__row-content-desc">
              Shiren is a Blog post app where admin can post the latest news related to Bollywood, Hollywood, Technology, Fitness &amp; Food.
            </p>
            <a class="btn btn--med btn--theme dynamicBgClr" rel="noreferrer" href="https://blog-app1-react.netlify.app/" target="_blank">Open Link</a>
          </div>
        </div>
        <div class="projects__row">
          <div class="projects__row-img-cont">
            <img src={TodoListImage} alt="Software Screenshot" class="projects__row-img" loading="lazy" />
          </div>
          <div class="projects__row-content">
            <h3 class="projects__row-content-title">ToDo List</h3>
            <p class="projects__row-content-desc">
                Todo List is a app build in JavaScript where user can add all task he needs to do. Under the task heading he can add multiple sub task in list. Upon complition of any task he can mark that perticular task as completed.
                once the task is completed a line through will appear on the text.
            </p>
            <a class="btn btn--med btn--theme dynamicBgClr" rel="noreferrer" href="https://e-commers-react.netlify.app/" target="_blank">Open Link</a>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default Project