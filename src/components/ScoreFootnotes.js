import React from "react"

const ScoreFootnotes = ({ markdown, notes }) => (
  <div id="footnote">
    {notes.map((note, index) => (
      <div key={index}>
        {"*".repeat(index + 1)} {note}
      </div>
    ))}
    {markdown && (
      <div
        dangerouslySetInnerHTML={{
          __html: markdown,
        }}
      ></div>
    )}
  </div>
)

export default ScoreFootnotes
