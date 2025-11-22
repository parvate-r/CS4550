"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { addCourse, deleteCourse, Course } from "../store/coursesSlice";

export default function Dashboard() {
  const courses = useSelector((state: RootState) => state.courses as Course[]);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const createCourse = () => {
    if (!title.trim()) return;
    dispatch(addCourse({ title, description: desc }));
    setTitle("");
    setDesc("");
  };

  return (
    <div id="wd-kambaz-dashboard" className="mb-4">
      <h4>Kambaz Dashboard - Creating New Courses</h4>

      <input
        id="wd-course-title"
        className="form-control mb-2"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        id="wd-course-description"
        className="form-control mb-2"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <button id="wd-create-course" className="btn btn-primary mb-3" onClick={createCourse}>
        Create Course
      </button>

      <h5>Courses</h5>
      <ul className="list-group">
        {courses.map((c) => (
          <li key={c.id} className="list-group-item d-flex justify-content-between">
            <span>{c.title}</span>
            <button
              id={`wd-delete-course-${c.id}`}
              className="btn btn-outline-danger btn-sm"
              onClick={() => dispatch(deleteCourse(c.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
