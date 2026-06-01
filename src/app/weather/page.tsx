"use client";

import ProtectedRoute from "@/components/auth/protected-route";

export default function WeatherPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-green-50 p-8">
        <h1 className="mb-6 text-3xl font-bold text-green-900">
          🌦️ Weather Alerts
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-sm text-gray-500">District</h3>
            <p className="mt-2 text-2xl font-bold">Colombo</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-sm text-gray-500">Temperature</h3>
            <p className="mt-2 text-2xl font-bold">29°C</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-sm text-gray-500">Humidity</h3>
            <p className="mt-2 text-2xl font-bold">85%</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-sm text-gray-500">Wind Speed</h3>
            <p className="mt-2 text-2xl font-bold">12 km/h</p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-orange-200 bg-orange-50 p-6 shadow">
          <h2 className="text-xl font-bold text-orange-700">
            ⚠️ High Humidity Alert
          </h2>
          <p className="mt-2 text-orange-800">
            High humidity detected. There is a possible fungal disease risk for
            paddy and vegetable crops. Monitor leaves carefully.
          </p>
        </div>
      </div>
    </ProtectedRoute>
  );
}