
export default function FunctionsExample() {
  // arrow function with implied return
  const square = (x: number) => x * x;

  function greet(name: string) {
    return `Hello, ${name}!`;
  }

  return (
    <div id="wd-functions">
      <p>square(5) = {square(5)}</p>
      <p>{greet("Rudra")}</p>
      <pre style={{ background: "#f8f9fa", padding: 8 }}>
{`const square = (x) => x * x;`}
      </pre>
    </div>
  );
}
