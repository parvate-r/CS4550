"use client";
import Link from "next/link";
import { FaChalkboardTeacher } from "react-icons/fa";
import "./dashboard.css";
import { courses } from "../data/courses";


export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="container mt-4 mb-5">
      {/* Header Card */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h1 className="card-title d-flex align-items-center">
            <FaChalkboardTeacher className="me-2 text-primary" />
            Kambaz Dashboard
          </h1>
          <p className="card-text text-muted">
            Welcome to your Kambaz course dashboard. Browse your enrolled courses below.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <h2 className="mb-3 text-secondary">Your Courses</h2>
      <div className="row g-4">
        {courses.map((course) => (
          <div key={course.id} className="col-sm-6 col-lg-4">
            <div className="card h-100 course-card shadow-sm border-0">
              <img
                src={`/images/default.jpg`}
                className="card-img-top course-img"
                alt={course.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text text-muted mb-4">Course ID: {course.id}</p>
                <Link
                  href={`/Kambaz/Courses/${course.id}`}
                  className="btn btn-primary mt-auto"
                >
                  View Course
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
