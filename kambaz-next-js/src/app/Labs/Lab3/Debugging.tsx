/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";

export default function Debugging() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSquare = () => {
    console.log("Input value:", input);
    try {
      const num = Number(input);
      if (isNaN(num)) {
        throw new Error("Input must be a valid number.");
      }
      const squared = num * num;
      console.log("Squared value:", squared);
      setResult(`The square of ${num} is ${squared}.`);
      setError(null);
    } catch (err: any) {
      console.error("Error caught:", err.message);
      setResult(null);
      setError(err.message);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">3.7 – Debugging</h2>

        <p className="mt-2">
          Enter a number to test error handling and console logging:
        </p>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a number"
          />
          <button className="btn btn-outline-primary" onClick={handleSquare}>
            Square It
          </button>
        </div>

        {result && <div className="alert alert-success">{result}</div>}
        {error && <div className="alert alert-danger">Error: {error}</div>}
      </div>
    </div>
  );
}
