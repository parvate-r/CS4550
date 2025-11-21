/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import CourseNavigation from "../Navigation";

export default function CourseLayout({ children, params }: any) {
  const { id } = params;

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Sidebar Navigation */}
        <div className="col-3">
          <CourseNavigation id={id} />
        </div>

        {/* Page Content */}
        <div className="col-9">{children}</div>
      </div>
    </div>
  );
}
