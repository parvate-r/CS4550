"use client";

export default function Modules() {
  return (
    <div id="wd-modules">
      <h2>Modules</h2>

      {/* Buttons at the top */}
      <div style={{ marginBottom: "1rem" }}>
        <button>Collapse All</button>
        <button>View Progress</button>
        <button>+ Module</button>
      </div>

      {/* Module 1 */}
      <div className="wd-module">
        <h3>Module 1: Introduction to Web Development</h3>
        <ul>
          <li>Lesson 1.1 - Course Overview</li>
          <li>Lesson 1.2 - What is HTML?</li>
          <li>Lesson 1.3 - Setting up Development Environment</li>
        </ul>
      </div>

      {/* Module 2 */}
      <div className="wd-module">
        <h3>Module 2: HTML Basics</h3>
        <ul>
          <li>Lesson 2.1 - Headings, Paragraphs, and Lists</li>
          <li>Lesson 2.2 - Links and Images</li>
          <li>Lesson 2.3 - Forms Overview</li>
        </ul>
      </div>

      {/* Module 3 */}
      <div className="wd-module">
        <h3>Module 3: CSS Fundamentals</h3>
        <ul>
          <li>Lesson 3.1 - Selectors and Properties</li>
          <li>Lesson 3.2 - Colors, Fonts, and Text Styling</li>
          <li>Lesson 3.3 - Box Model and Spacing</li>
        </ul>
      </div>
    </div>
  );
}
