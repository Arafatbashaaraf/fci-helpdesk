import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="fci-glass p-10 text-center">
      <p className="text-sm font-medium text-sky-600 dark:text-sky-400">404</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Page not found</h1>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-full bg-gradient-to-r from-blue-600 to-sky-400 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition hover:translate-y-[-2px]"
      >
        Go to home
      </Link>
    </div>
  );
}
