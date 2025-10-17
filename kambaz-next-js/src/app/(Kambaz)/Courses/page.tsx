"use client";
import Link from "next/link";
import { FaBookOpen, FaArrowRight } from "react-icons/fa";
import "./courses.css";

export default function Courses() {
  const courses = [
    {
      id: "1234",
      title: "CS4550 – Web Development",
      description: "Learn full-stack web development with React, Node.js, and MongoDB.",
      term: "Fall 2025",
      image: "/images/webdev.jpg",
    },
    {
      id: "5678",
      title: "CS5610 – Web Dev & UI",
      description: "Advanced topics in front-end and user interface design.",
      term: "Fall 2025",
      image: "/images/uiux.jpg",
    },
    {
      id: "2468",
      title: "CS5004 – Object-Oriented Design",
      description: "Core object-oriented programming principles using Java.",
      term: "Fall 2025",
      image: "/images/java.jpg",
    },
    {
      id: "1357",
      title: "CS5800 – Algorithms",
      description: "Design and analysis of efficient algorithms for problem solving.",
      term: "Fall 2025",
      image: "/images/algorithms.jpg",
    },
    {
      id: "4321",
      title: "CS3500 – Logic & Computation",
      description: "Explore formal logic and computation theory foundations.",
      term: "Fall 2025",
      image: "/images/logic.jpg",
    },
    {
      id: "2469",
      title: "CS3200 – Database Systems",
      description: "Learn relational databases, SQL, and data modeling.",
      term: "Fall 2025",
      image: "/images/database.jpg",
    },
  ];

  return (
    <div id="wd-courses" className="container mt-4 mb-5">
      {/* Page Header */}
      <div className="card shadow-sm mb-4">
        <div className="card-body d-flex align-items-center">
          <FaBookOpen className="me-2 text-primary fs-4" />
          <h1 className="card-title mb-0">All Courses</h1>
        </div>
      </div>

      {/* Course Grid */}
      <div className="row g-4">
        {courses.map((course) => (
          <div key={course.id} className="col-sm-6 col-lg-4">
            <div className="card h-100 course-card shadow-sm border-0">
              <img
                src={course.image}
                className="card-img-top course-img"
                alt={course.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary">{course.title}</h5>
                <p className="card-text text-muted mb-1">{course.term}</p>
                <p className="card-text flex-grow-1">{course.description}</p>
                <Link
                  href={`/Kambaz/Courses/${course.id}`}
                  className="btn btn-outline-primary mt-auto d-flex align-items-center justify-content-center gap-2"
                >
                  View Course <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
