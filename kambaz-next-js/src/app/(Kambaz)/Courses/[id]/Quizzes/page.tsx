"use client";

export default function CourseQuizzes() {
  // Example quiz data. Replace with your course's quizzes.
  const quizzes = [
    { title: "Quiz 1: HTML Basics", due: "2025", questions: 10 },
    { title: "Quiz 2: CSS & Layouts", due: "2025", questions: 8 },
    { title: "Quiz 3: React Fundamentals", due: "2025", questions: 12 }
  ];

  return (
    <div className="container mt-4">
      <h2>Quizzes</h2>
      <table className="table table-bordered table-hover mt-3">
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
  );
}
