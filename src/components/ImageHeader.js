import React from "react"
import Img from "gatsby-image"

const ImageHeader = ({ data, alt }) => {
  const { publicURL, childImageSharp } = data

  return (
    <div className="text-center" id="image-header">
      {childImageSharp ? (
        <Img fluid={childImageSharp.fluid} alt={alt} />
      ) : (
        <img src={publicURL} className="img-fluid" alt={alt} />
      )}
    </div>
  )
}

ImageHeader.defaultProps = {
  alt: "Game Logo",
}

export default ImageHeader
