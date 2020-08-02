import React from "react";

const ScoreFootnotes = ({ footnotes, notes }) => {
  let footnote_html = getFootnoteContent(footnotes);

  return (
    <div id="footnote">
      {footnote_html && (
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

const getFootnoteContent = (footnotes) => {
  switch (footnotes?.extension) {
    case "md":
      return footnotes.childMarkdownRemark.html;
    case "html":
      return footnotes.internal.content;
    default:
      return null;
  }
};

export default ScoreFootnotes;
