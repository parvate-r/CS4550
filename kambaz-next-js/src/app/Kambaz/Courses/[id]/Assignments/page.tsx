"use client";

export default function CourseAssignments() {
  const assignments = [
    { title: "A1: Core HTML", due: "2025", points: 100 },
    { title: "A2: CSS & React Basics", due: "2025", points: 100 },
    { title: "Lab: Flex/Grid CSS", due: "2025", points: 20 }
  ];

  return (
    <div className="container mt-4">
      <h2>Assignments</h2>
      <table className="table table-bordered table-hover mt-3">
        <thead className="table-light">
          <tr>
            <th>Title</th>
            <th>Due Date</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a, idx) => (
            <tr key={idx}>
              <td>{a.title}</td>
              <td>{a.due}</td>
              <td>{a.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
