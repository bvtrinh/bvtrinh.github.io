import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { ProjectProps } from "../../static/projects";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectBody } from "./ProjectBody";

export const ProjectSection = ({ title, date, skills, about, description, link }: ProjectProps) => {
  return (
    <Accordion>
      <ProjectHeader title={title} date={date} eventKey="0" />
      <Accordion.Collapse eventKey="0">
        <ProjectBody skills={skills} about={about} description={description} link={link} />
      </Accordion.Collapse>
    </Accordion>
  );
};
