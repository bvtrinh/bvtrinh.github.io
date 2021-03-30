import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  return (
    <>
      <Jumbotron as="header" className="bg-image">
        <div id="intro" className="container intro-title">
          <h1>Tyler Trinh</h1>
          <h2>Software Developer</h2>
          <div className="social-icons">
            <a href="mailto:tylervtrinh@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/bvtrinh/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a target="_blank" href="https://github.com/bvtrinh">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </Jumbotron>
      <div className="gradient-img-follow" />
    </>
  );
};
