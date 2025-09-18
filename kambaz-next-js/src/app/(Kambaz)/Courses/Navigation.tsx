"use client";

import Link from "next/link";

export default function CourseNavigation({ courseId }: { courseId: string }) {
  return (
    <div id="wd-course-navigation">
      <ul>
        <li>
          <Link href={`/Courses/${courseId}`}>Home</Link>
        </li>
        <li>
          <Link href={`/Courses/${courseId}/Modules`}>Modules</Link>
        </li>
        <li>
          <Link href={`/Courses/${courseId}/Assignments`}>Assignments</Link>
        </li>
        <li>
          <Link href={`/Courses/${courseId}/Grades`}>Grades</Link>
        </li>
      </ul>
    </div>
  );
}
