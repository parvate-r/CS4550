"use client";
import { useState } from "react";

function Child({ parentCount }: { parentCount: number }) {
  const [childCount, setChildCount] = useState(0);

  return (
    <div className="border p-3 mt-2 rounded">
      <h6>Child Component</h6>
      <p>Parent Count: {parentCount}</p>
      <p>Child Count: {childCount}</p>
      <button
        className="btn btn-outline-primary"
        onClick={() => setChildCount(childCount + 1)}
      >
        Increment in Child
      </button>
    </div>
  );
}

export default function SharedState() {
  const [count, setCount] = useState(0);

  return (
    <div className="mb-4">
      <h4>Shared State Example</h4>
      <p>Parent Count: {count}</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment in Parent
      </button>
      <Child parentCount={count} />
    </div>
  );
}
