import NavigationSidebar from "./NavigationSidebar";

export default function Kambaz() {
  return (
    <div className="d-flex">
      <NavigationSidebar />
      <div className="container mt-4">
        <h2>Kambaz Dashboard</h2>
        <p>
          Welcome to your course hub! Use the sidebar to access labs, dashboard, courses, account, assignments, grades, modules, people, Piazza, Zoom, and quizzes.
        </p>
      </div>
    </div>
  );
}
