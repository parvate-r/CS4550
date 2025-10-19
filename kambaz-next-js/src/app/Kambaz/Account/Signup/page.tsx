
import "./signup.css";

export default function Signup() {
  return (
    <div className="container mt-5 signup-container">
      <div className="signup-card">
        <h1 id="wd-signup-title">Sign Up</h1>
        <form className="signup-form">
          <div className="mb-3">
            <label htmlFor="signupName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="signupName"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signupEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="signupEmail"
              placeholder="Enter email"
              autoComplete="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="signupPassword"
              placeholder="Password"
              autoComplete="new-password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
        <div className="signup-footer">
          <a href="/Kambaz/Account/Signin">Already have an account? Sign In</a>
        </div>
      </div>
    </div>
  );
}
