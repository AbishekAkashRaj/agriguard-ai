"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import ProtectedRoute from "@/components/auth/protected-route";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

type DashboardStats = {
  totalUsers: number;
  totalDiagnoses: number;
  totalForumPosts: number;
};

export default function Home() {
  const [userName, setUserName] = useState("Farmer");

  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    totalDiagnoses: 0,
    totalForumPosts: 0,
  });

  useEffect(() => {
    const userCookie = Cookies.get("agriguard_user");

    if (userCookie) {
      const user = JSON.parse(userCookie);
      setUserName(user.name || "Farmer");
    }

    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStats({
            totalUsers: data.totalUsers,
            totalDiagnoses: data.totalDiagnoses,
            totalForumPosts: data.totalForumPosts,
          });
        }
      });
  }, []);

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 bg-green-50">
          <Topbar />

          <div className="p-6">
            <h1 className="mb-2 text-3xl font-bold text-green-950">
              🌿 AgriGuard AI Dashboard
            </h1>

            <p className="mb-6 text-lg text-green-700">
              Welcome back, {userName} 👨‍🌾
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-white p-6 shadow">
                <h3 className="text-sm text-gray-500">Disease Scans</h3>
                <p className="mt-2 text-3xl font-bold">
                  {stats.totalDiagnoses}
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow">
                <h3 className="text-sm text-gray-500">Registered Users</h3>
                <p className="mt-2 text-3xl font-bold">
                  {stats.totalUsers}
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow">
                <h3 className="text-sm text-gray-500">Forum Posts</h3>
                <p className="mt-2 text-3xl font-bold">
                  {stats.totalForumPosts}
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow">
                <h3 className="text-sm text-gray-500">Weather Status</h3>
                <p className="mt-2 text-3xl font-bold text-green-700">
                  Live
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-white p-8 shadow">
              <h2 className="text-xl font-semibold">
                Welcome to AgriGuard AI
              </h2>

              <p className="mt-3 text-gray-600">
                Intelligent Crop Disease Detection & Farmer Advisory Platform for
                Sri Lanka.
              </p>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}