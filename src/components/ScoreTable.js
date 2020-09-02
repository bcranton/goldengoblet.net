import React from "react";
import { Table } from "react-bootstrap";

import Score from "./Score";
import ViewsyncLink from "./ViewsyncLink";

const ScoreTable = ({ data, notes }) => {
  let rows = [];
  const maxDays = data.reduce(
    (max, contestant) =>
      Math.max(contestant.days.filter((day) => day.score).length, max),
    0
  );
  for (let day = 0; day < maxDays; day++) {
    rows.push(
      <tr key={day}>
        <th scope="row">
          <ViewsyncLink data={data} day={day} />
        </th>
        {data.map((row) => (
          <Score key={row.id} day={row.days[day]} allNotes={notes} />
        ))}
      </tr>
    );
  }

  return (
    <Table responsive variant="dark" className="results table-center">
      <thead>
        <tr>
          <th scope="col">Viewsync</th>
          {data.map(({ id, name, youtube }) => (
            <th scope="col" key={id}>
              {youtube ? (
                <a href={`https://www.youtube.com/user/${youtube.channel}`}>
                  {name}
                </a>
              ) : (
                name
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default ScoreTable;
