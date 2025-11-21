/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { users, enrollments } from "../../../Database";

export default function PeoplePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const enrolledUserIds = enrollments
    .filter((e: any) => e.course === id)
    .map((e: any) => e.user);

  const enrolledUsers = users.filter((u: any) =>
    enrolledUserIds.includes(u._id)
  );

  if (!enrolledUsers.length) {
    return (
      <div className="container mt-4">
        <h2>People</h2>
        <p className="text-danger">No users enrolled in <strong>{id}</strong>.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>People</h2>
      <hr />

      <ul className="list-group">
        {enrolledUsers.map((u: any) => (
          <li key={u._id} className="list-group-item">
            {u.firstName} {u.lastName} — {u.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
