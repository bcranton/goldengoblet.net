import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Table, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import MedalsTable from "../components/MedalsTable";
import GobletWins from "../components/GobletWins";

const MedalsPage = ({ data }) => {
  return (
    <Layout theme="medals" variant="light">
      <SEO title="Medals" />
      <div className="d-flex justify-content-center">
        <Img fixed={data.headerImage.childImageSharp.fixed} className="img-fluid" />
      </div>
      <div id="subtitle" className="d-flex justify-content-center text-nowrap">
        Golden Goblet
      </div>
      <Table variant="dark" borderless>
        <thead className="table-center">
          <tr>
            {data.scores.group.map(({ name, nodes }) => (
              <th key={name}>
                {nodes[0].youtube ? (
                  <a href={`https://www.youtube.com/user/${nodes[0].youtube.channel}`}>{name}</a>
                ) : (
                  name
                )}
              </th>
            ))}
          </tr>
        </thead>
        <GobletWins scores={data.scores.group} winners={data.winners.group} />
        <MedalsTable scores={data.scores.group} />
        <tfoot className="table-center">
          <tr id="points-calc">
            <th colSpan={data.winners.group.length + 1}>
              <Row>
                <Col xs={4} className="third">
                  <FontAwesomeIcon icon="medal" /> = 1 pt
                </Col>
                <Col xs={4} className="second">
                  <FontAwesomeIcon icon="medal" /> = 2 pts
                </Col>
                <Col xs={4} className="first">
                  <FontAwesomeIcon icon="medal" /> = 3 pts
                </Col>
              </Row>
            </th>
          </tr>
        </tfoot>
      </Table>
    </Layout>
  );
};

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "medals-logo.png" }) {
      childImageSharp {
        fixed(width: 318, height: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    winners: allGamesCsv(sort: { fields: winner, order: ASC }) {
      group(field: winner) {
        name: fieldValue
        nodes {
          winner
          name
          slug
        }
      }
    }
    scores: allScoreCsv(sort: { fields: name, order: ASC }) {
      group(field: name) {
        name: fieldValue
        nodes {
          name
          youtube {
            channel
          }
          days {
            place
          }
        }
      }
    }
  }
`;

export default MedalsPage;
