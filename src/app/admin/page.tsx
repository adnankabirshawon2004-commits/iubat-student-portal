"use client";

import { useState } from "react";

const menuItems = [
  { label: "Overview", icon: "⌂" },
  { label: "Notices", icon: "▤" },
  { label: "Students", icon: "♙" },
  { label: "Courses", icon: "▦" },
  { label: "Settings", icon: "⚙" },
];

export default function AdminPage() {
  const [active, setActive] = useState("Overview");

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-[#20242a]">

      {/* DESKTOP SIDEBAR */}
      <aside className="fixed inset-y-0 left-0 hidden w-[245px] border-r border-[#e8eaed] bg-white lg:flex lg:flex-col">

        {/* Brand */}
        <div className="flex h-[78px] items-center border-b border-[#eeeeee] px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#20242a] text-lg font-bold text-white">
              I
            </div>

            <div>
              <div className="text-[16px] font-bold tracking-tight">
                IUBAT
              </div>

              <div className="text-[9px] font-semibold tracking-[0.16em] text-gray-400">
                STUDENT PORTAL
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-7">

          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
            Workspace
          </p>

          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setActive(item.label)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                  active === item.label
                    ? "bg-[#f0f1f3] font-semibold text-[#20242a]"
                    : "text-gray-500 hover:bg-[#f7f7f8] hover:text-gray-900"
                }`}
              >
                <span className="flex w-6 justify-center text-[16px]">
                  {item.icon}
                </span>

                {item.label}
              </button>
            ))}
          </div>

          <p className="mb-3 mt-9 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
            Portal
          </p>

          <a
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-500 transition hover:bg-[#f7f7f8] hover:text-gray-900"
          >
            <span className="flex w-6 justify-center text-[16px]">
              ↗
            </span>

            Student Portal
          </a>
        </div>

        {/* Admin */}
        <div className="border-t border-[#eeeeee] p-4">
          <div className="flex items-center gap-3 rounded-xl bg-[#f7f7f8] p-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#20242a] text-xs font-bold text-white">
              A
            </div>

            <div className="min-w-0">
              <p className="truncate text-xs font-semibold">
                Administrator
              </p>

              <p className="mt-0.5 text-[10px] text-gray-400">
                Portal Admin
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="lg:pl-[245px]">

        {/* HEADER */}
        <header className="sticky top-0 z-30 flex h-[78px] items-center justify-between border-b border-[#e8eaed] bg-white/95 px-5 backdrop-blur md:px-8">

          <div>
            <p className="text-[11px] font-medium text-gray-400">
              Administration
            </p>

            <h1 className="mt-0.5 text-lg font-bold tracking-tight">
              {active}
            </h1>
          </div>

          <div className="flex items-center gap-3">

            <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[#e5e7eb] bg-white text-sm text-gray-500 hover:bg-gray-50">
              ♢
              <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
            </button>

            <div className="hidden h-8 w-px bg-gray-200 sm:block" />

            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#20242a] text-xs font-bold text-white">
                A
              </div>

              <div className="hidden sm:block">
                <p className="text-xs font-semibold">
                  Admin
                </p>

                <p className="text-[10px] text-gray-400">
                  Administrator
                </p>
              </div>
            </div>

          </div>
        </header>

        {/* CONTENT */}
        <main className="mx-auto max-w-[1450px] p-5 md:p-8 xl:p-10">

          {/* TOP */}
          <section className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-sm text-gray-400">
                Good morning, Administrator
              </p>

              <h2 className="mt-1 text-3xl font-bold tracking-[-0.03em]">
                Portal Overview
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
                Manage notices, students and important information
                for the IUBAT Student Portal.
              </p>
            </div>

            <div className="flex items-center gap-2">

              <button className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-xs font-semibold text-gray-600 shadow-sm transition hover:bg-gray-50">
                View Portal
              </button>

              <button
                onClick={() => setActive("Notices")}
                className="rounded-lg bg-[#20242a] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-black"
              >
                + New Notice
              </button>

            </div>
          </section>

          {/* STATISTICS */}
          <section className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <DashboardCard
              title="Total Notices"
              value="0"
              subtitle="Published on portal"
              icon="▤"
            />

            <DashboardCard
              title="Pinned Notices"
              value="0"
              subtitle="Currently highlighted"
              icon="⌖"
            />

            <DashboardCard
              title="Students"
              value="—"
              subtitle="Registered accounts"
              icon="♙"
            />

            <DashboardCard
              title="System Status"
              value="Online"
              subtitle="Everything operational"
              icon="✓"
              status
            />

          </section>

          {/* MAIN GRID */}
          <section className="mt-6 grid gap-5 xl:grid-cols-[1.65fr_1fr]">

            {/* ACTIVITY */}
            <div className="rounded-2xl border border-[#e7e9ec] bg-white">

              <div className="flex items-center justify-between border-b border-[#eeeeee] px-6 py-5">

                <div>
                  <h3 className="text-sm font-bold">
                    Recent Activity
                  </h3>

                  <p className="mt-1 text-xs text-gray-400">
                    Latest changes made in the portal
                  </p>
                </div>

                <button className="text-xs font-semibold text-gray-500 hover:text-gray-900">
                  View all →
                </button>

              </div>

              <div className="min-h-[310px]">

                <div className="flex h-[310px] flex-col items-center justify-center text-center">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5f6f7] text-xl text-gray-400">
                    ◷
                  </div>

                  <h4 className="mt-4 text-sm font-semibold">
                    No activity yet
                  </h4>

                  <p className="mt-1 max-w-xs text-xs leading-5 text-gray-400">
                    Your recent administrative actions will appear
                    here.
                  </p>

                </div>

              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="rounded-2xl border border-[#e7e9ec] bg-white">

              <div className="border-b border-[#eeeeee] px-6 py-5">

                <h3 className="text-sm font-bold">
                  Quick Actions
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  Common administrative tasks
                </p>

              </div>

              <div className="space-y-2 p-4">

                <Action
                  icon="▤"
                  title="Manage Notices"
                  description="Create or edit announcements"
                  onClick={() => setActive("Notices")}
                />

                <Action
                  icon="♙"
                  title="Students"
                  description="Manage student accounts"
                  onClick={() => setActive("Students")}
                />

                <Action
                  icon="▦"
                  title="Courses"
                  description="View course information"
                  onClick={() => setActive("Courses")}
                />

                <Action
                  icon="⚙"
                  title="Settings"
                  description="Configure portal"
                  onClick={() => setActive("Settings")}
                />

              </div>
            </div>

          </section>

          {/* SYSTEM INFORMATION */}
          <section className="mt-5 rounded-2xl border border-[#e7e9ec] bg-white">

            <div className="flex flex-col justify-between gap-4 px-6 py-5 sm:flex-row sm:items-center">

              <div>
                <h3 className="text-sm font-bold">
                  Portal Information
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  Current system information
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-[#f0fdf4] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <span className="text-[11px] font-semibold text-green-700">
                  All systems operational
                </span>
              </div>

            </div>

            <div className="grid border-t border-[#eeeeee] sm:grid-cols-3">

              <InfoItem
                title="Portal"
                value="IUBAT Student Portal"
              />

              <InfoItem
                title="Environment"
                value="Production"
              />

              <InfoItem
                title="Status"
                value="Operational"
              />

            </div>

          </section>

          {/* FOOTER */}
          <footer className="mt-8 flex flex-col justify-between gap-2 border-t border-[#e5e7eb] pt-5 text-[11px] text-gray-400 sm:flex-row">
            <span>
              © 2026 IUBAT Student Portal
            </span>

            <span>
              Administration Dashboard
            </span>
          </footer>

        </main>
      </div>
    </div>
  );
}


/* DASHBOARD CARD */

function DashboardCard({
  title,
  value,
  subtitle,
  icon,
  status = false,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  status?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-[#e7e9ec] bg-white p-5 transition hover:border-gray-300 hover:shadow-sm">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-xs font-medium text-gray-400">
            {title}
          </p>

          <p
            className={`mt-3 text-2xl font-bold tracking-tight ${
              status ? "text-green-600" : "text-[#20242a]"
            }`}
          >
            {value}
          </p>

          <p className="mt-1 text-[11px] text-gray-400">
            {subtitle}
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5f6f7] text-sm text-gray-500">
          {icon}
        </div>

      </div>
    </div>
  );
}


/* ACTION */

function Action({
  icon,
  title,
  description,
  onClick,
}: {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-[#f7f7f8]"
    >

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f4f5f6] text-sm text-gray-500 transition group-hover:bg-white group-hover:shadow-sm">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <p className="text-xs font-semibold">
          {title}
        </p>

        <p className="mt-1 truncate text-[10px] text-gray-400">
          {description}
        </p>

      </div>

      <span className="text-xs text-gray-300 transition group-hover:text-gray-600">
        →
      </span>

    </button>
  );
}


/* INFO */

function InfoItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border-b border-[#eeeeee] px-6 py-5 last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
        {title}
      </p>

      <p className="mt-1.5 text-xs font-semibold text-gray-700">
        {value}
      </p>
    </div>
  );
}
