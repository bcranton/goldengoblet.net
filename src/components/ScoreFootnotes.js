import React from "react";

const ScoreFootnotes = ({ footnotes, notes }) => {
  let footnote_html = getFootnoteContent(footnotes);

  return (
    <div id="footnote">
      {footnote_html && (
        <div
          className="mb-3 footnote-content"
          dangerouslySetInnerHTML={{
            __html: footnote_html,
          }}
        ></div>
      )}
      {notes.map((note, index) => (
        <div className="mb-3" key={index}>
          {"*".repeat(index + 1)} {note}
        </div>
      ))}
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
