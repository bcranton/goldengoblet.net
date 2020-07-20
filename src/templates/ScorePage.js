import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SpoilerButton from "../components/SpoilerButton"
import ScoreTable from "../components/ScoreTable"
import ScoreFootnotes from "../components/ScoreFootnotes"
import ResultsTable from "../components/ResultsTable"
import ImageHeader from "../components/ImageHeader"

export default function ScorePage({ data, pageContext }) {
  const { theme, name } = pageContext
  const [notes, setNotes] = useState(() =>
    data.scores.nodes
      .map(node => node.days.map(day => day.notes))
      .flat()
      .filter(Boolean)
  )

  return (
    <Layout currentGame={name} theme={theme} navButtons={<SpoilerButton />}>
      <SEO title={name} />
      <ImageHeader data={data.gameImage} alt={`${name} Logo`} />
      <h2 id="subtitle" className="text-center text-nowrap">
        GOLDEN GOBLET
      </h2>
      <ScoreTable data={data.scores.nodes} notes={notes} />
      <ResultsTable data={data.scores.nodes} />
      <ScoreFootnotes
        notes={notes}
        markdown={data?.gameMarkdown?.childMarkdownRemark?.html}
      />
    </Layout>
  )
}

export const query = graphql`
  query($image: String!, $slug: String!) {
    scores: allScoreCsv(
      filter: { slug: { eq: $slug } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        id
        name
        days {
          score
          place
          youtube
          notes
        }
      }
    }
    gameMarkdown: file(name: { glob: $slug }) {
      childMarkdownRemark {
        html
      }
    }
    gameImage: file(relativePath: { eq: $image }) {
      publicURL
    }
  }
`

// gameImage: file(relativePath: { eq: $image }) {
//   publicURL
//   childImageSharp {
//     fluid(maxWidth: 840, maxHeight: 190) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
