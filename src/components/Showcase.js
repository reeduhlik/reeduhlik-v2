import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Showcase = (props) => {
  return (
    <div className="showcase">
      <div className="showcase-content">
        <div className="showcase-content-left">
          <h1 className="showcase-title">{props.title}</h1>
          <h3 className="showcase-subtitle">Featured Project | {props.year}</h3>

          <div className="showcase-languages">
            {props.languages.map((lang) => (
              <div className="showcase-language">{lang}</div>
            ))}
          </div>
          <p className="showcase-text">{props.info}</p>
          {props.websiteLink != "#" && (
            <a href={props.websiteLink} className="btn-showcase">
              <p>Visit Website</p>
              <img src="/assets/icons/arrow-right.svg" alt="" />
            </a>
          )}
        </div>
        <div className="showcase-content-right">
          <img src={props.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
