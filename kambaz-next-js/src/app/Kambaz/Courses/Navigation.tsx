"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ courseId }: { courseId: string }) {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "Home" },
    { label: "Modules", path: "Modules" },
    { label: "People", path: "People" },
    { label: "Assignments", path: "Assignments" },
    { label: "Grades", path: "Grades" }
  ];

  return (
    <div className="list-group">
      {navItems.map((item) => {
        const href = `/Kambaz/Courses/${courseId}/${item.path}`;
        const active = pathname === href;
        return (
          <Link
            key={item.path}
            href={href}
            className={`list-group-item list-group-item-action ${
              active ? "active" : ""
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
