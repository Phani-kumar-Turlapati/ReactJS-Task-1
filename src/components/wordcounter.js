import React, { useState } from "react";

const WordCounter = () =>
{
  const [wordCount, setWordCount] = useState(0);
  const handleInputChange = (event) =>
  {
    const text = event.target.value;
    const words = text.trim().split(/\s+/);
    setWordCount(words.length);
  };

  const renderWordCount = () =>
  {
    return (
      <div className="word-count">
        <p>Word Count: {wordCount}</p>
      </div>
    );
  };

  return (
    <div className="responsive-paragraph-word-counter">
      <div class="container">
        <h2>Responsive Paragraph Word Counter</h2>
        <textarea id="i1"
          className="paragraph-input"
          onChange={handleInputChange}
          placeholder="Enter your paragraph here"
          rows="4"
          cols="50"
          style={{ height: "100px" }}
        />
        <br/>
      {renderWordCount()}
      </div>
    </div>
  );
};

export default WordCounter;
