"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Course } from "../store/coursesSlice";

export default function CoursesDisplay() {
  const courses = useSelector((state: RootState) => state.courses as Course[]);
  const [selected, setSelected] = useState<string | null>(null);
  const selectedCourse = courses.find((c) => c.id === selected);

  return (
    <div id="wd-kambaz-courses-display" className="mb-4">
      <h4>Display Selected Course</h4>

      <ul className="list-group">
        {courses.map((c) => (
          <li
            key={c.id}
            className={`list-group-item ${selected === c.id ? "active" : ""}`}
            style={{ cursor: "pointer" }}
            onClick={() => setSelected(c.id)}
          >
            {c.title}
          </li>
        ))}
      </ul>

      <div className="mt-3">
        {selectedCourse ? (
          <>
            <h5>{selectedCourse.title}</h5>
            <p>{selectedCourse.description}</p>
          </>
        ) : (
          <p>No Course Selected</p>
        )}
      </div>
    </div>
  );
}
