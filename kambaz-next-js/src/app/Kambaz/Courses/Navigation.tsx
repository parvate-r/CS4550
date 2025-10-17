"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ courseId }: { courseId: string }) {
  const pathname = usePathname();

  const tabs = [
    { label: "Dashboard", path: `/Courses/${courseId}` },
    { label: "Assignments", path: `/Courses/${courseId}/Assignments` },
    { label: "Modules", path: `/Courses/${courseId}/Modules` },
    { label: "People", path: `/Courses/${courseId}/People` },
  ];

  return (
    <nav className="course-nav bg-light border-end p-3" style={{ minWidth: 180 }}>
      <ul className="list-unstyled">
        {tabs.map(tab => (
          <li key={tab.path} className={pathname === tab.path ? "fw-bold text-primary" : ""}>
            <Link href={tab.path} className="nav-link">
              {tab.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
