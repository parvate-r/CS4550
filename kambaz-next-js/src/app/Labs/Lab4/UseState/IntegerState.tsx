"use client";
import { useState } from "react";

export default function IntegerState() {
  const [count, setCount] = useState(0);

  return (
    <div className="mb-4">
      <h4>Integer State Example</h4>
      <p>Count: {count}</p>
      <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="btn btn-secondary me-2" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button className="btn btn-danger" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
