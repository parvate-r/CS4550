// src/app/Kambaz/Account/Navigation.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaHome,
  FaFlask,
} from "react-icons/fa";
import "./account-nav.css";

export default function AccountNavigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/Kambaz/Account/Profile", label: "Profile", icon: <FaUserCircle className="me-2 text-primary" /> },
    { href: "/Kambaz/Account/Signin", label: "Sign In", icon: <FaSignInAlt className="me-2 text-success" /> },
    { href: "/Kambaz/Account/Signup", label: "Sign Up", icon: <FaUserPlus className="me-2 text-info" /> },
    { href: "/Kambaz/Account/Signout", label: "Sign Out", icon: <FaSignOutAlt className="me-2 text-danger" /> },
    { href: "/Kambaz", label: "Kambaz Dashboard", icon: <FaHome className="me-2 text-secondary" /> },
    { href: "/Labs", label: "Labs", icon: <FaFlask className="me-2 text-warning" /> },
  ];

  return (
    <nav className="account-nav bg-light border-end p-3">
      <ul className="list-unstyled m-0">
        {navItems.map((item) => (
          <li key={item.href} className="mb-2">
            <Link
              href={item.href}
              className={`nav-link d-flex align-items-center ${
                pathname === item.href ? "active" : ""
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
