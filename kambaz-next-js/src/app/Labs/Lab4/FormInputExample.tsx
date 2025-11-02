"use client";
import { useState } from "react";

export default function FormInputExample() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    subscribed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="mb-4">
      <h4>Form Input Example</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          className="form-control mb-2"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          className="form-control mb-2"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="form-check mb-2">
          <input
            type="checkbox"
            name="subscribed"
            id="subscribed"
            className="form-check-input"
            checked={formData.subscribed}
            onChange={handleChange}
          />
          <label htmlFor="subscribed" className="form-check-label">
            Subscribe to Newsletter
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
