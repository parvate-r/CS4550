/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { coursesApi, Course } from "../../../services/api";

export default function CourseHomePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const data = await coursesApi.getById(id);
        setCourse(data);
      } catch (error) {
        console.error("Failed to fetch course:", error);
        setCourse(null);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-4">
        <p>Loading course...</p>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container mt-4">
        <h2>Course Not Found</h2>
        <p className="text-danger">
          No information found for course <strong>{id}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-2">{course.name}</h2>
      <p className="text-secondary mb-3">{course.term}</p>
      <hr />

      <div className="mb-3">
        <Image
          src={course.image}
          alt={course.name}
          width={450}
          height={250}
          style={{ borderRadius: "8px" }}
        />
      </div>

      <p className="lead">{course.description}</p>

      <div className="mt-4">
        <p><strong>Course Number:</strong> {course.number}</p>
        <p><strong>Start Date:</strong> {course.startDate}</p>
        <p><strong>End Date:</strong> {course.endDate}</p>
      </div>

      <hr />

      <div className="alert alert-info mt-4">
        Use the left navigation to access Modules, Assignments, People, and Grades.
      </div>
    </div>
  );
}
