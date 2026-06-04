"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { Activity, CloudSun, MessageSquare, ScanLine, Users } from "lucide-react";
import ProtectedRoute from "@/components/auth/protected-route";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

type DashboardStats = {
  totalUsers: number;
  totalDiagnoses: number;
  totalForumPosts: number;
};

const cardAnimation = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
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

        <main className="flex-1 overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50">
          <Topbar />

          <div className="p-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-green-950 via-green-800 to-emerald-700 p-8 text-white shadow-2xl"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute bottom-0 right-24 h-24 w-24 rounded-full bg-lime-300/20 blur-xl" />

              <p className="text-sm uppercase tracking-widest text-green-200">
                Intelligent Crop Protection Platform
              </p>

              <h1 className="mt-3 text-4xl font-bold">
                Welcome back, {userName} 👨‍🌾
              </h1>

              <p className="mt-3 max-w-2xl text-green-100">
                Monitor crop diseases, weather risks, market prices, and farmer
                community activity from one smart dashboard.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.12 }}
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            >
              <motion.div
                variants={cardAnimation}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl bg-white p-6 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-green-100 p-3">
                    <ScanLine className="h-6 w-6 text-green-800" />
                  </div>
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    Live
                  </span>
                </div>
                <h3 className="mt-5 text-sm text-gray-500">Disease Scans</h3>
                <p className="mt-2 text-4xl font-black text-green-950">
                  {stats.totalDiagnoses}
                </p>
              </motion.div>

              <motion.div
                variants={cardAnimation}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl bg-white p-6 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-blue-100 p-3">
                    <Users className="h-6 w-6 text-blue-800" />
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    Farmers
                  </span>
                </div>
                <h3 className="mt-5 text-sm text-gray-500">Registered Users</h3>
                <p className="mt-2 text-4xl font-black text-green-950">
                  {stats.totalUsers}
                </p>
              </motion.div>

              <motion.div
                variants={cardAnimation}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl bg-white p-6 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-purple-100 p-3">
                    <MessageSquare className="h-6 w-6 text-purple-800" />
                  </div>
                  <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                    Forum
                  </span>
                </div>
                <h3 className="mt-5 text-sm text-gray-500">Forum Posts</h3>
                <p className="mt-2 text-4xl font-black text-green-950">
                  {stats.totalForumPosts}
                </p>
              </motion.div>

              <motion.div
                variants={cardAnimation}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-3xl bg-white p-6 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-orange-100 p-3">
                    <CloudSun className="h-6 w-6 text-orange-700" />
                  </div>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                    API
                  </span>
                </div>
                <h3 className="mt-5 text-sm text-gray-500">Weather Status</h3>
                <p className="mt-2 text-4xl font-black text-green-700">Live</p>
              </motion.div>
            </motion.div>

            <div className="mt-8 grid gap-6 xl:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="rounded-3xl bg-white p-8 shadow-xl xl:col-span-2"
              >
                <div className="flex items-center gap-3">
                  <Activity className="h-6 w-6 text-green-800" />
                  <h2 className="text-2xl font-bold text-green-950">
                    Platform Activity
                  </h2>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-green-50 p-4">
                    Disease scanner is active and saving diagnosis records.
                  </div>
                  <div className="rounded-2xl bg-blue-50 p-4">
                    Weather module is connected to live Colombo weather data.
                  </div>
                  <div className="rounded-2xl bg-purple-50 p-4">
                    Community forum is ready for farmer discussions.
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="rounded-3xl bg-gradient-to-br from-lime-200 to-green-200 p-8 shadow-xl"
              >
                <h2 className="text-2xl font-bold text-green-950">
                  Farmer Profile
                </h2>
                <p className="mt-2 text-green-800">{userName}</p>

                <div className="mt-6 rounded-2xl bg-white/70 p-4">
                  <p className="text-sm text-green-900">Account Type</p>
                  <p className="text-xl font-bold text-green-950">
                    Farmer Mode
                  </p>
                </div>

                <div className="mt-4 rounded-2xl bg-white/70 p-4">
                  <p className="text-sm text-green-900">System Status</p>
                  <p className="text-xl font-bold text-green-950">
                    Protected & Active
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}