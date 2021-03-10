import React from "react";
import { Helmet } from "react-helmet";

export const SEO = () => {
  return (
    <Helmet>
      <title>Tyler Trinh</title>
      <meta
        name="description"
        content="Tyler Trinh's personal portfolio website. Built with Gatsby.js."
      ></meta>
    </Helmet>
  );
};
