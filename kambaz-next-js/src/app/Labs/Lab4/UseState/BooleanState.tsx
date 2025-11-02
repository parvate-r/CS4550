"use client";
import { useState } from "react";

export default function BooleanState() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="mb-4">
      <h4>Boolean State Example</h4>
      <button
        className="btn btn-warning mb-2"
        onClick={() => setVisible(!visible)}
      >
        Toggle Message
      </button>
      {visible && <p>The message is visible!</p>}
    </div>
  );
}
