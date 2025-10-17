
export default function DataStructures() {
  const arr = ["apple", "banana", "cherry"];
  const numbers = [1, 2, 3, 4, 5];

  const doubled = numbers.map((n) => n * 2);
  const found = numbers.find((n) => n > 3);
  const filtered = numbers.filter((n) => n % 2 === 0);
  const asJson = JSON.stringify({ arr, numbers });

  
  const extended = [...numbers, 6, 7];
  const [first, second] = arr;

  return (
    <div id="wd-data-structures">
      <p>Array: {arr.join(", ")}</p>
      <p>Doubled: {doubled.join(", ")}</p>
      <p>Found (&gt;3): {String(found)}</p>
      <p>Filtered (even): {filtered.join(", ")}</p>
      <p>JSON: <code>{asJson}</code></p>
      <p>Extended: {extended.join(", ")}</p>
      <p>Destructured first, second: {first} — {second}</p>
    </div>
  );
}
