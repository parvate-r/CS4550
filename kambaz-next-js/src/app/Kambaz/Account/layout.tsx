import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="account-wrapper d-flex">
      <AccountNavigation />
      <main className="flex-grow-1 p-3">
        {children}
      </main>
    </div>
  );
}
