"use client";

import { useState } from "react";

const SERVER =
  process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";


export default function Calc() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState("add");
  const [result, setResult] = useState("");

  const calculate = async () => {
    const url = `${SERVER}/lab5/calc?op=${op}&a=${a}&b=${b}`;
    const res = await fetch(url);
    const json = await res.json();
    setResult(JSON.stringify(json, null, 2));
  };

  return (
    <div className="p-4 flex flex-col gap-2">
      <h2 className="text-xl font-bold">Calculator</h2>

      <input className="border p-2" placeholder="a" value={a} onChange={(e) => setA(e.target.value)} />
      <input className="border p-2" placeholder="b" value={b} onChange={(e) => setB(e.target.value)} />

      <select className="border p-2" value={op} onChange={(e) => setOp(e.target.value)}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>

      <button onClick={calculate} className="border p-2 bg-blue-200">
        Calculate
      </button>

      {result && (
        <pre className="mt-4 bg-gray-100 p-2 border">{result}</pre>
      )}
    </div>
  );
}
