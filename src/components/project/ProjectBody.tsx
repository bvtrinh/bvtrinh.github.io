import React from "react";
import Image from "react-bootstrap/Image";
import { SKILL_LOGOS } from "../../static/skillLogos";

export interface ProjectBodyProps {
  skills: string[];
  about: string;
  description: string;
  link?: string;
}

const SkillList = ({ skills }: { skills: string[] }) => {
  return (
    <p>
      {skills.map((skill: string) => {
        return <Image className="skill-logo" key={skill} src={SKILL_LOGOS[skill]} />;
      })}
    </p>
  );
};

export const ProjectBody = ({ about, skills, description, link }: ProjectBodyProps) => {
  return (
    <div className="project-body">
      <SkillList skills={skills} />
      <p>{about}</p>
      <p>{description}</p>
    </div>
  );
};
