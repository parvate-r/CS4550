"use client";
import Link from "next/link";

export default function Signin() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Sign In</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">
                  Sign In
                </button>
                <div className="text-center">
                  <Link href="/Account/Signup" className="text-decoration-none">
                    Don&apos;t have an account? Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
