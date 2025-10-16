"use client";
import "./lab2.css";
import { Alert, Button } from "react-bootstrap";


export default function Lab2() {
  return (
    <div className="container mt-4 mb-5">
      {/* Element Selector Demo */}
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title mb-3">Element Selector Demo</h2>
          <p className="element-selector">
            This is styled with an element selector (should be blue).
          </p>
        </div>
      </div>

      {/* ID Selector Demo */}
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title mb-3">ID Selector Demo</h2>
          <p id="example-id">
            This is styled with an ID selector (should be purple & bold).
          </p>
        </div>
      </div>

      {/* Required Rubric Demos */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <p id="white-on-red" className="mb-2">
                This is white text on a red background (ID, rubric-required)
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <p id="black-on-yellow" className="mb-2">
                Black on yellow using an ID (rubric-required)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Table Demo */}
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Movies Table</h2>
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-light">
              <tr>
                <th>Movie</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Inception</td>
                <td>2010</td>
              </tr>
              <tr>
                <td>The Matrix</td>
                <td>1999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Book Table Demo */}
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Books Table</h2>
          <table className="table table-bordered table-striped">
            <thead className="table-light">
              <tr>
                <th>Book</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1984</td>
                <td>George Orwell</td>
              </tr>
              <tr>
                <td>Dune</td>
                <td>Frank Herbert</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Card Demo */}
      <div className="card mb-4 bg-light shadow">
        <div className="card-body">
          <h2 className="card-title">Bootstrap Card Demo</h2>
          <p>
            This card uses Bootstrap styles!
          </p>
        </div>
      </div>

          {/* Typography & Hover Demo */}
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title mb-3">Typography & Hover Demo</h2>
          <p className="font-demo">
            This paragraph uses the <code>.font-demo</code> class to change font, size, and alignment.
          </p>
          <p>
            Hover over this text to see the <code>p:hover</code> style turn it blue.
          </p>
        </div>
      </div>

      {/* Table Demo (Non-Bootstrap) */}
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title mb-3">Custom Table (CSS-only)</h2>
          <table className="table-demo">
            <thead>
              <tr><th>Language</th><th>Creator</th></tr>
            </thead>
            <tbody>
              <tr><td>Python</td><td>Guido van Rossum</td></tr>
              <tr><td>JavaScript</td><td>Brendan Eich</td></tr>
              <tr><td>Go</td><td>Robert Griesemer</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* React Bootstrap Demo */}
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title mb-3">React Bootstrap Components</h2>
          <Alert variant="info">
            This is a <strong>React Bootstrap Alert</strong> example.
          </Alert>
          <Button variant="success" className="transition-demo mt-2">
            React Bootstrap Button
          </Button>
        </div>
      </div>


    </div>
  );
}
