"use client";
import React from "react";
import { useParams } from "next/navigation";
import * as db from "../../../Database";

export default function CoursePeoplePage() {
  const { id } = useParams();

  const course = db.courses.find((c) => c._id === id);
  const enrollments = db.enrollments.filter((e) => e.course === id);
  const users = enrollments.map((enrollment) =>
    db.users.find((user) => user._id === enrollment.user)
  );

  if (!course) {
    return (
      <div className="container mt-5">
        <h3 className="text-danger">Course not found.</h3>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5">
      <h2>{course.name} – People</h2>
      <hr />

      {users.length === 0 ? (
        <p className="text-muted">No enrolled users for this course.</p>
      ) : (
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              (user) =>
                user && (
                  <tr key={user._id}>
                    <td>{user.fullName}</td>
                    <td>@{user.username}</td>
                    <td>{user.role}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
