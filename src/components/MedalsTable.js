import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const POINTS = {
    first: 3,
    second: 2,
    third: 1,
  },
  RANKINGS_MAP = ["first", "second", "third"];

const MedalsTable = ({ scores }) => {
  const [contestantScores, setContestantScores] = useState(() =>
    scores.reduce((h, contestant) => {
      h[contestant.name] = contestant.nodes
        .map((game) => game.days)
        .flat()
        .map((day) => day.place)
        .filter(Boolean)
        .reduce(
          (medals, place) => {
            if (medals[place] !== undefined) medals[place]++;
            if (POINTS[place] !== undefined) medals.score += POINTS[place];
            return medals;
          },
          { first: 0, second: 0, third: 0, score: 0 }
        );
      return h;
    }, {})
  );
  const [rankings, setRankings] = useState(() => calculateRanking(contestantScores));

  return (
    <tbody id="medal-totals" className="table-center">
      <tr>
        {scores.map((winner) => (
          <td key={winner.name} className="medals">
            <ContestantMedals scores={contestantScores[winner.name]} place="third" />
            <ContestantMedals scores={contestantScores[winner.name]} place="second" />
            <ContestantMedals scores={contestantScores[winner.name]} place="first" />
          </td>
        ))}
      </tr>
      <tr>
        {scores.map((winner) => (
          <td key={winner.name}>
            <span className="mx-1">
              {contestantScores[winner.name].third}x <FontAwesomeIcon icon="medal" className="third" />
            </span>
            <span className="mx-1">
              {contestantScores[winner.name].second}x <FontAwesomeIcon icon="medal" className="second" />
            </span>
            <span className="mx-1">
              {contestantScores[winner.name].first}x <FontAwesomeIcon icon="medal" className="first" />
            </span>
          </td>
        ))}
      </tr>
      <tr>
        {scores.map((winner) => (
          <td key={winner.name}>
            <FontAwesomeIcon icon="medal" className={`mr-2 ${rankings[winner.name]}`} />
            {contestantScores[winner.name].score}pts
          </td>
        ))}
      </tr>
    </tbody>
  );
};

const ContestantMedals = ({ scores, place }) => {
  let medals = [];
  for (let i = 0; i < scores[place]; i++) {
    medals.push(<FontAwesomeIcon key={i} icon="medal" className={place} />);
  }
  return <>{medals}</>;
};

const calculateRanking = (scores) =>
  Object.entries(scores)
    .sort((s1, s2) => {
      if (s1[1].score > s2[1].score) return -1;
      if (s1[1].score < s2[1].score) return 1;
      return 0;
    })
    .reduce((h, s, index) => {
      h[s[0]] = RANKINGS_MAP[index];
      return h;
    }, {});

export default MedalsTable;
