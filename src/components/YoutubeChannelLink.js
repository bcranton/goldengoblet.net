import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const YoutubeChannelLink = ({ children, name }) => {
  const data = useStaticQuery(graphql`
    query YoutubeChannelQuery {
      allYoutubeCsv {
        nodes {
          name
          channel
        }
      }
    }
  `)
  const channelId = data.allYoutubeCsv.nodes.find(node => node.name === name)
    ?.channel

  return channelId ? (
    <a href={`https://www.youtube.com/user/${channelId}`}>{children}</a>
  ) : (
    children
  )
}

export default YoutubeChannelLink
