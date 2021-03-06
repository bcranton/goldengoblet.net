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
  const { name, notes, scores, winner, theme, imageFile } = pageContext;

  return (
    <SpoilerProvider>
      <Layout currentGame={name} theme={theme} navButtons={<SpoilerButton />}>
        <SEO title={name} />
        <ImageHeader data={imageFile} alt={`${name} Logo`} />
        {scores ? (
          <>
            <h2 id="subtitle" className="text-center text-nowrap my-2">
              Golden Goblet
            </h2>
            <ScoreTable data={scores} notes={notes} />
            <ResultsTable data={scores} winner={winner} />
            <ScoreFootnotes notes={notes} footnotes={data.footnotes} />
          </>
        ) : (
          <h2 id="subtitle" className="text-center mt-5">
            Coming Soon
          </h2>
        )}
        <p></p>
      </Layout>
    </SpoilerProvider>
  );
}

export const query = graphql`
  query($slug: String!) {
    footnotes: file(
      name: { glob: $slug }
      relativePath: { regex: "/footnotes/.+/" }
      extension: { in: ["html", "md"] }
    ) {
      extension
      internal {
        content
      }
      childMarkdownRemark {
        html
      }
    }
  }
`;
