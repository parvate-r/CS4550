"use client";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";

export default function ReduxExamples() {
  return (
    <div className="mt-4">
      <h3>Redux Examples</h3>
      <CounterRedux />
      <AddRedux />
    </div>
  );
}