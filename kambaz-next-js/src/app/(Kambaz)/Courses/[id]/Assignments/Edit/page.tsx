"use client";

import { useState } from "react";

export default function AssignmentEditor() {
  const [name, setName] = useState("New Assignment");
  const [description, setDescription] = useState("Enter details here...");
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState("2025-05-13");
  const [availableFrom, setAvailableFrom] = useState("2025-05-01");
  const [untilDate, setUntilDate] = useState("2025-06-01");
  const [assignTo, setAssignTo] = useState("Everyone");

  return (
    <div id="wd-assignment-editor">
      <h2>Assignment Editor</h2>

      <label>
        Assignment Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <br />

      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <br />

      <label>
        Points:
        <input
          type="number"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
        />
      </label>

      <br />

      <label>
        Assignment Group:
        <select>
          <option>Assignments</option>
          <option>Quizzes</option>
          <option>Exams</option>
          <option>Project</option>
        </select>
      </label>

      <br />

      <label>
        Display Grade as:
        <select>
          <option>Points</option>
          <option>Percentage</option>
          <option>Letter Grade</option>
        </select>
      </label>

      <br />

      <label>
        Submission Type:
        <select>
          <option>Online</option>
          <option>On Paper</option>
          <option>No Submission</option>
        </select>
      </label>

      <br />

      <fieldset>
        <legend>Online Entry Options</legend>
        <label>
          <input type="checkbox" defaultChecked /> Text Entry
        </label>
        <label>
          <input type="checkbox" /> Website URL
        </label>
        <label>
          <input type="checkbox" /> Media Recordings
        </label>
        <label>
          <input type="checkbox" /> File Uploads
        </label>
      </fieldset>

      <br />

      <label>
        Assign To:
        <input
          type="text"
          value={assignTo}
          onChange={(e) => setAssignTo(e.target.value)}
        />
      </label>

      <br />

      <label>
        Due Date:
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </label>

      <br />

      <label>
        Available From:
        <input
          type="date"
          value={availableFrom}
          onChange={(e) => setAvailableFrom(e.target.value)}
        />
      </label>

      <br />

      <label>
        Until:
        <input
          type="date"
          value={untilDate}
          onChange={(e) => setUntilDate(e.target.value)}
        />
      </label>

      <br />

      <button>Save</button>
      <button>Cancel</button>
    </div>
  );
}
