"use client";

import Link from "next/link";

export default function Dashboard() {
  const courses = [
    { id: "1234", title: "CS4550 - Web Development" },
    { id: "5678", title: "CS5610 - Web Dev & UI" },
    { id: "2468", title: "CS5004 - Object-Oriented Design" },
    { id: "1357", title: "CS5800 - Algorithms" },
  ];

  return (
    <div id="wd-dashboard">
      <h1>Dashboard</h1>
      <h2>Published Courses</h2>

      <div className="wd-courses" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {courses.map((course) => (
          <div
            key={course.id}
            className="wd-course-card"
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "220px",
            }}
          >
            <h3>{course.title}</h3>
            <Link href={`/Kambaz/Courses/${course.id}`}>
              Go to Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
