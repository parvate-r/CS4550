"use client";

import Link from "next/link";

export default function NavigationSidebar() {
  return (
    <div
      id="wd-navigation-sidebar"
      style={{
        width: "200px",
        minHeight: "100vh",
        borderRight: "1px solid #ccc",
        padding: "1rem",
        backgroundColor: "#f9f9f9",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li style={{ marginBottom: "0.5rem" }}>
          <a
            href="https://www.northeastern.edu"
            target="_blank"
            rel="noreferrer"
          >
            NEU
          </a>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link href="/Kambaz/Account/Signin">Account</Link>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link href="/Kambaz/Dashboard">Dashboard</Link>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link href="/Kambaz/Courses/1234">Courses</Link>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link href="/Kambaz/Calendar">Calendar</Link>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link href="/Kambaz/Inbox">Inbox</Link>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <Link href="/Labs">Labs</Link>
        </li>
      </ul>
    </div>
  );
}
