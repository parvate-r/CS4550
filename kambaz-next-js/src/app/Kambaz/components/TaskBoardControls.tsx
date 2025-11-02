"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/boardReducer";

export default function TaskBoardControls() {
  const [task, setTask] = useState("");
  const [column, setColumn] = useState("backlog");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!task.trim()) return;
    dispatch(addTask({ column: column as "backlog" | "inProgress" | "done", task }));
    setTask("");
  };

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">Add Task</h5>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Task name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select
          className="form-select mb-2"
          value={column}
          onChange={(e) => setColumn(e.target.value)}
        >
          <option value="backlog">Backlog</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Task
        </button>
      </div>
    </div>
  );
}
