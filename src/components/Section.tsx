import React from "react";
import { SectionTitle } from "./SectionTitle";

interface SectionProps {
  id: string;
  title: string;
  content: () => JSX.Element;
}

export const Section = ({ id, title, content }: SectionProps) => {
  return (
    <section id={id} className="mt-3">
      <SectionTitle title={title} />
      <article>{content()}</article>
    </section>
  );
};
