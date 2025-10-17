
export default function Debugging() {
  console.log("Lab3 Debugging component loaded - check the browser console");
  const x = 5;
  const y = 6;
  console.log("x + y = ", x + y);

  return (
    <div id="wd-debugging">
      <p>Open the browser console (DevTools) → Console to see debug output from this component.</p>
      <p>Try adding a `debugger;` statement locally and refresh to pause execution in Sources.</p>
    </div>
  );
}
