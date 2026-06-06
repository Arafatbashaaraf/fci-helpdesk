export default function HelpSectionHeading({ children }) {
  return (
    <div
      className="mt-8 first:mt-5"
      role="heading"
      aria-level={3}
    >
      <div className="flex items-stretch overflow-hidden rounded-r-md border border-sky-500/25 shadow-sm">
        <span
          className="w-1.5 shrink-0 bg-gradient-to-b from-blue-500 to-sky-400"
          aria-hidden
        />
        <h3 className="flex-1 bg-slate-100 px-4 py-3.5 text-xl font-bold tracking-tight text-slate-900 dark:bg-slate-800/60 dark:text-white sm:px-5 sm:py-4 sm:text-2xl">
          {children}
        </h3>
      </div>
    </div>
  );
}
