"use client";
import { useState } from "react";

export default function CourseModules() {
  const [expanded, setExpanded] = useState([true, false, false]);
  const modules = [
    {
      title: "Module 1: HTML Basics",
      lessons: ["Intro to HTML", "Tags & Structure", "Lab: Basic HTML"],
    },
    {
      title: "Module 2: CSS & Layouts",
      lessons: ["Selectors", "Flexbox", "Grid", "Lab: CSS Styling"],
    },
    {
      title: "Module 3: React Fundamentals",
      lessons: ["JSX", "Components", "Props & State", "Project: Kambaz UI"],
    },
  ];

  const toggleModule = (idx: number) => {
    setExpanded(expanded =>
      expanded.map((open, i) => (i === idx ? !open : open))
    );
  };

  return (
    <div className="container mt-4">
      <h2>Modules</h2>
      <div className="accordion" id="modulesAccordion">
        {modules.map((mod, idx) => (
          <div className="accordion-item mb-2 border" key={mod.title}>
            <h4
              className="accordion-header p-3 bg-light"
              onClick={() => toggleModule(idx)}
              style={{ cursor: "pointer", borderLeft: "4px solid #0d6efd" }}
            >
              {mod.title}
            </h4>
            {expanded[idx] && (
              <div className="accordion-body bg-white p-3">
                <ul>
                  {mod.lessons.map(lesson => (
                    <li key={lesson} className="mb-1">
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
