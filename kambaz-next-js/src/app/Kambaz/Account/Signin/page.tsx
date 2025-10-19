
"use client";
import Link from "next/link";
import "./signin.css";

export default function Signin() {
  return (
    <div className="container mt-5 signin-container">
      <div className="signin-card">
        <h1 id="wd-signin-title">Sign In</h1>
        <form className="signin-form">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Sign In
          </button>
        </form>
        <div className="signin-footer">
          <Link href="/Kambaz/Account/Signup">Don&apos;t have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
