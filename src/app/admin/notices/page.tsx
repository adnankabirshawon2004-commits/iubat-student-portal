"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/src/lib/supabase/client";

type Notice = {
  id: number;
  title: string;
  content: string;
  category: string | null;
  is_pinned: boolean;
  created_at: string;
};

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [pinned, setPinned] = useState(false);

  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");

  async function loadNotices() {
    setLoading(true);

    const { data, error } = await supabase
      .from("notices")
      .select("*")
      .order("is_pinned", { ascending: false })
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      alert("Could not load notices.");
    } else {
      setNotices(data || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadNotices();
  }, []);

  async function addNotice(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please enter a title and notice content.");
      return;
    }

    setSaving(true);

    const { error } = await supabase.from("notices").insert({
      title: title.trim(),
      content: content.trim(),
      category,
      is_pinned: pinned,
    });

    if (error) {
      console.error(error);
      alert("Failed to create notice.");
    } else {
      setTitle("");
      setContent("");
      setCategory("General");
      setPinned(false);
      setShowForm(false);
      await loadNotices();
    }

    setSaving(false);
  }

  async function togglePin(notice: Notice) {
    const { error } = await supabase
      .from("notices")
      .update({
        is_pinned: !notice.is_pinned,
      })
      .eq("id", notice.id);

    if (error) {
      alert("Could not update notice.");
      return;
    }

    await loadNotices();
  }

  async function deleteNotice(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this notice?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("notices")
      .delete()
      .eq("id", id);

    if (error) {
      alert("Could not delete notice.");
      return;
    }

    await loadNotices();
  }

  const filteredNotices = notices.filter((notice) => {
    const text =
      `${notice.title} ${notice.content} ${notice.category || ""}`.toLowerCase();

    return text.includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#f7f8fa] text-[#20242a]">

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <a href="/admin" className="hover:text-gray-700">
                  Admin
                </a>

                <span>/</span>

                <span>Notices</span>
              </div>

              <h1 className="mt-2 text-2xl font-bold tracking-tight">
                Notice Management
              </h1>

              <p className="mt-1 text-sm text-gray-400">
                Create and manage announcements for students.
              </p>
            </div>

            <button
              onClick={() => setShowForm(true)}
              className="rounded-xl bg-[#20242a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              + Create Notice
            </button>

          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="mx-auto max-w-7xl px-5 py-7 md:px-8">

        {/* STATS */}
        <div className="grid gap-4 sm:grid-cols-3">

          <Stat
            title="Total Notices"
            value={notices.length}
          />

          <Stat
            title="Pinned Notices"
            value={notices.filter((n) => n.is_pinned).length}
          />

          <Stat
            title="Categories"
            value={new Set(
              notices.map((n) => n.category || "General")
            ).size}
          />

        </div>

        {/* SEARCH */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">

          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              ⌕
            </span>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search notices..."
              className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-gray-400"
            />
          </div>

          <button
            onClick={loadNotices}
            className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            ↻ Refresh
          </button>

        </div>

        {/* NOTICE LIST */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white">

          <div className="border-b border-gray-100 px-6 py-5">
            <h2 className="text-sm font-bold">
              All Notices
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              {filteredNotices.length} notice
              {filteredNotices.length !== 1 ? "s" : ""}
            </p>
          </div>

          {loading ? (

            <div className="flex min-h-[300px] items-center justify-center">
              <p className="text-sm text-gray-400">
                Loading notices...
              </p>
            </div>

          ) : filteredNotices.length === 0 ? (

            <div className="flex min-h-[320px] flex-col items-center justify-center px-6 text-center">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-2xl">
                📢
              </div>

              <h3 className="mt-4 text-sm font-bold">
                No notices found
              </h3>

              <p className="mt-1 max-w-sm text-xs leading-5 text-gray-400">
                Create your first notice to display an announcement
                on the student portal.
              </p>

              <button
                onClick={() => setShowForm(true)}
                className="mt-5 rounded-lg bg-[#20242a] px-4 py-2.5 text-xs font-semibold text-white"
              >
                + Create Notice
              </button>

            </div>

          ) : (

            <div className="divide-y divide-gray-100">

              {filteredNotices.map((notice) => (

                <div
                  key={notice.id}
                  className="p-5 transition hover:bg-gray-50 md:px-6"
                >

                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap items-center gap-2">

                        {notice.is_pinned && (
                          <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-700">
                            📌 PINNED
                          </span>
                        )}

                        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold text-gray-500">
                          {notice.category || "General"}
                        </span>

                      </div>

                      <h3 className="mt-3 text-base font-bold">
                        {notice.title}
                      </h3>

                      <p className="mt-2 max-w-3xl whitespace-pre-wrap text-sm leading-6 text-gray-500">
                        {notice.content}
                      </p>

                      <p className="mt-3 text-[11px] text-gray-400">
                        {new Date(notice.created_at).toLocaleString()}
                      </p>

                    </div>

                    <div className="flex shrink-0 gap-2">

                      <button
                        onClick={() => togglePin(notice)}
                        className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50"
                      >
                        {notice.is_pinned ? "Unpin" : "Pin"}
                      </button>

                      <button
                        onClick={() => deleteNotice(notice.id)}
                        className="rounded-lg border border-red-100 bg-white px-3 py-2 text-xs font-medium text-red-500 hover:bg-red-50"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>
      </main>

      {/* CREATE NOTICE MODAL */}
      {showForm && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">

          <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl">

            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

              <div>
                <h2 className="font-bold">
                  Create Notice
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  Publish an announcement for students.
                </p>
              </div>

              <button
                onClick={() => setShowForm(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100"
              >
                ×
              </button>

            </div>

            <form onSubmit={addNotice} className="space-y-5 p-6">

              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-600">
                  Notice Title
                </label>

                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter notice title"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-600">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none"
                >
                  <option>General</option>
                  <option>Academic</option>
                  <option>Exam</option>
                  <option>Admission</option>
                  <option>Event</option>
                  <option>Urgent</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-600">
                  Notice Content
                </label>

                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your notice here..."
                  rows={6}
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm leading-6 outline-none focus:border-gray-400"
                />
              </div>

              <label className="flex cursor-pointer items-center gap-3 rounded-xl bg-gray-50 p-4">

                <input
                  type="checkbox"
                  checked={pinned}
                  onChange={(e) => setPinned(e.target.checked)}
                  className="h-4 w-4"
                />

                <div>
                  <p className="text-xs font-semibold">
                    Pin this notice
                  </p>

                  <p className="mt-1 text-[11px] text-gray-400">
                    Keep this notice at the top of the notice board.
                  </p>
                </div>

              </label>

              <div className="flex justify-end gap-3 border-t border-gray-100 pt-5">

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-xl bg-[#20242a] px-5 py-2.5 text-sm font-semibold text-white hover:bg-black disabled:opacity-50"
                >
                  {saving ? "Publishing..." : "Publish Notice"}
                </button>

              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <p className="text-xs font-medium text-gray-400">
        {title}
      </p>

      <p className="mt-2 text-2xl font-bold">
        {value}
      </p>
    </div>
  );
}
