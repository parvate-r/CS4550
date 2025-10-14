import Link from "next/link";

export default function NavigationSidebar() {
  return (
    <nav className="sidebar bg-light p-3 border-end" style={{ minWidth: 180 }}>
      <ul className="list-unstyled">
        <li><Link href="/Kambaz" className="nav-link">Dashboard</Link></li>
        <li><Link href="/Labs" className="nav-link">Labs</Link></li>
        <li><Link href="/Account/Profile" className="nav-link">Profile</Link></li>
        <li><Link href="/Courses/1234" className="nav-link">Courses</Link></li>
      </ul>
    </nav>
  );
}
