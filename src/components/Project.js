import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Project = (props) => (
  <AnimationOnScroll animateIn="animate__fadeIn" duration={1000}>
    <div className="portfolio-project">
      <div className="portfolio-project-container">
        <img className="portfolio-project-image" src={props.project.img} />
        <h2 className="portfolio-project-title">{props.project.title}</h2>
        <h4 className="portfolio-project-subtitle">{props.project.subtitle}</h4>
        <p className="portfolio-project-description">
          {props.project.description}
        </p>
        <div className="portfolio-project-languages">
          {props.project.languages.map((lang) => (
            <div className="portfolio-project-language">{lang}</div>
          ))}
        </div>
        <div className="portfolio-project-buttons">
          {props.project.github != "#" && (
            <div className="portfolio-project-button">
              <FontAwesomeIcon icon={faGithub} />
              <a target="_blank" href={props.project.github}>
                View Code
              </a>
            </div>
          )}
          {props.project.demo != "#" && (
            <div className="portfolio-project-button">
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
              <a target="_blank" href={props.project.demo}>
                Live Demo
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  </AnimationOnScroll>
);

export default Project;
