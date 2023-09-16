import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Skills = (props) => {
  const skills = [
    {
      title: "Languages",
      items: [
        "HTML/CSS",
        "Javascript (ES6+)",
        "PHP",
        "SQL",
        "Java",
        "C++",
        "Python",
      ],
    },
    {
      title: "Frameworks",
      items: [
        "React",
        "React Native",
        "Angular",
        "Express",
        "Node",
        "MongoDB",
        "Socket.io",
      ],
    },
    {
      title: "Design",
      items: [
        "Figma",
        "Affinity Designer",
        "Affinity Photo",
        "Balsamiq Mockups",
      ],
    },
    {
      title: "Tools",
      items: ["Git & GitHub", "Postman", "Bash", "SSH", "PHPMyAdmin"],
    },
    {
      title: "Editing",
      items: ["Adobe Premiere Pro", "Davinci Resolve 16"],
    },
  ];
  return (
    <div className="skills">
      <div className="container">
        <h1 className="skills-title">MY SKILLS</h1>
        <div className="skills-container">
          {skills.map((skill) => (
            <div className="skills-col">
              <h3 className="skills-col-title">{skill.title}</h3>
              {skill.items.map((item) => (
                <p className="skills-col-item">{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
