"use client";
import React from "react";
import { useParams, usePathname } from "next/navigation";

function Greeting({ name, course }: { name: string; course: string }) {
  return (
    <p>
      Hello <strong>{name}</strong>! Welcome to {course}.
    </p>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border rounded p-3 mb-2">
      <h5 className="text-primary">{title}</h5>
      {children}
    </div>
  );
}

export default function ParameterizingComponents() {
  const params = useParams();
  const pathname = usePathname();

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">3.6 – Parameterizing Components</h2>

        <h5 className="mt-3">Passing Props</h5>
        <Greeting name="Rudra" course="CS4550 Web Development" />

        <h5 className="mt-4">Using Children</h5>
        <Card title="Reusable Component">
          <p>This content is passed as a child to the Card component.</p>
          <p>It can be any valid React node — text, elements, or other components.</p>
        </Card>

        <h5 className="mt-4">Reading Route Information</h5>
        <p><strong>Pathname:</strong> {pathname}</p>
        <p><strong>Params:</strong> {JSON.stringify(params)}</p>
      </div>
    </div>
  );
}
