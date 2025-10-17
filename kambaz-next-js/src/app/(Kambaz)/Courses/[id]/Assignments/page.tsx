"use client";
import CourseNavigation from "../../Navigation";
import Link from "next/link";
import { FaClipboardList, FaEdit } from "react-icons/fa";
import "./assignments.css";

export default function CourseAssignments({ params }: { params: { id: string } }) {
  const { id } = params;

  const assignments = [
    { title: "A1: Core HTML", due: "May 15 2025", points: 100 },
    { title: "A2: CSS & React Basics", due: "May 22 2025", points: 100 },
    { title: "Lab – Flex /Grid CSS", due: "May 25 2025", points: 20 },
  ];

  return (
    <div className="d-flex" id="wd-assignments">
      <CourseNavigation courseId={id} />

      <div className="container mt-4 mb-5">
        {/* Header */}
        <div className="card shadow-sm mb-4">
          <div className="card-body d-flex align-items-center">
            <FaClipboardList className="me-2 text-primary fs-4" />
            <h2 className="card-title mb-0">Assignments – Course {id}</h2>
          </div>
        </div>

        {/* Table */}
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Assignments List</h5>
              <Link href={`/Kambaz/Courses/${id}/Assignments/Edit`} className="btn btn-primary">
                <FaEdit className="me-2" />Add / Edit Assignment
              </Link>
            </div>

            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle">
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
          </div>
        </div>
      </div>
    </div>
  );
}
