/* eslint-disable prefer-const */
"use client";
import React from "react";

export default function Variables() {
  let course = "CS4550 Web Development";
  const semester = "Fall 2025";
  let credits = 4;
  const enrolled = true;
  const startDate = new Date("2025-09-04");

  let studentCount = 23;
  studentCount += 5;

  let enrollmentStatus = "";
  if (enrolled) {
    enrollmentStatus = "You are currently enrolled!";
  } else {
    enrollmentStatus = "You are not enrolled yet.";
  }

  const workload = credits > 3 ? "Full-time workload" : "Part-time workload";

  const summary = `${course} (${semester}) — ${credits} credits. ${workload}.`;

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">3.2 – JavaScript Variables and Constants</h2>

        <h5 className="mt-3">Variables and Data Types</h5>
        <ul>
          <li>Course: {course}</li>
          <li>Semester: {semester}</li>
          <li>Credits: {credits}</li>
          <li>Students Enrolled: {studentCount}</li>
          <li>Start Date: {startDate.toDateString()}</li>
        </ul>

        <h5 className="mt-4">Conditional Logic</h5>
        <p>{enrollmentStatus}</p>
        <p>{workload}</p>

        <h5 className="mt-4">Template Literal Summary</h5>
        <p>{summary}</p>
      </div>
    </div>
  );
}
