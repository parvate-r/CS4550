// src/app/(Kambaz)/page.tsx
import { redirect } from "next/navigation";

export default function Kambaz() {
  redirect("/Account/Signin");
  return null;
}
