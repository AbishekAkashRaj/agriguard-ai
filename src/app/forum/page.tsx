"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import ProtectedRoute from "@/components/auth/protected-route";

type ForumPost = {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
};

export default function ForumPage() {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [message, setMessage] = useState("");

  async function loadPosts() {
    const res = await fetch("/api/forum/posts");
    const data = await res.json();
    setPosts(data.posts || []);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  async function handlePost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formElement = e.currentTarget;
    const userCookie = Cookies.get("agriguard_user");
    const user = userCookie ? JSON.parse(userCookie) : null;

    const form = new FormData(formElement);

    const res = await fetch("/api/forum/posts", {
      method: "POST",
      body: JSON.stringify({
        title: form.get("title"),
        content: form.get("content"),
        author: user?.name || "Farmer",
      }),
    });

    if (res.ok) {
      setMessage("Post created successfully!");
      formElement.reset();
      loadPosts();
    } else {
      setMessage("Failed to create post");
    }
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-green-50 p-8">
        <h1 className="mb-6 text-3xl font-bold text-green-900">
          💬 Community Forum
        </h1>

        <form
          onSubmit={handlePost}
          className="mb-8 rounded-xl bg-white p-6 shadow"
        >
          <input
            name="title"
            placeholder="Post title"
            required
            className="mb-4 w-full rounded-lg border p-3"
          />

          <textarea
            name="content"
            placeholder="Write your farming question or advice..."
            required
            className="mb-4 w-full rounded-lg border p-3"
          />

          <button className="rounded-lg bg-green-800 px-6 py-3 font-semibold text-white">
            Create Post
          </button>

          {message && <p className="mt-3 text-green-700">{message}</p>}
        </form>

        <div className="space-y-4">
          {posts.length === 0 ? (
            <p>No forum posts yet.</p>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="rounded-xl bg-white p-6 shadow">
                <h2 className="text-xl font-bold text-green-900">
                  {post.title}
                </h2>

                <p className="mt-2 text-gray-700">{post.content}</p>

                <p className="mt-4 text-sm text-gray-500">
                  Posted by {post.author} •{" "}
                  {new Date(post.createdAt).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}