import { ReactNode } from "react";
import TOC from "./TOC";

export default function LabsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="container mt-4">
      <TOC />
      <hr />
      <div>{children}</div>
    </div>
  );
}
