import React from "react";
import { Link, graphql } from "gatsby";
import { Card, CardColumns } from "react-bootstrap";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const GamesPage = ({ data }) => (
  <Layout theme="medals" variant="light">
    <SEO title="Games" />
    <div id="subtitle" className="d-flex justify-content-center text-nowrap">
      All Games
    </div>
    <CardColumns>
      {data.allGamesCsv.nodes.map(({ imageFile, name, slug, theme }) => (
        <Link to={`/${slug}`} className="d-block text-white" key={slug}>
          <Card text="white" className={`themeable ${theme}-theme`}>
            {imageFile && <Card.Img src={imageFile.publicURL} className="p-2" />}
            <Card.Title className="text-center mt-2">{name}</Card.Title>
          </Card>
        </Link>
      ))}
    </CardColumns>
  </Layout>
);

export const query = graphql`
  query WeeksQuery {
    allGamesCsv {
      nodes {
        slug
        name
        theme
        imageFile {
          publicURL
        }
      }
    }
  }
`;

export default GamesPage;
