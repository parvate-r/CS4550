/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { modules } from "../../../Database";

export default function ModulesPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const courseModules = modules.filter((m: any) => m.course === id);

  if (!courseModules.length) {
    return (
      <div className="container mt-4">
        <h2>Modules</h2>
        <p className="text-danger">
          No modules found for course <strong>{id}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Modules</h2>
      <hr />

      {courseModules.map((m: any) => (
        <div key={m._id} className="card mb-3">
          <div className="card-body">
            <h5>{m.name}</h5>
            <p>{m.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
