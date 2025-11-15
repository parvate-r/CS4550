/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

const SERVER = "http://localhost:4000";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const loadPosts = async () => {
    const res = await fetch(`${SERVER}/lab5/posts`);
    const json = await res.json();
    setPosts(json);
  };

  const createPost = async () => {
    const res = await fetch(`${SERVER}/lab5/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });
    await loadPosts();
  };

  const deletePost = async (id: number) => {
    await fetch(`${SERVER}/lab5/posts/${id}`, { method: "DELETE" });
    loadPosts();
  };

  const updatePost = async (id: number) => {
    await fetch(`${SERVER}/lab5/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });
    loadPosts();
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Posts CRUD</h2>

      <div className="space-y-2">
        <input
          className="border p-2 block"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-2 block"
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button onClick={createPost} className="border p-2 bg-green-200 w-full">
          Create Post
        </button>
      </div>

      <h3 className="text-lg font-bold mt-6">Existing Posts</h3>

      <ul className="mt-2 space-y-2">
        {posts.map((p: any) => (
          <li key={p.id} className="border p-2">
            <div className="font-semibold">{p.title}</div>
            <div>{p.body}</div>

            <div className="flex gap-2 mt-2">
              <button
                onClick={() => deletePost(p.id)}
                className="border p-1 bg-red-200"
              >
                Delete
              </button>

              <button
                onClick={() => updatePost(p.id)}
                className="border p-1 bg-yellow-200"
              >
                Update (with title/body above)
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
