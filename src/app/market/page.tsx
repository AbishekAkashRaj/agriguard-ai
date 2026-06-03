"use client";

import ProtectedRoute from "@/components/auth/protected-route";

const prices = [
  { crop: "Paddy", market: "Colombo", price: "LKR 180/kg", trend: "Stable" },
  { crop: "Tomato", market: "Dambulla", price: "LKR 320/kg", trend: "High" },
  { crop: "Potato", market: "Nuwara Eliya", price: "LKR 280/kg", trend: "Medium" },
  { crop: "Chili", market: "Dambulla", price: "LKR 950/kg", trend: "High" },
];

export default function MarketPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-green-50 p-8">
        <h1 className="mb-6 text-3xl font-bold text-green-900">
          📊 Market Prices
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {prices.map((item) => (
            <div key={item.crop} className="rounded-xl bg-white p-6 shadow">
              <h2 className="text-xl font-bold text-green-900">{item.crop}</h2>
              <p className="mt-2 text-sm text-gray-500">{item.market} Market</p>
              <p className="mt-4 text-2xl font-bold">{item.price}</p>
              <p className="mt-2 text-sm text-green-700">Trend: {item.trend}</p>
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}