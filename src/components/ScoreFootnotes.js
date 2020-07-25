import React from "react"

const ScoreFootnotes = ({ markdown, notes }) => (
  <div id="footnote">
    {markdown && (
      <div
        dangerouslySetInnerHTML={{
          __html: markdown,
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
)

export default ScoreFootnotes
