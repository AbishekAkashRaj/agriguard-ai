"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/auth/protected-route";

type WeatherData = {
  district: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  description: string;
};

export default function WeatherPage() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/weather")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setWeather(data);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const humidityAlert = weather && weather.humidity >= 80;

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-green-50 p-8">
        <h1 className="mb-6 text-3xl font-bold text-green-900">
          🌦️ Weather Alerts
        </h1>

        {loading && <p className="text-green-700">Loading weather data...</p>}

        {weather && (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-white p-6 shadow">
                <h3 className="text-sm text-gray-500">District</h3>
                <p className="mt-2 text-2xl font-bold">{weather.district}</p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow">
                <h3 className="text-sm text-gray-500">Temperature</h3>
                <p className="mt-2 text-2xl font-bold">
                  {weather.temperature}°C
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow">
                <h3 className="text-sm text-gray-500">Humidity</h3>
                <p className="mt-2 text-2xl font-bold">{weather.humidity}%</p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow">
                <h3 className="text-sm text-gray-500">Wind Speed</h3>
                <p className="mt-2 text-2xl font-bold">
                  {weather.windSpeed} m/s
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-white p-6 shadow">
              <h3 className="text-sm text-gray-500">Weather Condition</h3>
              <p className="mt-2 text-xl font-semibold capitalize">
                {weather.description}
              </p>
            </div>

            {humidityAlert ? (
              <div className="mt-8 rounded-xl border border-orange-200 bg-orange-50 p-6 shadow">
                <h2 className="text-xl font-bold text-orange-700">
                  ⚠️ High Humidity Alert
                </h2>
                <p className="mt-2 text-orange-800">
                  High humidity detected. There is a possible fungal disease
                  risk for paddy and vegetable crops. Monitor leaves carefully.
                </p>
              </div>
            ) : (
              <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6 shadow">
                <h2 className="text-xl font-bold text-green-700">
                  ✅ Low Disease Weather Risk
                </h2>
                <p className="mt-2 text-green-800">
                  Current humidity level is below the high-risk threshold.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </ProtectedRoute>
  );
}