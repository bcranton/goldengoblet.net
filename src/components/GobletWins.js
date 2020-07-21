import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MedalsTable = ({ scores, winners }) => {
  const columns = scores.map((winner) => {
    const wins = winners.find((group) => group.name === winner.name);
    if (!wins) return <td key={winner.name}></td>;

    return (
      <td key={winner.name}>
        {wins.nodes.map(({ name, slug }) => (
          <Link key={slug} to={`/${slug}`} className="d-block my-3">
            <FontAwesomeIcon icon="trophy" className="goblet-win" />
            <span className="ml-2 goblet-game">{name}</span>
          </Link>
        ))}
      </td>
    );
  });

  return (
    <tbody>
      <tr>{columns}</tr>
    </tbody>
  );
};

export default MedalsTable;
