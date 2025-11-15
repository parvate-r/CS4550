"use client";

import { useState } from "react";

const SERVER = "http://localhost:4000";

export default function QueryParams() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const sendQuery = async () => {
    const res = await fetch(
      `${SERVER}/lab5/helloQuery?name=${encodeURIComponent(name)}`
    );
    const text = await res.text();
    setResult(text);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Query Params Example</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Enter your name"
      />

      <button onClick={sendQuery} className="border p-2 bg-blue-200">
        Send
      </button>

      {result && <p className="mt-4">Server response: {result}</p>}
    </div>
  );
}
