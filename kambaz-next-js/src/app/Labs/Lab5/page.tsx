import Link from "next/link";

export default function Lab5() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Lab 5 – Server Communication</h1>

      <p className="text-gray-700">
        This lab demonstrates communication with a Node/Express server deployed on Render.
      </p>

      <h2 className="text-xl font-semibold mt-2">Client-Side Examples</h2>
      <ul className="list-disc pl-4">
        <li><Link href="/Labs/Lab5/QueryParams">Query Params Example</Link></li>
        <li><Link href="/Labs/Lab5/PathParams">Path Params Example</Link></li>
        <li><Link href="/Labs/Lab5/AddNumbers">Add Numbers</Link></li>
        <li><Link href="/Labs/Lab5/Calc">Calculator</Link></li>
        <li><Link href="/Labs/Lab5/Posts">Posts CRUD</Link></li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Live API Endpoints (Render)</h2>
      <ul className="list-disc pl-4">
        <li>
          <a
            href="https://kambaz-node-server.onrender.com/hello"
            target="_blank"
            rel="noopener noreferrer"
          >
            /hello
          </a>
        </li>
        <li>
          <a
            href="https://kambaz-node-server.onrender.com/labs/5"
            target="_blank"
            rel="noopener noreferrer"
          >
            /labs/5
          </a>
        </li>
        <li>
          <a
            href="https://kambaz-node-server.onrender.com/labs/5/todos"
            target="_blank"
            rel="noopener noreferrer"
          >
            /labs/5/todos
          </a>
        </li>
      </ul>

      <Link href="/Labs" className="text-blue-600 underline mt-4">
        ← Back to Labs
      </Link>
    </div>
  );
}
