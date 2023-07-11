import React from "react";
import { useEffect, useRef, useState } from "react";
import UIProject from "./UIProject";
import WebProject from "./WebProject";

const Portfolio = () => {
  const [section, setSection] = useState(0);

  const webProjects = [
    {
      title: "HoyAlytics",
      img: "/assets/portfolio/hoyalytics.png",
      subtitle: "June - August 2022",
      description:
        "A custom club website for HoyAlytics Data Consulting. Allows for custom waitlist sign-up functionality and connects to Google Sheets via API. Custom CSS animations are used to create a smooth user experience.",
      languages: ["React", "NodeJS", "Nodemailer"],
      github: "#",
      demo: "https://hoyalytics.com",
    },
    {
      title: "Football Pool Organizer",
      img: "/assets/portfolio/fpo.png",
      subtitle: "March - August 2019",
      description:
        "A content management system designed for football fans to select winners of weekly games. Features include user authentication, custom scoring, and automated standings.",
      languages: ["PHP", "Javascript", "MySQL", "CSS"],
      github: "#",
      demo: "https://poolorganizer.net",
    },
    {
      title: "Neurodd",
      img: "/assets/portfolio/neurodd.png",
      subtitle: "2020 - 2021",
      description:
        "An extensive neural network trained to predict outcomes of NFL games.  This project scrapes 1000s of NFL team stats and runs millions of predictions every week.",
      languages: ["Python", "SKLearn", "Tensorflow", "PHP"],
      github: "#",
      demo: "#",
    },
    {
      title: "March Madness Bracket Challenge",
      img: "/assets/portfolio/bracket.png",
      subtitle: "February 2020",
      description: "A custom-scoring-based March Madness pool organizer.",
      languages: ["PHP", "Javascript", "MySQL", "CSS"],
      github: "https://github.com/reeduhlik/march-madness-pool",
      demo: "http://marchmadnesspool.org",
    },
    {
      title: "Numbr",
      img: "/assets/portfolio/numbr.png",
      subtitle: "June 2020",
      description:
        "A live, multiplayer strategy game utilizing web socket technology.",
      languages: ["React", "NodeJS", "Socket.io"],
      github: "#",
      demo: "http://numbr-game.herokuapp.com/",
    },
    {
      title: "Spelling Bee Tool",
      img: "/assets/portfolio/spelling.png",
      subtitle: "February 2018",
      description:
        "A study tool for participants preparing for a spelling bee.  Features include dictionary API calls, progress tracking, and text-to-speech conversion.",
      languages: ["PHP", "Javascript", "Jquery", "HTML/CSS"],
      github: "https://github.com/reeduhlik/spelling-bee-study-tool",
      demo: "#",
    },
    {
      title: "AcDec Study Tool",
      img: "/assets/portfolio/acdec.png",
      subtitle: "April 2018",
      description:
        "A tool for Academic Decathlon students to review for the art section of the competition.",
      languages: ["Javascript", "HTML/CSS", "JQuery"],
      github: "https://github.com/reeduhlik/acdec-study",
      demo: "#",
    },
  ];

  const uiProjects = [
    {
      title: "Rainyday App",
      img: "/assets/portfolio/ui-rainyday.jpg",
      subtitle: "June 2022",
    },
    {
      title: "Numbr Multiplayer Game",
      img: "/assets/portfolio/ui-numbr.jpg",
      subtitle: "May 2021",
    },
    {
      title: "Taskflow App",
      img: "/assets/portfolio/ui-taskflow.jpg",
      subtitle: "October 2021",
    },
    {
      title: "Chop Steakhouse Website",
      img: "/assets/portfolio/ui-chop.jpg",
      subtitle: "January 2021",
    },
    {
      title: "March Madness App",
      img: "/assets/portfolio/ui-marchmadness.jpg",
      subtitle: "February 2022",
    },
    {
      title: "Assassins App",
      img: "/assets/portfolio/ui-assassins.jpg",
      subtitle: "December 2020",
    },
  ];

  return (
    <div className="portfolio">
      <div className="container">
        <h1 className="portfolio-title">My Portfolio</h1>
        <div className="portfolio-toggles">
          <div
            className={
              section == 0
                ? "portfolio-toggle portfolio-toggle-active"
                : "portfolio-toggle"
            }
            onClick={() => setSection(0)}>
            <img src="/assets/icons/terminal.svg" alt="" />
            <p>Development</p>
          </div>
          <div
            className={
              section == 1
                ? "portfolio-toggle portfolio-toggle-active"
                : "portfolio-toggle"
            }
            onClick={() => setSection(1)}>
            <img src="/assets/icons/design.svg" alt="" />
            <p>UI/UX Design</p>
          </div>
        </div>
        <div
          className={
            section == 0
              ? "portfolio-content"
              : "portfolio-content portfolio-content-ui"
          }>
          {section == 0 &&
            webProjects.map((project) => <WebProject project={project} />)}
          {section == 1 &&
            uiProjects.map((project) => <UIProject project={project} />)}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
