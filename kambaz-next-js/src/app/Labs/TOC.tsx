"use client";
import Link from "next/link";

export default function LabsTOC() {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">Labs Navigation</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="text-decoration-none" href="/Labs/Lab1">
              Lab 1 – HTML Basics
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="text-decoration-none" href="/Labs/Lab2">
              Lab 2 – CSS & Bootstrap
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="text-decoration-none" href="/Labs/Lab3">
              Lab 3 – JavaScript Fundamentals
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="text-decoration-none" href="/Labs/Lab4">
              Lab 4 – Maintaining State in React Applications
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="text-decoration-none" href="/Labs/Lab5">
              Lab 5 – Server Communication (Node + Express)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
