import React, { useContext } from "react"
import { Button } from "react-bootstrap"
import SpoilerContext from "../context/SpoilerContext"

const SpoilerButton = () => {
  const { showSpoilers, toggleSpoilers } = useContext(SpoilerContext)
  return (
    <Button variant="warning" onClick={toggleSpoilers}>
      {showSpoilers ? "Hide" : "Show"} Spoilers
    </Button>
  )
}

export default SpoilerButton
