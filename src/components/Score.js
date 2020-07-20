import React, { useContext } from "react"
import SpoilerContext from "../context/SpoilerContext"
import YoutubeLink from "./YoutubeLink"

const Score = ({ day, allNotes }) => {
  const { showSpoilers } = useContext(SpoilerContext)
  const { place, score, youtube, notes } = day
  const noteIndex = allNotes.findIndex(n => n === notes)

  return (
    <td>
      <YoutubeLink videoId={youtube}>
        {showSpoilers ? (
          <span className={`comment ${place}`}>
            {score || "TBD"}
            {notes ? " " + "*".repeat(noteIndex + 1) : ""}
          </span>
        ) : (
          <span>{youtube ? "Watch" : score ? "Spoilers" : "TBD"}</span>
        )}
      </YoutubeLink>
    </td>
  )
}

export default Score
