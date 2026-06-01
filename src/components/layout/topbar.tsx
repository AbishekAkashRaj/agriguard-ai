import { Bell, Leaf } from "lucide-react";

export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <div>
        <h2 className="text-lg font-semibold text-green-950">
          Crop Protection Dashboard
        </h2>
        <p className="text-sm text-gray-500">
          Detect diseases, view alerts, and get farmer advice
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-full border p-2 hover:bg-green-50">
          <Bell className="h-5 w-5 text-green-900" />
        </button>

        <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-2 text-sm font-medium text-green-900">
          <Leaf className="h-4 w-4" />
          Farmer Mode
        </div>
      </div>
    </header>
  );
}