"use client";
import { useState } from "react";

export default function DateState() {
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));

  return (
    <div className="mb-4">
      <h4>Date State Example</h4>
      <input
        type="date"
        className="form-control mb-2"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <p>Selected Date: {date}</p>
    </div>
  );
}
