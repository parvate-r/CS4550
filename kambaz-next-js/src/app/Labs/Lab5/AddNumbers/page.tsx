"use client";

import { useState } from "react";
const SERVER =
  process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";


export default function AddNumbers() {
  const [a, setA] = useState("0");
  const [b, setB] = useState("0");
  const [result, setResult] = useState("");

  const addNumbers = async () => {
    const res = await fetch(`${SERVER}/lab5/add/${a}/${b}`);
    const json = await res.json();
    setResult(json.result);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Add Numbers</h2>

      <input className="border p-2 mr-2" value={a} onChange={(e) => setA(e.target.value)} />
      <input className="border p-2 mr-2" value={b} onChange={(e) => setB(e.target.value)} />

      <button onClick={addNumbers} className="border p-2 bg-blue-200">
        Add
      </button>

      {result !== "" && <p className="mt-4">Result: {result}</p>}
    </div>
  );
}
