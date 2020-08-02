import React from "react";
import { Link, graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";
import splitToChunks from "../utils/splitToChunks";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NUMBER_OF_COLUMNS = 3;

const GamesPage = ({ data }) => {
  const columns = splitToChunks(data.allGamesCsv.nodes, NUMBER_OF_COLUMNS);

  return (
    <Layout theme="cod" variant="dark">
      <SEO title="Games" />
      <div id="subtitle" className="d-flex justify-content-center text-nowrap">
        All Games
      </div>
      <Row className="my-3 text-center">
        {columns.map((games, index) => (
          <Col lg="4" sm="12" key={index}>
            {games.map(({ name, slug }) => (
              <Link to={`/${slug}`} className="d-block text-white" key={slug}>
                {name}
              </Link>
            ))}
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export const query = graphql`
  query WeeksQuery {
    allGamesCsv {
      nodes {
        slug
        name
      }
    }
  }
`;

export default GamesPage;
