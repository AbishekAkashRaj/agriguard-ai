"use client";
import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: form.get("email"),
        password: form.get("password"),
      }),
    });

    const data = await res.json();

    if (res.ok) {
  Cookies.set("agriguard_user", JSON.stringify(data.user), { expires: 7 });
  router.push("/");
} else {
      setMessage(data.message || "Login failed");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50 p-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow"
      >
        <h1 className="mb-6 text-3xl font-bold text-green-900">
          Farmer Login
        </h1>

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

        <button className="w-full rounded-lg bg-green-800 p-3 font-semibold text-white">
          Login
        </button>

        {message && (
          <p className="mt-4 text-center text-sm text-green-700">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}