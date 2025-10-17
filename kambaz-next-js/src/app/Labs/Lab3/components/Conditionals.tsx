
export default function Conditionals() {
  const score = 78;
  const passed = score >= 70;
  return (
    <div id="wd-conditionals">
      <p>Score: {score}</p>
      <p>{passed ? "You passed!" : "You failed. :("}</p>
      <p>
        Example ternary used above. Also demonstrate if/else in a small snippet:
      </p>
      <pre style={{ background: "#f8f9fa", padding: 8 }}>
{`let status;
if (score >= 90) status = 'A';
else if (score >= 80) status = 'B';
else if (score >= 70) status = 'C';
else status = 'F';`}
      </pre>
    </div>
  );
}
