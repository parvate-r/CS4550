/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

const SERVER =
  process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

export default function Todos() {
  const [todos, setTodos] = useState<any[]>([]);
  const [title, setTitle] = useState("");

  const loadTodos = async () => {
    const res = await fetch(`${SERVER}/api/todos`);
    const json = await res.json();
    setTodos(json);
  };

  const createTodo = async () => {
    await fetch(`${SERVER}/api/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed: false }),
    });
    setTitle("");
    loadTodos();
  };

  const deleteTodo = async (id: string) => {
    await fetch(`${SERVER}/api/todos/${id}`, { method: "DELETE" });
    loadTodos();
  };

  const updateTodo = async (id: string) => {
    await fetch(`${SERVER}/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed: true }),
    });
    loadTodos();
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Todos (REST API)</h2>

      <div className="space-y-2">
        <input
          className="border p-2 block"
          placeholder="todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={createTodo} className="border p-2 bg-green-200 w-full">
          Create Todo
        </button>
      </div>

      <h3 className="text-lg font-bold mt-6">Existing Todos</h3>

      <ul className="mt-2 space-y-2">
        {todos.map((t: any) => (
          <li key={t.id} className="border p-2">
            <div className="font-semibold">{t.title}</div>
            <div>Completed: {String(t.completed)}</div>

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => deleteTodo(t.id)}
                className="border p-1 bg-red-200"
              >
                Delete
              </button>

              <button
                onClick={() => updateTodo(t.id)}
                className="border p-1 bg-yellow-200"
              >
                Mark Completed
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
