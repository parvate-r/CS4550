"use client";
import CourseNavigation from "../Navigation";
import CourseBreadcrumbs from "../Breadcrumbs";
import * as db from "../../Database";

export default function CoursePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const course = db.courses.find((c) => c._id === id);

  if (!course) {
    return (
      <div className="container mt-5">
        <h3 className="text-danger">Course not found.</h3>
      </div>
    );
  }

  return (
    <div className="d-flex">
      <CourseNavigation courseId={id} />
      <div className="container mt-4">
        <CourseBreadcrumbs />
        <h2>{course.name}</h2>
        <p>
          Welcome to <strong>{course.name}</strong>.<br />
          Use the navigation sidebar to access modules, assignments, grades,
          people, Piazza, Zoom, and quizzes.
        </p>
      </div>
    </div>
  );
}
