import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Credits = ({ variant }) => {
  const data = useStaticQuery(graphql`
    query GithubImageQuery {
      dark: file(relativePath: { eq: "GitHub-Mark-Light-32px.png" }) {
        publicURL
      }
      light: file(relativePath: { eq: "GitHub-Mark-32px.png" }) {
        publicURL
      }
    }
  `);

  return (
    <div>
      <div className="d-flex justify-content-center">
        <a href="https://www.reddit.com/u/AManNamedLear" class={`credit-link-${variant}`}>
          Find a mistake? Have a suggestion? Message me on Reddit! /u/AManNamedLear
        </a>
      </div>
      <p></p>
      <div className="d-flex justify-content-center">
        <a href="https://github.com/bcranton/goldengoblet.net">
          <img src={data[variant].publicURL} className="img-fluid" alt="Github Logo" />
        </a>
      </div>
    </div>
  );
};

Credits.defaultProps = {
  variant: "dark",
};

export default Credits;
