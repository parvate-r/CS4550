"use client";
import { useState } from "react";

export default function ArrayState() {
  const [tasks, setTasks] = useState<string[]>(["Read Chapter 4", "Do Lab 4"]);

  const addTask = () => setTasks([...tasks, `Task ${tasks.length + 1}`]);

  return (
    <div className="mb-4">
      <h4>Array State Example</h4>
      <button className="btn btn-success mb-2" onClick={addTask}>
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task, i) => (
          <li key={i} className="list-group-item">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}
