import { ReactNode } from "react";
import TOC from "./TOC";

export default function LabsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <table>
      <tbody>
        <tr>
          <td valign="top" width="120px">
            <TOC />
          </td>
          <td valign="top" width="100%">
            {children}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
