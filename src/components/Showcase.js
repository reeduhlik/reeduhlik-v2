import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Showcase = (props) => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeft" duration={500}>
      <div className="showcase">
        <div className="showcase-content">
          <div className="showcase-content-left">
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              duration={1000}
              delay={1000}>
              <h1 className="showcase-title">{props.title}</h1>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              duration={1000}
              delay={1000}>
              <h3 className="showcase-subtitle">Featured Project | 2022</h3>
            </AnimationOnScroll>
            <div className="showcase-languages">
              {props.languages.map((lang) => (
                <AnimationOnScroll
                  animateIn="animate__zoomIn"
                  duration={1000}
                  delay={1000}>
                  <div className="showcase-language">{lang}</div>
                </AnimationOnScroll>
              ))}
            </div>
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              duration={1000}
              delay={1000}>
              <p className="showcase-text">{props.info}</p>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInLeft"
              duration={1000}
              delay={1000}>
              <a href={props.websiteLink} className="btn-showcase">
                <p>Visit Website</p>
                <img src="/assets/icons/arrow-right.svg" alt="" />
              </a>
            </AnimationOnScroll>
          </div>
          <div className="showcase-content-right">
            <AnimationOnScroll
              animateIn="animate__zoomIn"
              duration={1500}
              delay={1000}>
              <img src={props.image} alt="" />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Showcase;
