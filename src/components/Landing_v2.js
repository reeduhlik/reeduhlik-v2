import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Links from "./Links";

const Landing = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp" duration={1000}>
      <div className="landing">
        <img
          src="/assets/icons/bg-left.svg"
          alt=""
          className="landing-svg-corner"
        />
        <div className="container">
          <div className="landing-btns">
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              duration={1000}
              delay={1000}>
              <a href="#" className="btn-contact">
                <p>My Resume</p>
                <img src="/assets/icons/download.svg" alt="" />
              </a>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              duration={1000}
              delay={1000}>
              <a
                href="mailto: reeduhlik@gmail.com"
                className="btn-contact btn-contact-2">
                <p>Contact Me</p>
                <img src="/assets/icons/arrow-right.svg" alt="" />
              </a>
            </AnimationOnScroll>
          </div>
          <div className="landing-content">
            <div className="landing-content-left">
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                duration={1000}
                delay={1000}>
                <h1 className="landing-title">REED UHLIK</h1>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__fadeInUp"
                duration={1000}
                delay={1000}>
                <h3 className="landing-subtitle">
                  Web Developer / UI Designer
                </h3>
                <hr />
              </AnimationOnScroll>

              <AnimationOnScroll
                animateIn="animate__fadeInLeft"
                duration={1000}
                delay={1000}>
                <p className="landing-text">
                  I’m a sophomore at Georgetown University studying Computer
                  Science and economics. I enjoy developing software with
                  practical applications.
                </p>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__fadeInLeft"
                duration={1000}
                delay={2000}>
                <Links />
              </AnimationOnScroll>
            </div>
            <div className="landing-content-right">
              <AnimationOnScroll
                animateIn="animate__zoomIn"
                duration={1500}
                delay={1000}>
                <img src="/assets/landing.svg" alt="" />
              </AnimationOnScroll>
            </div>
          </div>
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={2500}>
            <div className="scroll-down">
              <p className="scroll-down-text">My Portfolio</p>
              <p className="scroll-down-icon">
                <FontAwesomeIcon icon={faChevronDown} />
              </p>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Landing;
