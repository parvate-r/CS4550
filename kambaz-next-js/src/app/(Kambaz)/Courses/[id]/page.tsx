"use client";
import CourseNavigation from "../Navigation";
import { FaChalkboard } from "react-icons/fa";
import "./course-details.css";

export default function CourseHome({ params }: { params: { id: string } }) {
  const { id } = params;

  const courseDetails: Record<string, { title: string; description: string }> = {
    "1234": { title: "CS4550 - Web Development", description: "Full-stack web development with React, Node.js, and MongoDB." },
    "5678": { title: "CS5610 - Web Dev & UI", description: "Advanced front-end design and UI development." },
    "2468": { title: "CS5004 - Object-Oriented Design", description: "Principles of object-oriented programming using Java." },
    "1357": { title: "CS5800 - Algorithms", description: "Design and analysis of efficient algorithms." },
    "4321": { title: "CS3500 - Logic & Computation", description: "Formal reasoning and computation theory." },
    "2469": { title: "CS3200 - Database Systems", description: "Relational databases, SQL, and data modeling." },
  };

  const course = courseDetails[id] || { title: `Course ${id}`, description: "Course description not available." };

  return (
    <div className="d-flex" id="wd-course-details">
      {/* Sidebar navigation */}
      <CourseNavigation courseId={id} />

      {/* Main content */}
      <div className="container mt-4 mb-5">
        <div className="card shadow-sm mb-4">
          <div className="card-body d-flex align-items-center">
            <FaChalkboard className="me-2 text-primary fs-4" />
            <h2 className="card-title mb-0">{course.title}</h2>
          </div>
        </div>

        <p className="text-muted mb-4">{course.description}</p>

        <div className="card bg-light shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Welcome to {course.title}</h5>
            <p className="card-text">
              Use the left-hand navigation to access:
              <br />- Modules<br />- Assignments<br />- Grades<br />- People<br />- Piazza<br />- Zoom<br />- Quizzes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
