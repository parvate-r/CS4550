"use client";
import CourseNavigation from "../../Navigation";
import { FaUsers } from "react-icons/fa";
import "./people.css";

export default function People({ params }: { params: { id: string } }) {
  const { id } = params;

  const people = [
    { name: "Rudra Parvate", role: "Student", email: "parvate.r@northeastern.edu" },
    { name: "Alice Johnson", role: "Student", email: "example@northeastern.edu" },
    { name: "Bob Smith", role: "Student", email: "example@northeastern.edu" },
    { name: "Charlie Nguyen", role: "Student", email: "example@northeastern.edu" },
    { name: "Dana Lee", role: "TA", email: "example@northeastern.edu" },
  ];

  return (
    <div className="d-flex" id="wd-people">
      <CourseNavigation courseId={id} />

      <div className="container mt-4 mb-5">
        <div className="card shadow-sm mb-4">
          <div className="card-body d-flex align-items-center">
            <FaUsers className="me-2 text-primary fs-4" />
            <h2 className="card-title mb-0">People in Course {id}</h2>
          </div>
        </div>

        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title mb-3">Enrolled Members</h5>
            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {people.map((person, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar me-2">{person.name[0]}</div>
                          {person.name}
                        </div>
                      </td>
                      <td>{person.role}</td>
                      <td>
                        <a href={`mailto:${person.email}`} className="text-decoration-none">
                          {person.email}
                        </a>
                      </td>
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
