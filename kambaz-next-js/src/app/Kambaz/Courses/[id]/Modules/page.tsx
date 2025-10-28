"use client";
import React from "react";
import { useParams } from "next/navigation";
import * as db from "../../../Database";

export default function CourseModulesPage() {
  const { id } = useParams();
  const course = db.courses.find((c) => c._id === id);
  const modules = db.modules.filter((m) => m.course === id);

  if (!course) {
    return (
      <div className="container mt-5">
        <h3 className="text-danger">Course not found.</h3>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5">
      <h2>{course.name} – Modules</h2>
      <hr />
      {modules.length === 0 && (
        <p className="text-muted">No modules available for this course.</p>
      )}

      <div className="accordion" id="modulesAccordion">
        {modules.map((module) => (
          <div className="accordion-item" key={module._id}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#module-${module._id}`}
                aria-expanded="false"
              >
                {module.name}
              </button>
            </h2>
            <div
              id={`module-${module._id}`}
              className="accordion-collapse collapse"
              data-bs-parent="#modulesAccordion"
            >
              <div className="accordion-body">
                {module.lessons && module.lessons.length > 0 ? (
                  <ul className="list-group list-group-flush">
                    {module.lessons.map((lesson, index) => (
                      <li
                        key={index}
                        className="list-group-item ps-4 d-flex align-items-center"
                      >
                        <i className="bi bi-journal-text me-2 text-secondary" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted mb-0">No lessons in this module.</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
