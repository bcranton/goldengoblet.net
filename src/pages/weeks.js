import React from "react";
import { Link, graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";
import splitToChunks from "../utils/splitToChunks";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NUMBER_OF_COLUMNS = 3;

const WeeksPage = ({ data }) => {
  const columns = splitToChunks(data.allGamesCsv.nodes, NUMBER_OF_COLUMNS);
  return (
    <Layout theme="cod" variant="dark">
      <SEO title="Weeks" />
      <div id="subtitle" className="d-flex justify-content-center text-nowrap">
        All Weeks
      </div>
      <Row className="my-3">
        {columns.map((games) => (
          <Col lg={12 / NUMBER_OF_COLUMNS} sm="12">
            {games.map(({ name, slug }) => (
              <Link to={`/${slug}`} className="d-block text-white">
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

export default WeeksPage;
