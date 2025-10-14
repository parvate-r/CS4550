export default function Signin() {
  return (
    <div className="container mt-4" style={{ maxWidth: 420 }}>
      <h2 className="mb-4">Sign In</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="signinEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="signinEmail"
            placeholder="Enter email"
            autoComplete="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="signinPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="signinPassword"
            placeholder="Password"
            autoComplete="current-password"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Sign In
        </button>
      </form>
      <div className="mt-3">
        <a href="/Account/Signup">Don&apos;t have an account? Sign Up</a>
      </div>
    </div>
  );
}
