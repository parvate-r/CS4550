
import { useState } from "react";

export default function DynamicStyling() {
  const [isActive, setIsActive] = useState(false);

  const styleInline = {
    color: isActive ? "white" : "#0d6efd",
    backgroundColor: isActive ? "#0d6efd" : "transparent",
    padding: "6px 10px",
    borderRadius: 6,
  } as const;

  return (
    <div id="wd-dynamic-styling">
      <p className={isActive ? "text-white bg-primary p-2 rounded" : "text-primary"}>
        This paragraph toggles classes and style.
      </p>

      <button onClick={() => setIsActive((s) => !s)} style={styleInline} className="mb-2">
        Toggle Active
      </button>

      <div>
        <p>Inline style example: <code style={{ background: "#f1f1f1", padding: 4 }}>{JSON.stringify(styleInline)}</code></p>
      </div>
    </div>
  );
}
