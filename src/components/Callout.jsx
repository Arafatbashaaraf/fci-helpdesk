const typeStyles = {
  info: 'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-blue-100',
  warning:
    'border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-100',
  success:
    'border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-100',
};

export default function Callout({ type = 'info', children }) {
  return (
    <div className={`my-6 rounded-xl border p-4 ${typeStyles[type] ?? typeStyles.info}`}>
      <div className="text-sm font-medium capitalize">{type}</div>
      <div className="mt-1 text-sm leading-6">{children}</div>
    </div>
  );
}
