"use client";
import React from "react";

export default function Functions() {
  
  function sum(a: number, b: number): number {
    return a + b;
  }

  
  const multiply = (a: number, b: number): number => {
    return a * b;
  };

  
  const divide = (a: number, b: number): number => a / b;

  
  const formatOperation = (a: number, b: number, op: string, result: number) =>
    `${a} ${op} ${b} = ${result}`;

  
  const x = 20;
  const y = 5;
  const total = sum(x, y);
  const product = multiply(x, y);
  const quotient = divide(x, y);

  const sumText = formatOperation(x, y, "+", total);
  const multiplyText = formatOperation(x, y, "×", product);
  const divideText = formatOperation(x, y, "÷", quotient);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">3.3 – JavaScript Functions</h2>

        <h5 className="mt-3">Function Outputs</h5>
        <ul>
          <li>{sumText}</li>
          <li>{multiplyText}</li>
          <li>{divideText}</li>
        </ul>

        <h5 className="mt-4">Function Types</h5>
        <ul>
          <li><strong>sum</strong>: traditional function</li>
          <li><strong>multiply</strong>: arrow with explicit return</li>
          <li><strong>divide</strong>: arrow with implied return</li>
        </ul>

        <p className="mt-3 text-secondary">
          Template literals and arrow functions help simplify logic and keep code concise.
        </p>
      </div>
    </div>
  );
}
