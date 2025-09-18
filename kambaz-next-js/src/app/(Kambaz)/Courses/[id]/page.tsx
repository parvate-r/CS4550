import CourseNavigation from "../Navigation";

export default function CourseHome({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div id="wd-course-home">
      <h2>Course Home</h2>
      <p>Welcome to course {id}. Here you can find modules, assignments, and grades.</p>

      <h3>Course Status</h3>
      <ul>
        <li>Published</li>
        <li>Course Starts: Jan 2025</li>
        <li>Course Ends: May 2025</li>
      </ul>

      <CourseNavigation courseId={id} />
    </div>
  );
}
