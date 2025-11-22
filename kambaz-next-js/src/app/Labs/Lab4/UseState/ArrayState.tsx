// "use client";
import React, { useState } from "react";

export default function ArrayState() {
  const [items, setItems] = useState<string[]>(["Learn React", "Read Chapter 4"]);
  const [newItem, setNewItem] = useState("");

  const addElement = () => {
    if (newItem.trim() === "") return;
    setItems((prev) => [...prev, newItem.trim()]);
    setNewItem("");
  };

  const deleteElement = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-4" id="wd-array-state">
      <h4>Array State Example</h4>
      <label htmlFor="wd-add-item">New item:</label>
      <input
        id="wd-add-item"
        className="form-control mb-2"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter item"
      />
      <button className="btn btn-primary mb-3" onClick={addElement}>
        Add Element
      </button>

      <h5>Items</h5>
      <ul id="wd-array-items" className="list-group">
        {items.map((it, idx) => (
          <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{it}</span>
            <button
              id={`wd-delete-${idx}`}
              className="btn btn-outline-danger btn-sm"
              onClick={() => deleteElement(idx)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
