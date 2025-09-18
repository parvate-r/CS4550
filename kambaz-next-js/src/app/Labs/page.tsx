import Link from "next/link";

export default function LabsLanding() {
  return (
    <div id="wd-labs-landing">
      <h1>CS4550 Web Development - Labs</h1>
      <h2>Rudra Parvate, Section CS4550.11597.202610</h2>

      <h3>Lab Assignments</h3>
      <ul>
        <li><Link href="/Labs/Lab1">Lab 1: HTML</Link></li>
        <li><Link href="/Labs/Lab2">Lab 2: CSS (coming soon)</Link></li>
        <li><Link href="/Labs/Lab3">Lab 3: Bootstrap (coming soon)</Link></li>
        {/* add more labs as you complete them */}
      </ul>

      <h3>Kambaz</h3>
      <ul>
        <li><Link href="/Account/Signin">Go to Kambaz Application</Link></li>
      </ul>

      <h3>Source Code</h3>
      <ul>
        <li>
          <a
            href="https://github.com/parvate-r/cs4550"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </li>
      </ul>
    </div>
  );
}
