"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [message, setMessage] = useState("");

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password"),
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Account created successfully!");
    } else {
      setMessage(data.message || "Registration failed");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50 p-6">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow"
      >
        <h1 className="mb-6 text-3xl font-bold text-green-900">
          Create Farmer Account
        </h1>

        <input
          name="name"
          placeholder="Full Name"
          required
          className="mb-4 w-full rounded-lg border p-3"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
          className="mb-4 w-full rounded-lg border p-3"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="mb-4 w-full rounded-lg border p-3"
        />

        <button className="w-full rounded-lg bg-green-800 p-3 font-semibold text-white hover:bg-green-900">
          Register
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-green-700">{message}</p>
        )}
      </form>
    </div>
  );
}