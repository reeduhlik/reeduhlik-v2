import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { useState } from "react";

const Project = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
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
        {isOpen && (
          <div>
            <div className="portfolio-project-languages">
              {props.project.languages.map((lang) => (
                <div className="portfolio-project-language">{lang}</div>
              ))}
            </div>

            <p className="portfolio-project-description">
              {props.project.description}
            </p>
          </div>
        )}
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
  );
};

export default Project;
