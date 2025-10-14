"use client";

export default function CourseGrades() {
  const grades = [
    { assignment: "A1: Core HTML", score: 98, total: 100, feedback: "Great job!" },
    { assignment: "A2: CSS & React", score: 92, total: 100, feedback: "Well done." },
    { assignment: "Lab: Flex Box", score: 18, total: 20, feedback: "Solid work." }
  ];

  return (
    <div className="container mt-4">
      <h2>Grades</h2>
      <table className="table table-bordered table-hover mt-3">
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
  );
}
