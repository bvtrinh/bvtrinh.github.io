import React from "react";
import { ProjectSection } from "./ProjectSection";
import { PROJECTS } from "../../static/projects";

const ProjectElements = () => {
  return (
    <>
      {PROJECTS.map((proj) => (
        <ProjectSection
          key={proj.title}
          title={proj.title}
          date={proj.date}
          skills={proj.skills}
          about={proj.about}
          description={proj.description}
          link={proj.link}
        />
      ))}
    </>
  );
};

export const ProjectList = () => {
  return <ProjectElements />;
};
