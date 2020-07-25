import React from "react"
import Img from "gatsby-image"

const Credits = ({ data, color }) => {
    const { publicURL, childImageSharp } = data
    console.log(color)

    return (
        <div>
            <div className="row justify-content-center">
                <a href="https://www.reddit.com/u/AManNamedLear" class={"credit-link" + color}>Find a mistake? Have a suggestion?
        Message me on Reddit! /u/AManNamedLear</a>
            </div>
            <p></p>
            <div className="row justify-content-center">
                {childImageSharp ? (
                    <Img fluid={childImageSharp.fluid} alt="Github Logo" />
                ) : (
                        <img src={publicURL} className="img-fluid" alt="Github Logo" />
                    )}
            </div>
        </div >
    );
};

export default Credits
