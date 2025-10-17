
import ChildExample from "./child/ChildExample";

export default function Parameterizing() {
  return (
    <div id="wd-parameterizing">
      <p>Parent passes props to child below:</p>
      <ChildExample title="Hello from parent" count={3} />
    </div>
  );
}
