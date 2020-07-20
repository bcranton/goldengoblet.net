import React from "react"

const YoutubeLink = ({ children, videoId }) => {
  return videoId ? (
    <a href={`https://www.youtube.com/watch?v=${videoId}`}>{children}</a>
  ) : (
    children
  )
}

export default YoutubeLink
