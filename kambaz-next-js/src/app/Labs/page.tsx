"use client";
import Link from "next/link";
import "./labs.css";

export default function Labs() {
  return (
    <div className="container mt-4 mb-5">
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h1 className="card-title">CS4550 Labs – Rudra Parvate</h1>
          <p className="card-text mb-2">
            Welcome! This page contains links and navigation for all labs and major project sections.
          </p>
          <p className="card-text mb-0">
            Section 11597 | <a id="wd-github" href="https://github.com/parvate-r/cs4550" target="_blank" rel="noopener noreferrer">Project Github Repo</a>
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Labs Navigation</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <Link className="text-decoration-none" href="/Labs/Lab1">Lab 1 – HTML Basics</Link>
            </li>
            <li className="list-group-item">
              <Link className="text-decoration-none" href="/Labs/Lab2">Lab 2 – CSS & Bootstrap</Link>
            </li>
            <li className="list-group-item">
              <Link className="text-decoration-none" href="/Labs/Lab3">Lab 3 – Bootstrap Grid System</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h3 className="card-title mb-2">Major Project Links</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <Link className="text-decoration-none" href="/Kambaz">Kambaz Dashboard</Link>
            </li>
            <li className="list-group-item">
              <Link className="text-decoration-none" href="/Account/Signin">Account / Sign In</Link>
            </li>
          </ul>
        </div>
      </div>

      <footer className="mt-4 text-center">
        <span className="text-secondary">Made for CS4550, Northeastern University</span>
      </footer>
    </div>
  );
}
