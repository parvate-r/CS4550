import Link from "next/link";

export default function AccountNavigation() {
  return (
    <nav className="account-nav bg-light border-end p-3" style={{ minWidth: 160 }}>
      <ul className="list-unstyled">
        <li>
          <Link href="/Account/Profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/Account/Signin" className="nav-link">
            Sign In
          </Link>
        </li>
        <li>
          <Link href="/Account/Signup" className="nav-link">
            Sign Up
          </Link>
        </li>
        <li>
          <Link href="/Account/Signout" className="nav-link">
            Sign Out
          </Link>
        </li>
        <li>
          <Link href="/Kambaz" className="nav-link">
            Kambaz Dashboard
          </Link>
        </li>
        <li>
          <Link href="/Labs" className="nav-link">
            Labs
          </Link>
        </li>
      </ul>
    </nav>
  );
}
