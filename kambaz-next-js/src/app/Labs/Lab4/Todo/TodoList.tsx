"use client";

 import React, { useState } from "react";

export type Todo = {
  id: string;
  title: string;
  description?: string;
  done?: boolean;
};

const uid = () => Math.random().toString(36).slice(2, 9);

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: uid(), title: "Example todo", description: "Finish lab", done: false },
  ]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const renderAllTodos = () => todos;

  const createTodo = () => {
    if (!title.trim()) return;
    const t: Todo = { id: uid(), title: title.trim(), description: desc.trim(), done: false };
    setTodos((prev) => [...prev, t]);
    setTitle("");
    setDesc("");
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const selectTodo = (id: string) => {
    setSelectedId(id);
    setIsEditing(false);
  };

  const startEdit = (id: string) => {
    const target = todos.find((t) => t.id === id);
    if (!target) return;
    setTitle(target.title);
    setDesc(target.description || "");
    setSelectedId(id);
    setIsEditing(true);
  };

  const updateTodo = () => {
    if (!selectedId) return;
    setTodos((prev) =>
      prev.map((t) => (t.id === selectedId ? { ...t, title: title.trim(), description: desc.trim() } : t))
    );
    setIsEditing(false);
    setTitle("");
    setDesc("");
    setSelectedId(null);
  };

  const toggleDone = (id: string) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <div id="wd-todo-list" className="mb-4">
      <h4>Todo List (Render all todos / Create / Delete / Select / Update)</h4>

      <div className="mb-3">
        <label htmlFor="todo-title">Title</label>
        <input
          id="todo-title"
          className="form-control mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Todo title"
        />
        <label htmlFor="todo-desc">Description</label>
        <textarea
          id="todo-desc"
          className="form-control mb-2"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
        />
        {isEditing ? (
          <div>
            <button className="btn btn-success me-2" onClick={updateTodo}>
              Update Todo
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setIsEditing(false);
                setTitle("");
                setDesc("");
                setSelectedId(null);
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button className="btn btn-primary" onClick={createTodo}>
            Create Todo
          </button>
        )}
      </div>

      <h5>All todos</h5>
      <ul id="wd-todo-list-render" className="list-group">
        {renderAllTodos().map((t) => (
          <li
            id={`wd-todo-${t.id}`}
            key={t.id}
            className={`list-group-item d-flex justify-content-between align-items-start ${
              selectedId === t.id ? "active" : ""
            }`}
            onClick={() => selectTodo(t.id)}
            style={{ cursor: "pointer" }}
          >
            <div>
              <div style={{ fontWeight: 600 }}>{t.title}</div>
              <div style={{ fontSize: "0.9rem" }}>{t.description}</div>
              <div style={{ fontSize: "0.85rem", marginTop: 6 }}>
                <small>Done: {t.done ? "Yes" : "No"}</small>
              </div>
            </div>

            <div className="btn-group">
              <button
                id={`wd-todo-toggle-${t.id}`}
                className="btn btn-outline-success btn-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDone(t.id);
                }}
              >
                Toggle Done
              </button>
              <button
                id={`wd-todo-edit-${t.id}`}
                className="btn btn-outline-primary btn-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  startEdit(t.id);
                }}
              >
                Edit
              </button>
              <button
                id={`wd-todo-delete-${t.id}`}
                className="btn btn-outline-danger btn-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTodo(t.id);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
