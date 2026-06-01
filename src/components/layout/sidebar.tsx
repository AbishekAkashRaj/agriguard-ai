import Link from "next/link";
import {
  LayoutDashboard,
  ScanLine,
  Bot,
  MessageSquare,
  CloudSun,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Disease Scanner", href: "/scan", icon: ScanLine },
  { name: "AI Advisor", href: "/advisor", icon: Bot },
  { name: "Community Forum", href: "/forum", icon: MessageSquare },
  { name: "Weather Alerts", href: "/weather", icon: CloudSun },
  { name: "Market Prices", href: "/market", icon: BarChart3 },
  { name: "Admin", href: "/admin", icon: ShieldCheck },
];

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 border-r bg-green-950 text-white lg:block">
      <div className="p-6">
        <h1 className="text-2xl font-bold">AgriGuard AI</h1>
        <p className="mt-1 text-sm text-green-200">Farmer Advisory Platform</p>
      </div>

      <nav className="space-y-1 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-green-100 hover:bg-green-800 hover:text-white"
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}