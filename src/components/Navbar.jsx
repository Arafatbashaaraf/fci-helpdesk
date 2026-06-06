import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const topLinks = [
  { to: '/', label: 'Home' },
  { to: '/docs', label: 'Documentation' },
];

export default function Navbar({ onMenuClick }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-4 px-4 sm:px-6">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-md border border-slate-200 px-3 py-2 text-sm md:hidden dark:border-slate-700"
        >
          Menu
        </button>

        <Link to="/" className="shrink-0 text-xl font-bold tracking-[0.2em] text-slate-900 dark:text-white">
          FCI
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {topLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition ${isActive ? 'text-brand-700 dark:text-brand-500' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto" />
        <button
          type="button"
          className="hidden rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-sky-700 md:block"
        >
          Get Started
        </button>
        <button
          type="button"
          aria-label="Search"
          className="hidden text-lg text-slate-500 md:block"
        >
          ⌕
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
}
