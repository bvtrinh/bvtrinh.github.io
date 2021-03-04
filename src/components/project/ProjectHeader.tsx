import React, { useContext } from "react";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccordionContext from "react-bootstrap/AccordionContext";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

interface ProjectHeaderProps {
  title: string;
  date: string;
  eventKey: string;
}

export const ProjectHeader = ({ title, date, eventKey }: ProjectHeaderProps) => {
  const currentEventKey = useContext(AccordionContext);
  const decoratedOnClick = useAccordionToggle(eventKey);
  const logo =
    currentEventKey === eventKey ? (
      <FontAwesomeIcon icon={faMinus} />
    ) : (
      <FontAwesomeIcon icon={faPlus} />
    );

  return (
    <div className="project-header" onClick={decoratedOnClick}>
      <h4>
        {logo} {title}
      </h4>
      <h4>{date}</h4>
    </div>
  );
};
