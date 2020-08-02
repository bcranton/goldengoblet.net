import React from "react";

const ScoreFootnotes = ({ footnotes, notes }) => {
  let footnote_html;
  if (footnotes) {
    footnote_html = footnotes.extension == "md" ? footnotes.childMarkdownRemark.html : footnotes.internal.content;
  }

  return (
    <div id="footnote">
      {footnotes && (
        <div
          className="footnote-content"
          dangerouslySetInnerHTML={{
            __html: footnote_html,
          }}
        ></div>
      )}
      <p></p>
      {notes.map((note, index) => (
        <div key={index}>
          {"*".repeat(index + 1)} {note}
        </div>
      ))}
      <p></p>
    </div>
  );
};

export default ScoreFootnotes;
