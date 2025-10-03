"use client";

import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <h2>Assignments</h2>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search Assignments"
          style={{ marginRight: "1rem" }}
        />
        <button>+ Assignment</button>
      </div>

      <ul>
        <li>
          <Link href="./Assignments/Edit">Assignment 1</Link>
        </li>
        <li>
          <Link href="./Assignments/Edit">Assignment 2</Link>
        </li>
      </ul>

      <h3>Quizzes</h3>
      <ul>
        <li>Quiz 1 - HTML</li>
        <li>Quiz 2 - CSS</li>
      </ul>

      <h3>Exams</h3>
      <ul>
        <li>Midterm Exam</li>
        <li>Final Exam</li>
      </ul>

      <h3>Project</h3>
      <ul>
        <li>Final Group Project</li>
      </ul>
    </div>
  );
}
