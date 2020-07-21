import React from "react";
import { graphql } from "gatsby";

import { SpoilerProvider } from "../context/SpoilerContext";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import SpoilerButton from "../components/SpoilerButton";
import ScoreTable from "../components/ScoreTable";
import ScoreFootnotes from "../components/ScoreFootnotes";
import ResultsTable from "../components/ResultsTable";
import ImageHeader from "../components/ImageHeader";

export default function ScorePage({ data, pageContext }) {
  const { name, notes, scores, theme } = pageContext;

  return (
    <SpoilerProvider>
      <Layout currentGame={name} theme={theme} navButtons={<SpoilerButton />}>
        <SEO title={name} />
        <ImageHeader data={data.gameImage} alt={`${name} Logo`} />
        {scores ? (
          <>
            <h2 id="subtitle" className="text-center text-nowrap my-2">
              Golden Goblet
            </h2>
            <ScoreTable data={scores} notes={notes} />
            <ResultsTable data={scores} />
            <ScoreFootnotes notes={notes} markdown={data?.gameMarkdown?.childMarkdownRemark?.html} />
          </>
        ) : (
          <h2 id="subtitle" className="text-center mt-5">
            Coming Soon
          </h2>
        )}
      </Layout>
    </SpoilerProvider>
  );
}

export const query = graphql`
  query($image: String!, $slug: String!) {
    gameMarkdown: file(name: { glob: $slug }) {
      childMarkdownRemark {
        html
      }
    }
    gameImage: file(relativePath: { eq: $image }) {
      publicURL
    }
  }
`;

// gameImage: file(relativePath: { eq: $image }) {
//   publicURL
//   childImageSharp {
//     fluid(maxWidth: 840, maxHeight: 190) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
