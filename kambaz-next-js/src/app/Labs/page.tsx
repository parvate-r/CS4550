import Link from "next/link";
import "./labs.css";

export default function LabsLanding() {
  return (
    <div id="wd-labs">
      <h1>CS4550 Web Development - Labs</h1>
      <h2>Rudra Parvate, Section CS4550.11597.202610</h2>

      <section>
        <h3>Lab Assignments</h3>
        <ul>
          <li><Link href="/Labs/Lab1">Lab 1: HTML</Link></li>
          <li><Link href="/Labs/Lab2">Lab 2: CSS</Link></li>
          <li><Link href="/Labs/Lab3">Lab 3: Bootstrap (coming soon)</Link></li>
        </ul>
      </section>

      <section>
        <h3>Kambaz</h3>
        <ul>
          <li><Link href="/Account/Signin">Go to Kambaz Application</Link></li>
        </ul>
      </section>

      <section>
        <h3>Source Code</h3>
        <ul>
          <li>
            <a
              id="wd-github"
              href="https://github.com/parvate-r/cs4550"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
