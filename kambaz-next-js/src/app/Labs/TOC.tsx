"use client";
import Link from "next/link";

export default function LabsTOC() {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title mb-4">Labs Table of Contents</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <Link className="text-decoration-none" href="/Labs/Lab1">Lab 1: HTML Basics</Link>
            </li>
            <li className="list-group-item">
              <Link className="text-decoration-none" href="/Labs/Lab2">Lab 2: CSS and Bootstrap</Link>
            </li>
            <li className="list-group-item">
              <Link className="text-decoration-none" href="/Labs/Lab3">Lab 3: Bootstrap Grid</Link>
            </li>
            <li className="list-group-item">
              <Link className="text-decoration-none" href="/Kambaz">Kambaz Project</Link>
            </li>
            <li className="list-group-item">
              <Link className="text-decoration-none" href="/Account/Signin">Account / Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
