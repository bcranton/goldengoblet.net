import React from "react";
import { Table } from "react-bootstrap";
import ResultsRow from "./ResultsRow";

const ResultsTable = ({ data }) => {
  return (
    <Table variant="dark" className="table-center">
      <thead>
        <tr>
          <th scope="col">Totals</th>
          {data.map((score) => (
            <th scope="col" key={score.id}>
              {score.name}
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
