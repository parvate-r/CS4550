"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

export default function LocationExample() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Current location:", pathname);
  }, [pathname]);

  const links = [
    { href: "/Labs/Lab3", label: "Lab 3 Home" },
    { href: "/Labs/Lab3/add/1/2", label: "Add 1 + 2" },
    { href: "/Labs/Lab3/add/3/4", label: "Add 3 + 4" },
  ];

  return (
    <div id="wd-location-example">
      <p className="mb-3">
        The <code>usePathname()</code> hook from Next.js lets you read the
        current URL and highlight the active link dynamically.
      </p>

      <nav className="nav nav-pills mb-3">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive ? "active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="card bg-light">
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            Current Pathname:
          </h6>
          <code className="fw-bold text-primary">{pathname}</code>
        </div>
      </div>
    </div>
  );
}
