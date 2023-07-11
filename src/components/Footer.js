import React from "react";
import Links from "./Links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const scrollToTop = () => {
  console.log("clicked");
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

const Footer = () => (
  <div className="footer">
    <img
      className="footer-image"
      src="/assets/signature.svg"
      alt="Reed Uhlik"
    />
    <div className="footer-links">
      <Links />
    </div>
    <FontAwesomeIcon
      icon={faChevronUp}
      onClick={scrollToTop}
      className="footer-arrow"
    />
    <h4 onClick={scrollToTop} className="footer-top">
      Back to top
    </h4>
  </div>
);

export default Footer;
