"use client";

import Link from "next/link";

export default function CourseNavigation({ courseId }: { courseId: string }) {
  return (
    <div id="wd-course-navigation">
      <ul>
        <li>
          <Link href={`/Kambaz/Courses/${courseId}`}>Home</Link>
        </li>
        <li>
          <Link href={`/Kambaz/Courses/${courseId}/Modules`}>Modules</Link>
        </li>
        <li>
          <Link href={`/Kambaz/Courses/${courseId}/Assignments`}>
            Assignments
          </Link>
        </li>
        <li>
          <Link href={`/Kambaz/Courses/${courseId}/Quizzes`}>Quizzes</Link>
        </li>
        <li>
          <Link href={`/Kambaz/Courses/${courseId}/Grades`}>Grades</Link>
        </li>
        <li>
          <Link href={`/Kambaz/Courses/${courseId}/Zoom`}>Zoom</Link>
        </li>
      </ul>
    </div>
  );
}
