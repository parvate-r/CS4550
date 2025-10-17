
export default function Variables() {
  const pi = 3.14159;
  const count = 5;
  const name: string = "Rudra";

  return (
    <div id="wd-variables">
      <p>Constant pi = {pi}</p>
      <p>Let count = {count}</p>
      <p>String name = {name}</p>
      <p style={{ color: "red", fontWeight: "bold" }}>
        Inline style example (rubric 2.1.1 / dynamic styling demo).
      </p>
    </div>
  );
}
