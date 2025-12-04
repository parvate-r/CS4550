"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { coursesApi, Course } from "../services/api";

export default function CourseBreadcrumbs() {
  const { id } = useParams();
  const pathname = usePathname();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      if (id && typeof id === "string") {
        try {
          const data = await coursesApi.getById(id);
          setCourse(data);
        } catch (error) {
          console.error("Failed to fetch course for breadcrumbs:", error);
        }
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) return null;

  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];
  const current = lastSegment === id ? "Home" : lastSegment;

  return (
    <nav aria-label="breadcrumb" className="mb-3">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="/Kambaz/Dashboard">Dashboard</Link>
        </li>
        <li className="breadcrumb-item">
          <Link href={`/Kambaz/Courses/${course._id}/Home`}>
            {course._id}
          </Link>
        </li>
        <li className="breadcrumb-item active text-capitalize" aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  );
}
