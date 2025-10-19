import Link from "next/link";
import "./signout.css";

export default function Signout() {
  return (
    <div className="container mt-5 signout-container">
      <div className="signout-card">
        <h1 id="wd-signout-title">Sign Out</h1>
        <p className="signout-message">You have been signed out successfully.</p>
        <Link href="/Kambaz/Account/Signin" className="btn btn-primary signout-button">
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}
