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
    { id: "6789", title: "CS6140 - Machine Learning" }
  ];

  return (
    <div className="container mt-4">
      <h2>Kambaz Dashboard</h2>
      <div className="row g-4 mt-2">
        {courses.map(course => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={course.id}>
            <div className="card h-100 border-primary">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <Link
                  href={`/Courses/${course.id}`}
                  className="btn btn-outline-primary mt-auto"
                >
                  Go to Course
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
