import React from "react"

const ViewsyncLink = ({ data, day }) => {
  const youtubeLinks = data.map(node => node.days[day].youtube).filter(Boolean)
  const names = data.map(node => node.days[day].name)
  if (youtubeLinks.length > 1) {
    return (
      <a
        href={`https://viewsync.net/watch?${youtubeLinks
          .map(link => `v=${link}`)
          .join("&")}`}
      >
        {day + 1 + " " + names[0]}
      </a>
    )
  } else {
    return day + 1 + " " + names[0]

  }
}

export default ViewsyncLink
