"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { addAssignment, deleteAssignment, Assignment } from "../store/assignmentsSlice";
import { Module } from "../store/modulesSlice";

export default function Assignments() {
  const dispatch = useDispatch();
  const modules = useSelector((state: RootState) => state.modules as Module[]);
  const assignments = useSelector((state: RootState) => state.assignments as Assignment[]);

  const [moduleId, setModuleId] = useState(modules[0]?.id || "");
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const createAssignment = () => {
    if (!title.trim() || !moduleId) return;
    dispatch(addAssignment({ moduleId, title, dueDate }));
    setTitle("");
    setDueDate("");
  };

  return (
    <div id="wd-kambaz-assignments" className="mb-4">
      <h4>Kambaz Assignments</h4>

      <select
        id="wd-assignment-module"
        className="form-control mb-2"
        value={moduleId}
        onChange={(e) => setModuleId(e.target.value)}
      >
        {modules.map((m) => (
          <option value={m.id} key={m.id}>
            {m.title}
          </option>
        ))}
      </select>

      <input
        id="wd-assignment-title"
        className="form-control mb-2"
        placeholder="Assignment Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        id="wd-assignment-due"
        type="date"
        className="form-control mb-2"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button id="wd-create-assignment" className="btn btn-primary mb-3" onClick={createAssignment}>
        Create Assignment
      </button>

      <ul className="list-group">
        {assignments.map((a) => (
          <li key={a.id} className="list-group-item d-flex justify-content-between">
            <div>
              <strong>{a.title}</strong>
              <div>Due: {a.dueDate || "N/A"}</div>
            </div>

            <button
              id={`wd-delete-assignment-${a.id}`}
              className="btn btn-outline-danger btn-sm"
              onClick={() => dispatch(deleteAssignment(a.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
