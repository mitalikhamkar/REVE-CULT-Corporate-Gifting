import React, { useState } from "react";
import { NavLink, Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Inbox, Palette, LogOut, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/inquiries", label: "Inquiries", icon: Inbox },
  { to: "/admin/themes", label: "Themes", icon: Palette },
];

function SidebarLinks({ onNavigate }) {
  return (
    <nav className="flex flex-col gap-1">
      {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
              isActive
                ? "bg-reve-terracotta text-white"
                : "text-reve-brown hover:bg-reve-peachcream"
            )
          }
        >
          <Icon className="w-4 h-4" />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default function AdminLayout() {
  const { user } = useOutletContext();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-reve-ivory flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 shrink-0 border-r border-reve-border/70 bg-white px-5 py-7">
        <div className="px-2 mb-8">
          <p className="font-heading text-lg font-semibold text-reve-charcoal">REVE CULT</p>
          <p className="eyebrow mt-0.5">Admin Panel</p>
        </div>
        <SidebarLinks />
        <div className="mt-auto pt-6 border-t border-reve-border/70">
          <p className="px-2 text-xs text-reve-brown/70 truncate">{user?.email}</p>
          <button
            onClick={handleLogout}
            className="mt-3 w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-reve-brown hover:bg-reve-peachcream transition-colors"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={() => setDrawerOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-72 bg-white px-5 py-7 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="font-heading text-lg font-semibold text-reve-charcoal">REVE CULT</p>
                <p className="eyebrow mt-0.5">Admin Panel</p>
              </div>
              <button onClick={() => setDrawerOpen(false)} aria-label="Close menu">
                <X className="w-5 h-5 text-reve-brown" />
              </button>
            </div>
            <SidebarLinks onNavigate={() => setDrawerOpen(false)} />
            <div className="mt-auto pt-6 border-t border-reve-border/70">
              <p className="px-2 text-xs text-reve-brown/70 truncate">{user?.email}</p>
              <button
                onClick={handleLogout}
                className="mt-3 w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-reve-brown hover:bg-reve-peachcream transition-colors"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <header className="lg:hidden flex items-center justify-between px-5 py-4 border-b border-reve-border/70 bg-white">
          <button onClick={() => setDrawerOpen(true)} aria-label="Open menu">
            <Menu className="w-5 h-5 text-reve-brown" />
          </button>
          <p className="font-heading text-base font-semibold text-reve-charcoal">REVE CULT Admin</p>
          <span className="w-5" />
        </header>
        <main className="px-5 sm:px-8 lg:px-10 py-8 lg:py-10">
          <Outlet context={{ user }} />
        </main>
      </div>
    </div>
  );
}