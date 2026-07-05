function HeroDashboard() {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">

      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-semibold text-white">
          WorkHub Dashboard
        </h3>

        <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-medium">
          Live
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4">

        <div className="rounded-xl bg-slate-800 p-4">
          <p className="text-xs text-slate-400">Projects</p>
          <h2 className="mt-2 text-2xl font-bold">12</h2>
        </div>

        <div className="rounded-xl bg-slate-800 p-4">
          <p className="text-xs text-slate-400">Clients</p>
          <h2 className="mt-2 text-2xl font-bold">18</h2>
        </div>

        <div className="rounded-xl bg-slate-800 p-4">
          <p className="text-xs text-slate-400">Requests</p>
          <h2 className="mt-2 text-2xl font-bold">7</h2>
        </div>

      </div>

      <div className="mt-6 rounded-xl bg-slate-800 p-5">
        <div className="mb-4 h-3 w-24 rounded bg-slate-700"></div>

        <div className="flex h-40 items-end gap-3">

          <div className="h-20 w-full rounded bg-cyan-500"></div>
          <div className="h-28 w-full rounded bg-cyan-400"></div>
          <div className="h-16 w-full rounded bg-cyan-500"></div>
          <div className="h-36 w-full rounded bg-cyan-300"></div>
          <div className="h-24 w-full rounded bg-cyan-400"></div>
          <div className="h-32 w-full rounded bg-cyan-500"></div>

        </div>

      </div>

    </div>
  );
}

export default HeroDashboard;