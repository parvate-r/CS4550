
import Link from "next/link";

export default function Lab5() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Lab 5 – Server Communication</h1>

      <ul className="list-disc pl-4">
        <li><Link href="/Labs/Lab5/QueryParams">Query Params Example</Link></li>
        <li><Link href="/Labs/Lab5/PathParams">Path Params Example</Link></li>
        <li><Link href="/Labs/Lab5/AddNumbers">Add Numbers</Link></li>
        <li><Link href="/Labs/Lab5/Calc">Calculator</Link></li>
        <li><Link href="/Labs/Lab5/Posts">Posts CRUD</Link></li>
      </ul>
    </div>
  );
}
