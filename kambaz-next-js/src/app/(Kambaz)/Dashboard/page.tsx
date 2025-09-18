import Link from "next/link";

export default function Dashboard() {
  const courses = [
    { id: "1234", title: "CS4550 Web Development", number: "CS4550.11597.202610" },
    { id: "5678", title: "CS5610 Full-Stack Development", number: "CS5610.98765.202610" },
    { id: "2468", title: "CS5200 Database Management", number: "CS5200.54321.202610" },
  ];

  return (
    <div id="wd-dashboard">
      <h1>Dashboard</h1>
      <h2>Published Courses ({courses.length})</h2>

      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link href={`/Courses/${course.id}`}>
              {course.title} ({course.number})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
