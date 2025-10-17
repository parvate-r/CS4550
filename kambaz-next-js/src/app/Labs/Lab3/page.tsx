"use client";
import "./lab3.css";

import Variables from "./components/Variables";
import Conditionals from "./components/Conditionals";
import FunctionsExample from "./components/FunctionsExample";
import DataStructures from "./components/DataStructures";
import DynamicStyling from "./components/DynamicStyling";
import Parameterizing from "./components/Parameterizing";
import Debugging from "./components/Debugging";
import ChildExample from "./components/child/ChildExample";
import LocationExample from "./components/LocationExample";

export default function Lab3() {
  return (
    <div id="wd-lab3" className="container mt-4 mb-5">
      <h1 className="mb-4">Lab 3 — JavaScript & Data-Driven React</h1>

      {/* 3.2 JavaScript Basics */}
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h2 className="h5 mb-3">3.2 JavaScript Basics</h2>
          <Variables />
        </div>
      </div>

      {/* 3.2.6 Conditionals */}
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h2 className="h5 mb-3">3.2.6 Conditionals</h2>
          <Conditionals />
        </div>
      </div>

      {/* 3.3 Functions */}
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h2 className="h5 mb-3">3.3 Functions</h2>
          <FunctionsExample />
        </div>
      </div>

      {/* 3.4 Data Structures */}
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h2 className="h5 mb-3">3.4 Data Structures</h2>
          <DataStructures />
        </div>
      </div>

      {/* 3.5 Dynamic Styling */}
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h2 className="h5 mb-3">3.5 Dynamic Styling</h2>
          <DynamicStyling />
        </div>
      </div>

      {/* 3.6 Parameterizing Components */}
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h2 className="h5 mb-3">3.6 Parameterizing Components</h2>
          <Parameterizing />
        </div>
      </div>

      {/* 3.7 Debugging */}
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h2 className="h5 mb-3">3.7 Debugging</h2>
          <Debugging />
        </div>
      </div>

      {/* 3.8 Child Components */}
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h2 className="h5 mb-3">3.8 Child Components</h2>
          <ChildExample title={""} count={0} />
        </div>
      </div>

      {/* 3.9 Working with Location & Navigation */}
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h2 className="h5 mb-3">3.9 Working with Location & Navigation</h2>
          <LocationExample />
        </div>
      </div>

      {/* Path Parameters Examples */}
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <h2 className="h5 mb-3">Path Parameters Examples</h2>
          <p>
            Try these links (they render the Add component that reads path params):
          </p>
          <ul>
            <li>
              <a href="/Labs/Lab3/add/1/2" className="text-decoration-none">
                /Labs/Lab3/add/1/2
              </a>
            </li>
            <li>
              <a href="/Labs/Lab3/add/3/4" className="text-decoration-none">
                /Labs/Lab3/add/3/4
              </a>
            </li>
          </ul>
        </div>
      </div>

      <footer className="mt-4 text-center text-secondary">
        <small>CS4550 – Lab 3 (Rudra Parvate)</small>
      </footer>
    </div>
  );
}
