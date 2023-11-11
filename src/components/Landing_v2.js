import React from "react";

import "animate.css/animate.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Links from "./Links";

const Landing = () => {
  return (
    <div className="landing">
      <img
        src="/assets/icons/bg-left.svg"
        alt=""
        className="landing-svg-corner"
      />
      <div className="container">
        <div className="landing-btns">
          <a
            href="https://drive.google.com/file/d/1Qk1ZvWSejKJh8tdzN8Zs-9mDwFJn3wlq/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn-contact">
            <p>My Resume</p>
            <img src="/assets/icons/download.svg" alt="" />
          </a>
          <a
            href="mailto: reeduhlik@gmail.com"
            className="btn-contact btn-contact-2">
            <p>Contact Me</p>
            <img src="/assets/icons/arrow-right.svg" alt="" />
          </a>
        </div>
        <div className="landing-content">
          <div className="landing-content-left">
            <h1 className="landing-title">REED UHLIK</h1>
            <h3 className="landing-subtitle">
              Software Engineer / UI Designer
            </h3>
            <hr />

            <p className="landing-text">
              I’m a junior at Georgetown University pursuing degrees in Computer
              Science, Economics, and Mathematics. I enjoy developing software
              with practical applications.
            </p>
            <Links />
          </div>
          <div className="landing-content-right">
            <img src="/assets/landing.svg" alt="" />
          </div>
        </div>
        <div className="scroll-down">
          <p className="scroll-down-text">My Portfolio</p>
          <p className="scroll-down-icon">
            <FontAwesomeIcon icon={faChevronDown} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
