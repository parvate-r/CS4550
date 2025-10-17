"use client";
import CourseNavigation from "../../Navigation";
import { FaQuestionCircle } from "react-icons/fa";
import "./quizzes.css";

export default function CourseQuizzes({ params }: { params: { id: string } }) {
  const { id } = params;

  const quizzes = [
    { title: "Quiz 1: HTML Basics", due: "May 10 2025", questions: 10 },
    { title: "Quiz 2: CSS & Layouts", due: "May 18 2025", questions: 8 },
    { title: "Quiz 3: React Fundamentals", due: "May 25 2025", questions: 12 },
  ];

  return (
    <div className="d-flex" id="wd-quizzes">
      <CourseNavigation courseId={id} />

      <div className="container mt-4 mb-5">
        <div className="card shadow-sm mb-4">
          <div className="card-body d-flex align-items-center">
            <FaQuestionCircle className="me-2 text-primary fs-4" />
            <h2 className="card-title mb-0">Quizzes – Course {id}</h2>
          </div>
        </div>

        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title mb-3">Available Quizzes</h5>
            <table className="table table-striped table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Title</th>
                  <th>Due Date</th>
                  <th>Questions</th>
                </tr>
              </thead>
              <tbody>
                {quizzes.map((q, idx) => (
                  <tr key={idx}>
                    <td>{q.title}</td>
                    <td>{q.due}</td>
                    <td>{q.questions}</td>
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
