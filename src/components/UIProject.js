import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Project = (props) => (
  <div className="portfolio-project">
    <div className="portfolio-project-container">
      <img className="portfolio-project-image" src={props.project.img} />
      <div className="portfolio-project-title-container">
        <div>
          <h2 className="portfolio-project-title">{props.project.title}</h2>
          <h4 className="portfolio-project-subtitle">
            {props.project.subtitle}
          </h4>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
