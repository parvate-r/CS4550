"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h2>Dashboard</h2>
      <h3>Published Courses</h3>

      <div className="course-card">
        <h3>CS4550 Web Development</h3>
        <p>Spring 2025</p>
        <Link href="/Kambaz/Courses/1234">Go to Course</Link>
      </div>

      <div className="course-card">
        <h3>CS5610 Full Stack Development</h3>
        <p>Summer 2025</p>
        <Link href="/Kambaz/Courses/5678">Go to Course</Link>
      </div>

      <div className="course-card">
        <h3>CS5200 Database Systems</h3>
        <p>Fall 2025</p>
        <Link href="/Kambaz/Courses/9012">Go to Course</Link>
      </div>
    </div>
  );
}
