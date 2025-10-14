import CourseNavigation from "../Navigation";

export default function CourseHome({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="d-flex">
      <CourseNavigation courseId={id} />
      <div className="container mt-4">
        <h2>Course {id} Dashboard</h2>
        <p>
          Welcome to course <strong>{id}</strong>.<br />
          Use the navigation sidebar to access modules, assignments, grades, people, Piazza, Zoom, and quizzes.
        </p>
      </div>
    </div>
  );
}
