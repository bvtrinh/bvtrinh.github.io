import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../images/logo.png";
import Image from "react-bootstrap/Image";

const SCROLL_LIMIT = 250;

export const CustomNavbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const navbarColor = scrollPosition >= SCROLL_LIMIT ? "black-navbar" : "transparent-navbar";

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className={`navbar-extra ${navbarColor}`}
      fixed="top"
    >
      <div className="container">
        <Navbar.Brand href="/">
          <Image
            alt="logo image"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Tyler Trinh
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="/TrinhResume.pdf">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
