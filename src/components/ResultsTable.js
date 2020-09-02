import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ResultsRow from "./ResultsRow";
import SpoilerContext from "../context/SpoilerContext";

const ResultsTable = ({ data, winner }) => {
  const { showSpoilers } = useContext(SpoilerContext);

  return (
    <Table variant="dark" className="table-center" responsive>
      <thead>
        <tr>
          <th scope="col">Totals</th>
          {data.map((score) => (
            <th scope="col" key={score.id}>
              {score.name}
              {showSpoilers && score.name === winner && (
                <FontAwesomeIcon icon="trophy" className="results-winner" />
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <ResultsRow data={data} place="third" />
        <ResultsRow data={data} place="second" />
        <ResultsRow data={data} place="first" />
      </tbody>
    </Table>
  );
};

export default ResultsTable;
