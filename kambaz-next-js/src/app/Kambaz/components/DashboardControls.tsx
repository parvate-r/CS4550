"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName, updateEmail, updateRole, resetUser } from "../store/userReducer";

export default function DashboardControls() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("viewer");

  const handleUpdate = () => {
    if (name) dispatch(updateName(name));
    if (email) dispatch(updateEmail(email));
    if (role) dispatch(updateRole(role));
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h4>Dashboard Controls</h4>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Name"
            className="form-control mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <select
            className="form-select mb-3"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="viewer">Viewer</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
          <button className="btn btn-primary me-2" onClick={handleUpdate}>
            Update User
          </button>
          <button className="btn btn-danger" onClick={() => dispatch(resetUser())}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
