"use client";
import Link from "next/link";

export default function Dashboard() {
  const courses = [
    { id: "1234", title: "CS4550 - Web Development" },
    { id: "5678", title: "CS5610 - Web Dev & UI" },
    { id: "2468", title: "CS5004 - Object-Oriented Design" },
    { id: "1357", title: "CS5800 - Algorithms" },
    { id: "4321", title: "CS3500 - Logic & Computation" },
    { id: "2469", title: "CS3200 - Database Systems" },
    { id: "6789", title: "CS6140 - Machine Learning" },
  ];

  return (
    <div className="container mt-4 mb-5">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h1 className="card-title">Kambaz Dashboard</h1>
          <p className="card-text">
            Welcome to your Kambaz course dashboard. Browse your enrolled courses below.
          </p>
        </div>
      </div>

      <h2 className="mb-3">Your Courses</h2>
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text text-muted">Course ID: {course.id}</p>
                <Link href={`/Kambaz/Courses/${course.id}`} className="btn btn-primary">
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
