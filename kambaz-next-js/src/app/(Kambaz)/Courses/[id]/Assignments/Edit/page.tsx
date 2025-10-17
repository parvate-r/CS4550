"use client";
import CourseNavigation from "../../../Navigation";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import "./edit.css";

export default function AssignmentEditor({ params }: { params: { id: string } }) {
  const { id } = params;

  const [name, setName] = useState("New Assignment");
  const [description, setDescription] = useState("Enter details here...");
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState("2025-05-13");
  const [availableFrom, setAvailableFrom] = useState("2025-05-01");
  const [untilDate, setUntilDate] = useState("2025-06-01");
  const [assignTo, setAssignTo] = useState("Everyone");

  return (
    <div className="d-flex" id="wd-assignment-editor">
      <CourseNavigation courseId={id} />
      <div className="container mt-4 mb-5" style={{ maxWidth: 720 }}>
        <div className="card shadow-sm mb-4">
          <div className="card-body d-flex align-items-center">
            <FaEdit className="me-2 text-primary fs-4" />
            <h2 className="card-title mb-0">Edit Assignment</h2>
          </div>
        </div>

        <form>
          <div className="mb-3">
            <label htmlFor="assignmentName" className="form-label">Name</label>
            <input
              type="text"
              id="assignmentName"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="assignmentDescription" className="form-label">Description</label>
            <textarea
              id="assignmentDescription"
              className="form-control"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="assignmentPoints" className="form-label">Points</label>
            <input
              type="number"
              id="assignmentPoints"
              className="form-control"
              value={points}
              onChange={e => setPoints(Number(e.target.value))}
              min={0}
            />
          </div>

          <div className="row mb-3">
            <div className="col">
              <label htmlFor="assignmentDueDate" className="form-label">Due Date</label>
              <input
                type="date"
                id="assignmentDueDate"
                className="form-control"
                value={dueDate}
                onChange={e => setDueDate(e.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="assignmentAvailableFrom" className="form-label">Available From</label>
              <input
                type="date"
                id="assignmentAvailableFrom"
                className="form-control"
                value={availableFrom}
                onChange={e => setAvailableFrom(e.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="assignmentUntilDate" className="form-label">Until</label>
              <input
                type="date"
                id="assignmentUntilDate"
                className="form-control"
                value={untilDate}
                onChange={e => setUntilDate(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="assignmentAssignTo" className="form-label">Assign To</label>
            <input
              type="text"
              id="assignmentAssignTo"
              className="form-control"
              value={assignTo}
              onChange={e => setAssignTo(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">Save Assignment</button>
        </form>
      </div>
    </div>
  );
}
