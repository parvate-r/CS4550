"use client";
import React from "react";

export default function Arrays() {
  
  const topics = ["HTML", "CSS", "JavaScript", "React", "Node"];
  const firstTopic = topics[0];
  const lastTopic = topics[topics.length - 1];

  
  const allTopics = [...topics];
  allTopics.push("MongoDB");
  allTopics.splice(2, 1, "TypeScript");

  
  const upperTopics = allTopics.map(t => t.toUpperCase());
  const foundReact = allTopics.find(t => t === "React");
  const foundIndex = allTopics.findIndex(t => t === "React");
  const filteredTopics = allTopics.filter(t => t.startsWith("T"));

  
  const jsonTopics = JSON.stringify(allTopics);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">3.4 – JavaScript Data Structures (Part 1: Arrays)</h2>

        <h5 className="mt-3">Array Basics</h5>
        <ul>
          <li>First Topic: {firstTopic}</li>
          <li>Last Topic: {lastTopic}</li>
          <li>Total Topics: {topics.length}</li>
        </ul>

        <h5 className="mt-4">Modified Array with push/splice</h5>
        <p>{allTopics.join(", ")}</p>

        <h5 className="mt-4">Using Array Helpers</h5>
        <ul>
          <li><strong>map()</strong> → {upperTopics.join(", ")}</li>
          <li><strong>find()</strong> → {foundReact}</li>
          <li><strong>findIndex()</strong> → {foundIndex}</li>
          <li><strong>filter()</strong> → {filteredTopics.join(", ")}</li>
        </ul>

        <h5 className="mt-4">JSON Stringified Array</h5>
        <pre>{jsonTopics}</pre>
      </div>
    </div>
  );
}
