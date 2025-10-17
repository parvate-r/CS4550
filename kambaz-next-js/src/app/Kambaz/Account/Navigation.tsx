"use client";
import Link from "next/link";
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
  return (
    <nav className="account-nav bg-light border-end p-3" style={{ minWidth: 180 }}>
      <ul className="list-unstyled m-0">
        <li className="mb-2">
          <Link href="/Account/Profile" className="nav-link d-flex align-items-center">
            <FaUserCircle className="me-2 text-primary" /> Profile
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/Account/Signin" className="nav-link d-flex align-items-center">
            <FaSignInAlt className="me-2 text-success" /> Sign In
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/Account/Signup" className="nav-link d-flex align-items-center">
            <FaUserPlus className="me-2 text-info" /> Sign Up
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/Account/Signout" className="nav-link d-flex align-items-center">
            <FaSignOutAlt className="me-2 text-danger" /> Sign Out
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/Kambaz" className="nav-link d-flex align-items-center">
            <FaHome className="me-2 text-secondary" /> Kambaz Dashboard
          </Link>
        </li>
        <li>
          <Link href="/Labs" className="nav-link d-flex align-items-center">
            <FaFlask className="me-2 text-warning" /> Labs
          </Link>
        </li>
      </ul>
    </nav>
  );
}
