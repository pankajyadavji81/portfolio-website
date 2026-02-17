import { useState } from "react";
import { Users, LayoutDashboard, CheckSquare, Settings, Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Employees", url: "/employees", icon: Users },
  { title: "Tasks", url: "/tasks", icon: CheckSquare },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-foreground/50 md:hidden transition-opacity",
          collapsed ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
        onClick={() => setCollapsed(true)}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:sticky top-0 left-0 z-50 h-screen flex flex-col bg-sidebar text-sidebar-foreground transition-all duration-300",
          collapsed ? "-translate-x-full md:translate-x-0 md:w-16" : "w-64"
        )}
      >
        {/* Logo area */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-sidebar-border">
          {!collapsed && (
            <span className="text-lg font-bold text-sidebar-primary-foreground tracking-tight">
              HR<span className="text-sidebar-primary">Pulse</span>
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-md hover:bg-sidebar-accent text-sidebar-foreground transition-colors hidden md:flex"
          >
            <Menu className="h-5 w-5" />
          </button>
          <button
            onClick={() => setCollapsed(true)}
            className="p-1.5 rounded-md hover:bg-sidebar-accent text-sidebar-foreground transition-colors md:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-2 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              end={item.url === "/"}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
              activeClassName="bg-sidebar-accent text-sidebar-primary"
              onClick={() => {
                if (window.innerWidth < 768) setCollapsed(true);
              }}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {!collapsed && <span>{item.title}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile trigger */}
      <button
        onClick={() => setCollapsed(false)}
        className="fixed top-4 left-4 z-30 p-2 rounded-lg bg-card shadow-md border md:hidden"
      >
        <Menu className="h-5 w-5 text-foreground" />
      </button>
    </>
  );
}
