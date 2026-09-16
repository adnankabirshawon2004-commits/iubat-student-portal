export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold">IUBAT Admin Panel</h1>

        <p className="mt-2 text-slate-400">
          Welcome to the Student Portal Admin Panel.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Total Notices</p>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Pinned Notices</p>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Portal Status</p>
            <p className="mt-2 text-xl font-bold text-green-400">
              ● Online
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
