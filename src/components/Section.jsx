import React from "react";
import { SectionTitle } from "./SectionTitle";

export const Section = (props) => {
  return (
    <section id={props.id} className="mt-3">
      <SectionTitle title={props.title} />
      <content>{props.content}</content>
    </section>
  );
};
