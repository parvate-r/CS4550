"use client";
import React, { useState } from "react";

export default function DynamicStyling() {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const toggleHighlight = () => setIsHighlighted(!isHighlighted);
  const increaseFont = () => setFontSize(fontSize + 2);
  const decreaseFont = () => setFontSize(fontSize - 2);

  const style = {
    fontSize: `${fontSize}px`,
    backgroundColor: isHighlighted ? "#fff3cd" : "white",
    border: isHighlighted ? "2px solid #ffcc00" : "1px solid #ccc",
    padding: "10px",
    borderRadius: "8px",
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">3.5 – Dynamic Styling</h2>

        <div style={style} className="mb-3">
          Dynamic styling in React lets you toggle CSS classes or apply inline
          styles based on component state.
        </div>

        <button
          className={`btn me-2 ${isHighlighted ? "btn-warning" : "btn-outline-warning"}`}
          onClick={toggleHighlight}
        >
          {isHighlighted ? "Remove Highlight" : "Highlight Text"}
        </button>
        <button className="btn btn-outline-primary me-2" onClick={increaseFont}>
          Increase Font
        </button>
        <button className="btn btn-outline-secondary" onClick={decreaseFont}>
          Decrease Font
        </button>
      </div>
    </div>
  );
}
