/** Fallback UI when screenshot assets are not in /public */
export default function ShowcaseMockPreview({ variant = 'dashboard' }) {
  return (
    <div
      className="flex h-full min-h-[280px] w-full flex-col overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 sm:min-h-[320px]"
      aria-hidden
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <div className="ml-3 h-6 flex-1 rounded-md bg-white/5" />
      </div>
      <div className="grid flex-1 gap-3 sm:grid-cols-[1fr_2fr]">
        <div className="space-y-2 rounded-lg border border-white/10 bg-white/5 p-3">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className={`h-8 rounded-md ${n === 1 ? 'bg-sky-500/30' : 'bg-white/5'}`}
            />
          ))}
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="mb-4 h-4 w-1/3 rounded bg-sky-400/40" />
          <div className="space-y-2">
            {[88, 72, 95, 60].map((w, i) => (
              <div
                key={i}
                className="h-10 rounded-md bg-gradient-to-r from-indigo-500/20 to-sky-500/10"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
          {variant === 'form' && (
            <div className="mt-4 h-9 w-28 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500" />
          )}
        </div>
      </div>
    </div>
  );
}
