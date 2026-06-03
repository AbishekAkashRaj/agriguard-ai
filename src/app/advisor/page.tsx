"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/auth/protected-route";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function AdvisorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hello! I am AgriGuard AI Advisor. Ask me about crop diseases, treatments, weather risks, or farming advice.",
    },
  ]);

  function handleAsk(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const question = String(form.get("question") || "");

    if (!question.trim()) return;

    const aiReply =
      "Based on your question, please inspect the crop leaves carefully, remove infected parts, avoid overwatering, and consult an agricultural officer for severe cases. This is a demo AI response.";

    setMessages((prev) => [
      ...prev,
      { role: "user", text: question },
      { role: "ai", text: aiReply },
    ]);

    e.currentTarget.reset();
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-green-50 p-8">
        <h1 className="mb-6 text-3xl font-bold text-green-900">
          🤖 AI Advisor Chat
        </h1>

        <div className="mb-6 rounded-xl bg-white p-6 shadow">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "ml-auto max-w-2xl rounded-xl bg-green-800 p-4 text-white"
                    : "max-w-2xl rounded-xl bg-green-100 p-4 text-green-950"
                }
              >
                <p className="text-sm font-semibold">
                  {message.role === "user" ? "You" : "AgriGuard AI"}
                </p>
                <p className="mt-1">{message.text}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleAsk} className="rounded-xl bg-white p-6 shadow">
          <textarea
            name="question"
            placeholder="Ask about crop disease, treatment, weather risk, or market advice..."
            required
            className="mb-4 w-full rounded-lg border p-3"
          />

          <button className="rounded-lg bg-green-800 px-6 py-3 font-semibold text-white">
            Ask AI Advisor
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
}