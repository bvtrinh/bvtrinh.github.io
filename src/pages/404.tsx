import * as React from "react";
import { CustomNavbar } from "../components/CustomNavbar";
import { Header } from "../components/Header";
import { SectionTitle } from "../components/SectionTitle";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <>
      <CustomNavbar />
      <Header />
      <main className="container">
        <Link to="/" className="gatsby-link">
          <SectionTitle title="Go Home" />
        </Link>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          this isn't a page
        </p>
      </main>
      <footer />
    </>
  );
};

export default NotFoundPage;
