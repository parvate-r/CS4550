"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { addModule, deleteModule, Module } from "../store/modulesSlice";
import { Course } from "../store/coursesSlice";

export default function Modules() {
  const dispatch = useDispatch();
  const courses = useSelector((state: RootState) => state.courses as Course[]);
  const modules = useSelector((state: RootState) => state.modules as Module[]);

  const [courseId, setCourseId] = useState(courses[0]?.id || "");
  const [title, setTitle] = useState("");

  const createModule = () => {
    if (!title.trim() || !courseId) return;
    dispatch(addModule({ courseId, title }));
    setTitle("");
  };

  return (
    <div id="wd-kambaz-modules" className="mb-4">
      <h4>Kambaz Modules</h4>

      <select
        id="wd-module-course"
        className="form-control mb-2"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      >
        {courses.map((c) => (
          <option value={c.id} key={c.id}>
            {c.title}
          </option>
        ))}
      </select>

      <input
        id="wd-module-title"
        className="form-control mb-2"
        placeholder="Module Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button id="wd-create-module" className="btn btn-primary mb-3" onClick={createModule}>
        Create Module
      </button>

      <ul className="list-group">
        {modules.map((m) => (
          <li key={m.id} className="list-group-item d-flex justify-content-between">
            <span>{m.title}</span>
            <button
              id={`wd-delete-module-${m.id}`}
              className="btn btn-outline-danger btn-sm"
              onClick={() => dispatch(deleteModule(m.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
