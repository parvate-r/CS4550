"use client";

import { useState } from "react";

const SERVER =
  process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";


export default function PathParams() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const sendRequest = async () => {
    const res = await fetch(`${SERVER}/lab5/helloPath/${name}`);
    const text = await res.text();
    setResult(text);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Path Params Example</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Enter name"
      />

      <button onClick={sendRequest} className="border p-2 bg-blue-200">
        Send
      </button>

      {result && <p className="mt-4">Server response: {result}</p>}
    </div>
  );
}
