"use client";

import { useState } from "react";

export default function AdminPage() {
  const [active, setActive] = useState("Dashboard");

  const menu = [
    { name: "Dashboard", icon: "▦" },
    { name: "Notices", icon: "◈" },
    { name: "Students", icon: "♙" },
    { name: "Courses", icon: "▤" },
    { name: "Settings", icon: "⚙" },
  ];

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <aside className="hidden w-[260px] shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">

          {/* Logo */}
          <div className="flex h-[82px] items-center border-b border-slate-100 px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#164e63] text-xl font-bold text-white shadow-lg shadow-cyan-900/10">
                I
              </div>

              <div>
                <h1 className="text-[17px] font-bold tracking-tight">
                  IUBAT
                </h1>
                <p className="text-[11px] font-medium text-slate-400">
                  STUDENT PORTAL
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-4 py-7">

            <p className="px-3 pb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Main Menu
            </p>

            <nav className="space-y-1">
              {menu.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActive(item.name)}
                  className={`group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    active === item.name
                      ? "bg-[#164e63] text-white shadow-md shadow-cyan-900/10"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="flex w-6 justify-center text-lg">
                    {item.icon}
                  </span>

                  {item.name}
                </button>
              ))}
            </nav>

            <p className="px-3 pb-3 pt-9 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Quick Access
            </p>

            <nav className="space-y-1">
              <a
                href="/"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
              >
                <span className="flex w-6 justify-center text-lg">⌂</span>
                Student Portal
              </a>
            </nav>
          </div>

          {/* Bottom admin */}
          <div className="border-t border-slate-100 p-4">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#164e63] text-sm font-bold text-white">
                A
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  Administrator
                </p>
                <p className="text-[11px] text-slate-400">
                  Portal Admin
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="min-w-0 flex-1">

          {/* TOP BAR */}
          <header className="sticky top-0 z-20 flex h-[82px] items-center justify-between border-b border-slate-200 bg-white/90 px-5 backdrop-blur md:px-8">

            <div>
              <p className="text-xs font-medium text-slate-400">
                IUBAT Student Portal
              </p>

              <h2 className="text-xl font-bold tracking-tight">
                Administration
              </h2>
            </div>

            <div className="flex items-center gap-3">

              <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50">
                🔔

                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
              </button>

              <div className="hidden items-center gap-3 border-l border-slate-200 pl-4 sm:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#164e63] text-sm font-bold text-white">
                  A
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    Admin
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Administrator
                  </p>
                </div>
              </div>

            </div>
          </header>

          {/* CONTENT */}
          <div className="p-5 md:p-8 lg:p-10">

            {/* Welcome */}
            <section className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-[#164e63] via-[#155e75] to-[#0e7490] p-7 text-white shadow-xl shadow-cyan-900/10 md:p-9">

              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                <div>
                  <p className="mb-2 text-sm font-medium text-cyan-100">
                    Welcome back, Administrator
                  </p>

                  <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                    Dashboard Overview
                  </h1>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-cyan-100">
                    Manage the IUBAT Student Portal, publish notices and
                    monitor important portal information from one place.
                  </p>
                </div>

                <div className="hidden h-24 w-24 items-center justify-center rounded-3xl bg-white/10 text-5xl backdrop-blur-sm md:flex">
                  📊
                </div>

              </div>
            </section>

            {/* STAT CARDS */}
            <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

              <StatCard
                title="Total Notices"
                value="0"
                description="Published notices"
                icon="📢"
              />

              <StatCard
                title="Pinned Notices"
                value="0"
                description="Important notices"
                icon="📌"
              />

              <StatCard
                title="Students"
                value="—"
                description="Registered students"
                icon="🎓"
              />

              <StatCard
                title="Portal Status"
                value="Online"
                description="System operational"
                icon="✓"
                green
              />

            </section>

            {/* LOWER GRID */}
            <section className="mt-7 grid gap-6 xl:grid-cols-[1.5fr_1fr]">

              {/* Recent Activity */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">

                  <div>
                    <h3 className="font-bold">
                      Recent Activity
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Latest portal activity
                    </p>
                  </div>

                  <button className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500 transition hover:bg-slate-100">
                    View All
                  </button>

                </div>

                <div className="p-6">

                  <div className="flex flex-col items-center justify-center py-12 text-center">

                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-2xl">
                      🕐
                    </div>

                    <h4 className="font-semibold text-slate-700">
                      No recent activity
                    </h4>

                    <p className="mt-1 max-w-xs text-xs leading-5 text-slate-400">
                      Admin activities will appear here when you start
                      managing the portal.
                    </p>

                  </div>

                </div>
              </div>

              {/* Quick Actions */}
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

                <div className="border-b border-slate-100 px-6 py-5">

                  <h3 className="font-bold">
                    Quick Actions
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Frequently used tools
                  </p>

                </div>

                <div className="space-y-3 p-5">

                  <button
                    onClick={() => setActive("Notices")}
                    className="flex w-full items-center gap-4 rounded-xl border border-slate-100 p-4 text-left transition hover:border-cyan-100 hover:bg-cyan-50"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-xl">
                      📢
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        Manage Notices
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Create and manage portal notices
                      </p>
                    </div>

                    <span className="ml-auto text-slate-300">
                      →
                    </span>
                  </button>

                  <button
                    onClick={() => setActive("Students")}
                    className="flex w-full items-center gap-4 rounded-xl border border-slate-100 p-4 text-left transition hover:border-blue-100 hover:bg-blue-50"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                      🎓
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        Student Management
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        View portal students
                      </p>
                    </div>

                    <span className="ml-auto text-slate-300">
                      →
                    </span>
                  </button>

                  <button
                    onClick={() => setActive("Settings")}
                    className="flex w-full items-center gap-4 rounded-xl border border-slate-100 p-4 text-left transition hover:border-purple-100 hover:bg-purple-50"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-xl">
                      ⚙
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        Portal Settings
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Configure portal options
                      </p>
                    </div>

                    <span className="ml-auto text-slate-300">
                      →
                    </span>
                  </button>

                </div>
              </div>

            </section>

            {/* FOOTER */}
            <footer className="mt-8 flex flex-col justify-between gap-2 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row">
              <p>
                © 2026 IUBAT Student Portal
              </p>

              <p>
                Administration Dashboard
              </p>
            </footer>

          </div>
        </main>
      </div>
    </div>
  );
}


/* STAT CARD */

function StatCard({
  title,
  value,
  description,
  icon,
  green = false,
}: {
  title: string;
  value: string;
  description: string;
  icon: string;
  green?: boolean;
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {title}
          </p>

          <p
            className={`mt-3 text-2xl font-bold tracking-tight ${
              green ? "text-emerald-600" : "text-slate-900"
            }`}
          >
            {value}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {description}
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-xl transition group-hover:scale-110">
          {icon}
        </div>

      </div>
    </div>
  );
}
