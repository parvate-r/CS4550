"use client";
import { useState } from "react";

export default function StringState() {
  const [text, setText] = useState("Hello, World!");

  return (
    <div className="mb-4">
      <h4>String State Example</h4>
      <input
        type="text"
        className="form-control mb-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Current Text: {text}</p>
    </div>
  );
}
