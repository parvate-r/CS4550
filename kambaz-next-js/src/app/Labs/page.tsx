"use client";
import Link from "next/link";
import LabsTOC from "./TOC";
import "./labs.css";

export default function Labs() {
  return (
    <div className="container mt-4 mb-5">

      {/* Header */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h1 className="card-title">CS4550 Labs – Rudra Parvate</h1>

          <p className="card-text mb-1">
            Section 11597 — Northeastern University
          </p>

          <p className="card-text mb-3">
            Welcome! This is the Lab Exercises landing page, including navigation
            to all labs, project links, and required resources.
          </p>

          {/* Source Code & API */}
          <h5>Source Code</h5>
          <ul>
            <li>
              <a
                href="https://github.com/parvate-r/CS4550"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository (Next.js + Node API)
              </a>
            </li>
          </ul>

          <h5 className="mt-3">Render API Deployment</h5>
          <ul>
            <li>
              <a
                href="https://kambaz-node-server.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Express Server on Render
              </a>
            </li>
          </ul>

          <Link href="/Kambaz" className="btn btn-primary mt-2">
            Go to Kambaz Application
          </Link>
        </div>
      </div>

      {/* Table of Contents Navigation */}
      <LabsTOC />

      {/* Project Links */}
      <div className="card mb-4 mt-3">
        <div className="card-body">
          <h3 className="card-title mb-2">Major Project Links</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <Link className="text-decoration-none" href="/Kambaz">
                Kambaz Dashboard
              </Link>
            </li>
            <li className="list-group-item">
              <Link className="text-decoration-none" href="/Account/Signin">
                Account / Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-4 text-center">
        <span className="text-secondary">
          Made for CS4550, Northeastern University
        </span>
      </footer>
    </div>
  );
}
