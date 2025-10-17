"use client";

import { useParams } from "next/navigation";

export default function AddPathParameters() {
  const params = useParams() as { a?: string; b?: string };
  const a = parseInt(params?.a ?? "0", 10);
  const b = parseInt(params?.b ?? "0", 10);
  const sum = a + b;

  return (
    <div className="container mt-4">
      <h3>Add Path Parameters</h3>
      <p>Params: a = {a}, b = {b}</p>
      <p>Sum: {sum}</p>
    </div>
  );
}
