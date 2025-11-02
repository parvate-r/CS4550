"use client";
import { useState } from "react";

export default function ObjectState() {
  const [user, setUser] = useState({ firstName: "Alice", lastName: "Wonderland" });

  return (
    <div className="mb-4">
      <h4>Object State Example</h4>
      <input
        type="text"
        className="form-control mb-2"
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        placeholder="First Name"
      />
      <input
        type="text"
        className="form-control mb-2"
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        placeholder="Last Name"
      />
      <p>
        User: {user.firstName} {user.lastName}
      </p>
    </div>
  );
}
