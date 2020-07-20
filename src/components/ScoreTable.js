import React from "react"
import { Table } from "react-bootstrap"

import Score from "./Score"
import ViewsyncLink from "./ViewsyncLink"
import YoutubeChannelLink from "./YoutubeChannelLink"

const ScoreTable = ({ data, notes }) => {
  let rows = []
  for (let day = 0; day < 7; day++) {
    rows.push(
      <tr key={day}>
        <th scope="row">
          <ViewsyncLink data={data} day={day} />
        </th>
        {data.map(row => (
          <Score key={row.id} day={row.days[day]} allNotes={notes} />
        ))}
      </tr>
    )
  }

  return (
    <Table variant="dark" className="results">
      <thead>
        <tr>
          <th scope="col">Viewsync</th>
          {data.map(({ id, name }) => (
            <th scope="col" key={id}>
              <YoutubeChannelLink name={name}>{name}</YoutubeChannelLink>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}

export default ScoreTable
