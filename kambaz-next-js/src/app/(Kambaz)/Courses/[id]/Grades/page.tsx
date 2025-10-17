"use client";
import CourseNavigation from "../../Navigation";
import { FaChartBar } from "react-icons/fa";
import "./grades.css";

export default function CourseGrades({ params }: { params: { id: string } }) {
  const { id } = params;

  const grades = [
    { assignment: "A1: Core HTML", score: 98, total: 100, feedback: "Great job!" },
    { assignment: "A2: CSS & React", score: 92, total: 100, feedback: "Well done." },
    { assignment: "Lab: Flex Box", score: 18, total: 20, feedback: "Solid work." },
  ];

  const average =
    Math.round(
      (grades.reduce((sum, g) => sum + (g.score / g.total) * 100, 0) / grades.length) * 10
    ) / 10;

  return (
    <div className="d-flex" id="wd-grades">
      <CourseNavigation courseId={id} />

      <div className="container mt-4 mb-5">
        <div className="card shadow-sm mb-4">
          <div className="card-body d-flex align-items-center">
            <FaChartBar className="me-2 text-primary fs-4" />
            <h2 className="card-title mb-0">Grades – Course {id}</h2>
          </div>
        </div>

        <div className="card shadow-sm mb-3">
          <div className="card-body">
            <h5 className="card-title">Overall Average</h5>
            <p className="lead mb-0 text-success fw-bold">{average}%</p>
          </div>
        </div>

        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title mb-3">Assignment Grades</h5>
            <table className="table table-striped table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Assignment</th>
                  <th>Score</th>
                  <th>Total</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((g, idx) => (
                  <tr key={idx}>
                    <td>{g.assignment}</td>
                    <td>{g.score}</td>
                    <td>{g.total}</td>
                    <td>{g.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
