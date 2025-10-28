"use client";
import React from "react";

export default function Objects() {
  
  const student = {
    name: "Rudra Parvate",
    username: "parvate.r",
    email: "parvate.r@northeastern.edu",
    major: "Computer Science",
    credits: 16,
  };

  
  const course = {
    id: "CS4550",
    title: "Web Development",
    instructor: { name: "Dr. Jose Annunziato", office: "WVH 212" },
    semester: "Fall 2025",
  };

  
  const updatedStudent = { ...student, credits: student.credits + 4 };

  
  const mergedProfile = { ...updatedStudent, enrolledCourse: course.title };

  
  const { name, username, email } = mergedProfile;
  const {
    instructor: { name: instructorName },
  } = course;

  
  const jsonStudent = JSON.stringify(mergedProfile, null, 2);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">
          3.4 - JavaScript Data Structures (Part 2: Objects & Destructuring)
        </h2>

        <h5 className="mt-3">Student Object</h5>
        <ul>
          <li>Name: {name}</li>
          <li>Username: {username}</li>
          <li>Email: {email}</li>
          <li>Credits (after update): {updatedStudent.credits}</li>
        </ul>

        <h5 className="mt-4">Course Object (Nested)</h5>
        <ul>
          <li>Course ID: {course.id}</li>
          <li>Title: {course.title}</li>
          <li>Instructor: {instructorName}</li>
          <li>Semester: {course.semester}</li>
        </ul>

        <h5 className="mt-4">Merged Profile (using Spread Operator)</h5>
        <pre>{jsonStudent}</pre>

        <p className="mt-3 text-secondary">
          Demonstrates object creation, nested access, spread merging, and destructuring syntax per sections 3.4.9 - 3.4.14.
        </p>
      </div>
    </div>
  );
}
