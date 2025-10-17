"use client";
import CourseNavigation from "../../Navigation";
import { useState } from "react";
import { FaBook, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./modules.css";

export default function Modules({ params }: { params: { id: string } }) {
  const { id } = params;

  const modules = [
    {
      id: 1,
      title: "Module 1 - Introduction to Web Development",
      lessons: [
        "Lesson 1.1 - What is the Web?",
        "Lesson 1.2 - HTML Basics",
        "Lesson 1.3 - CSS Overview",
      ],
    },
    {
      id: 2,
      title: "Module 2 - React & Components",
      lessons: [
        "Lesson 2.1 - Introduction to React",
        "Lesson 2.2 - JSX and Components",
        "Lesson 2.3 - Props and State",
      ],
    },
    {
      id: 3,
      title: "Module 3 - Advanced Topics",
      lessons: [
        "Lesson 3.1 - Routing with Next.js",
        "Lesson 3.2 - APIs and Fetching Data",
        "Lesson 3.3 - Deployment",
      ],
    },
  ];

  const [openModules, setOpenModules] = useState<number[]>([1]);

  const toggleModule = (moduleId: number) => {
    setOpenModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  return (
    <div className="d-flex" id="wd-modules">
      <CourseNavigation courseId={id} />

      <div className="container mt-4 mb-5">
        <div className="card shadow-sm mb-4">
          <div className="card-body d-flex align-items-center">
            <FaBook className="me-2 text-primary fs-4" />
            <h2 className="card-title mb-0">Modules for Course {id}</h2>
          </div>
        </div>

        {/* Module Accordion */}
        <div className="accordion">
          {modules.map((module) => {
            const isOpen = openModules.includes(module.id);
            return (
              <div className="card mb-3 shadow-sm" key={module.id}>
                <div
                  className="card-header d-flex justify-content-between align-items-center module-header"
                  onClick={() => toggleModule(module.id)}
                  role="button"
                >
                  <span>{module.title}</span>
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {isOpen && (
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      {module.lessons.map((lesson, index) => (
                        <li key={index} className="list-group-item">
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
