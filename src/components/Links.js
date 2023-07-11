import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Links = () => (
  <div className="icons">
    <a href="https://github.com/reeduhlik" target="_blank" className="icon">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a
      href="https://www.linkedin.com/in/reed-uhlik-925377188/"
      target="_blank"
      className="icon">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href="https://twitter.com/reed_uhlik" target="_blank" className="icon">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  </div>
);

export default Links;
