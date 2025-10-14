export default function Signup() {
  return (
    <div className="container mt-4" style={{ maxWidth: 480 }}>
      <h2 className="mb-4">Sign Up</h2>
      <form>
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
      <div className="mt-3">
        <a href="/Account/Signin">Already have an account? Sign In</a>
      </div>
    </div>
  );
}
