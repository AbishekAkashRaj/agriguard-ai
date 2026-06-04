"use client";

import ProtectedRoute from "@/components/auth/protected-route";

export default function AdminPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-green-50 p-8">
        <h1 className="mb-6 text-3xl font-bold text-green-900">
          🛡️ Admin Dashboard
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-sm text-gray-500">Total Users</h3>
            <p className="mt-2 text-3xl font-bold">1</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-sm text-gray-500">Disease Scans</h3>
            <p className="mt-2 text-3xl font-bold">1</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-sm text-gray-500">Forum Posts</h3>
            <p className="mt-2 text-3xl font-bold">2</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-sm text-gray-500">Weather Status</h3>
            <p className="mt-2 text-3xl font-bold">Live</p>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold text-green-900">
            Recent Platform Activity
          </h2>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-3">Module</th>
                <th>Activity</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-3">Authentication</td>
                <td>Farmer account registered</td>
                <td className="text-green-700">Active</td>
              </tr>

              <tr className="border-b">
                <td className="py-3">Disease Scanner</td>
                <td>Leaf Blight diagnosis saved</td>
                <td className="text-green-700">Active</td>
              </tr>

              <tr className="border-b">
                <td className="py-3">Weather API</td>
                <td>Live Colombo weather connected</td>
                <td className="text-green-700">Active</td>
              </tr>

              <tr>
                <td className="py-3">Community Forum</td>
                <td>Farmer discussion posts enabled</td>
                <td className="text-green-700">Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ProtectedRoute>
  );
}