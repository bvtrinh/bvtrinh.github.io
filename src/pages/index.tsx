import * as React from "react";
import { SEO } from "../components/SEO";
import { CustomNavbar } from "../components/CustomNavbar";
import { Header } from "../components/Header";
import { Section } from "../components/Section";
import { ProjectList } from "../components/project/ProjectList";

const AboutInfo = () => (
  <p>
    Hi there! I’m a computer science student studying at Simon Fraser University. I’m currently on
    co-op working as a Full Stack Developer at{" "}
    <a target="_blank" href="https://www.fabcycle.shop/">
      FABCYCLE
    </a>
    . I’m a soon to be graduate and hoping to look for work that is interesting and engaging. My
    main interests are in web development, data science and machine learning applications.
    <br />
    <br />
    In my spare time I like to longboard, play video games and watch the Raptors semi-occasionally
    win.
  </p>
);

const IndexPage = () => {
  return (
    <>
      <SEO />
      <CustomNavbar />
      <Header />
      <main className="container">
        <Section id="about" title="About" content={AboutInfo} />
        <Section id="projects" title="Projects" content={ProjectList} />
      </main>
      <footer />
    </>
  );
};

export default IndexPage;
