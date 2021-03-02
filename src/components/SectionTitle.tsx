import React from "react";

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <>
      <h3>{title}</h3>
      <hr />
    </>
  );
};
